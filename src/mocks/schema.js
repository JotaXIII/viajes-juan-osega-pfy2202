import { buildSchema, graphql } from 'graphql'
import { destinations, travelOptions } from './data'

const schema = buildSchema(`
  type Vuelo {
    id: ID!
    aerolinea: String!
    origen: String!
    salida: String!
    llegada: String!
    precio: Int!
    moneda: String!
    disponibilidad: Int!
  }

  type Hotel {
    id: ID!
    nombre: String!
    entrada: String!
    salida: String!
    precio: Int!
    moneda: String!
    disponibilidad: Int!
  }

  type OpcionesDestino {
    vuelos: [Vuelo!]!
    hoteles: [Hotel!]!
  }

  type Query {
    opcionesDestino(destinoId: ID!): OpcionesDestino!
  }
`)

const rootValue = {
  opcionesDestino({ destinoId }) {
    if (!destinations.some(({ id }) => id === destinoId)) {
      throw new Error('Destino inexistente.')
    }

    return travelOptions[destinoId] ?? { vuelos: [], hoteles: [] }
  },
}

export function runTravelQuery({ query, variables, operationName }) {
  return graphql({ schema, source: query, rootValue, variableValues: variables, operationName })
}
