import { Link, useParams } from 'react-router-dom'
import { Activities } from '../components/Activities'
import { TravelOptions } from '../components/TravelOptions'
import { NotFound } from './NotFound'

export function Destination({ items }) {
  const { destinationId } = useParams()
  const destination = items.find(({ id }) => id === destinationId)
  if (!destination) return <NotFound title="Destino no encontrado" />

  return (
    <>
      <Link className="back-link" to="/">← Volver a destinos</Link>
      <section className={`detail-banner ${destination.id}`} aria-labelledby="destination-title">
        <p className="eyebrow">{destination.pais} · {destination.paisaje}</p>
        <h1 id="destination-title">{destination.nombre}</h1>
        <h2>Actividades populares</h2>
        <Activities items={destination.actividades} />
      </section>
      <TravelOptions key={destination.id} destinationId={destination.id} />
    </>
  )
}
