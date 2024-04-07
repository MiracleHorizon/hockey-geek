import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'

const rootSelector = '#app-root'
const rootEl = document.querySelector(rootSelector)!
const appRoot = ReactDOM.createRoot(rootEl)

appRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
)
