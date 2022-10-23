import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './views/wordle'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
