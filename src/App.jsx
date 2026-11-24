import { useEffect, useRef } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useDestinations } from './api/useDestinations'
import { RequestState } from './components/RequestState'
import { Destination } from './pages/Destination'
import { Destinations } from './pages/Destinations'
import { NotFound } from './pages/NotFound'

export function App() {
  const { status, items, retry } = useDestinations()
  const { pathname } = useLocation()
  const main = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    main.current.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <header className="site-header">
        <nav className="shell" aria-label="Navegación principal">
          <Link className="brand" to="/"><span aria-hidden="true">↗</span> Maleta en Fuga</Link>
          <Link to="/" aria-current={pathname === '/' ? 'page' : undefined}>Destinos</Link>
        </nav>
      </header>
      <main className="shell" id="content" ref={main} tabIndex={-1}>
        <RequestState
          loading={status === 'loading' && 'Cargando destinos…'}
          error={status === 'error' && 'No pudimos cargar los destinos.'}
          onRetry={retry}
        >
          <Routes>
            <Route path="/" element={<Destinations items={items} />} />
            <Route path="/destinos/:destinationId" element={<Destination items={items} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RequestState>
      </main>
      <footer className="site-footer">
        <div className="shell">Maleta en Fuga <span>Vuelos, hoteles y precios ficticios.</span></div>
      </footer>
    </>
  )
}
