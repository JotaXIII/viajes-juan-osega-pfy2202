import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { graphqlUrl } from './endpoints'

export const apollo = new ApolloClient({
  link: new HttpLink({ uri: graphqlUrl }),
  cache: new InMemoryCache(),
})

export const travelOptionsQuery = gql`
  query OpcionesDestino($destinoId: ID!) {
    opcionesDestino(destinoId: $destinoId) {
      vuelos {
        id
        aerolinea
        origen
        salida
        llegada
        precio
        moneda
        disponibilidad
      }
      hoteles {
        id
        nombre
        entrada
        salida
        precio
        moneda
        disponibilidad
      }
    }
  }
`
