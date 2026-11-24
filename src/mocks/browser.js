import { setupWorker } from 'msw/browser'
import { delay, http, HttpResponse } from 'msw'
import { destinationsUrl, graphqlUrl } from '../api/endpoints'
import { destinations } from './data'

const worker = setupWorker(
  http.get(destinationsUrl, async () => {
    await delay(280)
    return HttpResponse.json(destinations)
  }),
  http.post(graphqlUrl, async ({ request }) => {
    const body = await request.json().catch(() => null)
    if (typeof body?.query !== 'string') {
      return HttpResponse.json({ errors: [{ message: 'Se requiere una consulta GraphQL.' }] }, { status: 400 })
    }

    await delay(350)
    const { runTravelQuery } = await import('./schema')
    return HttpResponse.json(await runTravelQuery(body))
  }),
)

export async function startMocks() {
  const workerUrl = new URL(`${import.meta.env.BASE_URL}mockServiceWorker.js`, window.location.href)

  if (navigator.serviceWorker && !navigator.serviceWorker.controller) {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration?.active?.scriptURL === workerUrl.href) {
      await registration.unregister()
    }
  }

  return worker.start({
    serviceWorker: { url: workerUrl },
    onUnhandledRequest: 'bypass',
    quiet: true,
  })
}
