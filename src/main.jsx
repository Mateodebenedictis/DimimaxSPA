import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./i18nextInit";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback="...">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
)
