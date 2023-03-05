import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "assets/web/reportWebVitals"
import "./index.css"
import i18n from "./i18n"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App i18nSetting={i18n} />)

// To test performace : reportWebVitals(console.log)
reportWebVitals()
