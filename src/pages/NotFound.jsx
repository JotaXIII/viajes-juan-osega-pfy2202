import { Link } from 'react-router-dom'

export function NotFound({ title = 'Página no encontrada' }) {
  return (
    <section>
      <h1>{title}</h1>
      <Link to="/">Volver a destinos</Link>
    </section>
  )
}
