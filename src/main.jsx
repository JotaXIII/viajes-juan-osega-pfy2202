import { ApolloProvider } from '@apollo/client/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import './styles.css'
import { apollo } from './api/apollo'

const root = createRoot(document.getElementById('root'))

import('./mocks/browser').then(({ startMocks }) => startMocks()).then(() => {
  root.render(
    <StrictMode>
      <ApolloProvider client={apollo}>
        <HashRouter>
          <App />
        </HashRouter>
      </ApolloProvider>
    </StrictMode>,
  )
}).catch(() => {
  root.render(<main><p role="alert">No pudimos iniciar la aplicación. Recarga la página para volver a intentarlo.</p></main>)
})
