import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "assets/web/reportWebVitals"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />)

// To test performace : reportWebVitals(console.log)
reportWebVitals()
