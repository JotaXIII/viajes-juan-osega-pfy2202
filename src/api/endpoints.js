const baseUrl = new URL(import.meta.env.BASE_URL, window.location.href)

export const destinationsUrl = new URL('api/destinos', baseUrl).href
export const graphqlUrl = new URL('graphql', baseUrl).href
