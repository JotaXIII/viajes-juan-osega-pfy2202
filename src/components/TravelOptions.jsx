import { useQuery } from '@apollo/client/react'
import { travelOptionsQuery } from '../api/apollo'
import { RequestState } from './RequestState'

const dates = new Intl.DateTimeFormat('es-CL', {
  dateStyle: 'medium',
  timeZone: 'UTC',
})

function Price({ price, currency }) {
  return <>{new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
  }).format(price)}</>
}

function TravelDate({ value }) {
  return <time dateTime={value}>{dates.format(new Date(value))}</time>
}

function OptionList({ title, items, renderDetails, getName }) {
  return (
    <section className="option-section">
      <h2>{title}</h2>
      {items.length === 0 ? <p>No hay opciones para este destino.</p> : (
        <ul className="option-list">
          {items.map((item) => (
            <li key={item.id} className="option-card">
              <h3>{getName(item)}</h3>
              {renderDetails(item)}
              <p><strong><Price price={item.precio} currency={item.moneda} /></strong></p>
              <p className={item.disponibilidad > 0 ? 'availability' : 'availability unavailable'}>{item.disponibilidad > 0 ? `Cupos disponibles: ${item.disponibilidad}` : 'Sin disponibilidad'}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export function TravelOptions({ destinationId }) {
  const { data, loading, error, refetch } = useQuery(travelOptionsQuery, {
    variables: { destinoId: destinationId },
  })
  const options = data?.opcionesDestino

  return (
    <RequestState
      loading={loading && 'Cargando vuelos y hoteles…'}
      error={error && 'No pudimos obtener las opciones de viaje.'}
      onRetry={() => { refetch().catch(() => {}) }}
    >
      {options && (
        <div className="travel-options">
          <OptionList title="Vuelos" items={options.vuelos} getName={(flight) => flight.aerolinea}
            renderDetails={(flight) => <>
              <p>Origen: {flight.origen}</p>
              <p>Salida: <TravelDate value={flight.salida} /></p>
              <p>Llegada: <TravelDate value={flight.llegada} /></p>
            </>}
          />
          <OptionList title="Hoteles" items={options.hoteles} getName={(hotel) => hotel.nombre}
            renderDetails={(hotel) => <>
              <p>Entrada: <TravelDate value={hotel.entrada} /></p>
              <p>Salida: <TravelDate value={hotel.salida} /></p>
            </>}
          />
        </div>
      )}
    </RequestState>
  )
}
