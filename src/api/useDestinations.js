import { useEffect, useState } from 'react'
import { destinationsUrl } from './endpoints'

const loading = { status: 'loading', items: [] }

export function useDestinations() {
  const [result, setResult] = useState(loading)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const response = await fetch(destinationsUrl, { signal: controller.signal })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const items = await response.json()
        if (!controller.signal.aborted) setResult({ status: 'ready', items })
      } catch {
        if (!controller.signal.aborted) setResult({ status: 'error', items: [] })
      }
    }

    load()
    return () => controller.abort()
  }, [attempt])

  function retry() {
    setResult(loading)
    setAttempt((previous) => previous + 1)
  }

  return { ...result, retry }
}
