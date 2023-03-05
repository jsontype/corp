import Home from "pages/Home"
import "./App.css"
import i18n from "i18next"

export default function App({ i18nSetting }: any) {
  console.log(i18nSetting)

  const onChangeToKO = () => {
    i18n.changeLanguage("ko")
  }

  const onChangeToEN = () => {
    i18n.changeLanguage("en")
  }

  const onChangeToJA = () => {
    i18n.changeLanguage("ja")
  }

  return (
    <>
      <Home
        onChangeToKO={onChangeToKO}
        onChangeToEN={onChangeToEN}
        onChangeToJA={onChangeToJA}
      />
    </>
  )
}
