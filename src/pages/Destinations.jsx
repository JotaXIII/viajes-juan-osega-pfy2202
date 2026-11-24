import { Link } from 'react-router-dom'
import { Activities } from '../components/Activities'

export function Destinations({ items }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Escapadas por Chile</p>
          <h1>Tu maleta tiene planes.</h1>
          <p>La rutina puede esperar. Explora destinos y encuentra vuelos y hoteles para tu próxima escapada.</p>
          <button type="button" onClick={() => {
            document.getElementById('destinations-title').focus()
          }}>Explorar destinos <span aria-hidden="true">↓</span></button>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src={`${import.meta.env.BASE_URL}maleta.webp`} alt="" />
        </div>
      </section>
      <section className="catalog" aria-labelledby="destinations-title">
        <h2 id="destinations-title" tabIndex={-1}>Destinos disponibles</h2>
        {items.length === 0 ? <p>No hay destinos disponibles.</p> : (
          <ul className="destinations-grid">
            {items.map((destination) => (
              <li key={destination.id} className="destination-card">
                <div className={`destination-banner ${destination.id}`}>
                  <span>{destination.pais} · {destination.paisaje}</span>
                  <span className="destination-icon" aria-hidden="true">{destination.icono}</span>
                </div>
                <div className="destination-copy">
                  <h3>{destination.nombre}</h3>
                  <Activities items={destination.actividades} />
                  <Link className="card-link" to={`/destinos/${destination.id}`} aria-label={`Ver vuelos y hoteles en ${destination.nombre}`}>
                    Ver vuelos y hoteles <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
