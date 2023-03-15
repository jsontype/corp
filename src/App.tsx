import { useState } from "react"
import Home from "pages/Home"
import "./App.css"
import i18n from "i18next"
import LanguageSelect from "./components/LanguageSelect"

export default function App({ i18nSetting }: any) {
  const onChangeToKO = () => {
    i18n.changeLanguage("ko")
  }

  const onChangeToEN = () => {
    i18n.changeLanguage("en")
  }

  const onChangeToJA = () => {
    i18n.changeLanguage("ja")
  }
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <LanguageSelect
          value={value}
          setValue={setValue}
          onChangeToKO={i18nSetting && onChangeToKO}
          onChangeToEN={i18nSetting && onChangeToEN}
          onChangeToJA={i18nSetting && onChangeToJA}
        />
      </header>

      <header id="home" className="App-header">
        <Home />
      </header>
    </div>
  )
}
