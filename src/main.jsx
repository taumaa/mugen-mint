import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {ChainId, DAppProvider} from "@usedapp/core";


const config = {
    readOnlyChainId: ChainId.Arbitrum,
    readOnlyUrls: {
        [ChainId.Arbitrum]: "https://rpc.ankr.com/arbitrum",
    },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
  </React.StrictMode>
)
