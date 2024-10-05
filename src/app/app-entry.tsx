import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import '@/shared/styles.css'

const rootEl = document.querySelector('#app-root')!
const appRoot = ReactDOM.createRoot(rootEl)

appRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
)