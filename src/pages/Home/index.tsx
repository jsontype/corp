import { useState } from "react"
import AnimatedLogin from "components/AnimatedLogin"
import AnimatedLogo from "components/AnimatedLogo"
import "./style.scss"
import { useTranslation } from "react-i18next"

type HomeProps = {
  onChangeToKO: () => void
  onChangeToEN: () => void
  onChangeToJA: () => void
}

export default function Home({
  onChangeToKO,
  onChangeToEN,
  onChangeToJA,
}: HomeProps) {
  const { t } = useTranslation(["page"])
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const onClickLogin = () => {
    setIsOpenLogin(!isOpenLogin)
  }

  return (
    <div className="App">
      <header className="App-header">
        {isOpenLogin ? (
          <AnimatedLogin />
        ) : (
          <>
            <AnimatedLogo />
            <h2>{t("home:brandName")}</h2>
            <p>{t("home:brandDescription")}</p>
          </>
        )}

        <div className="App-link" onClick={onClickLogin}>
          {isOpenLogin ? t("home:applyCancel") : t("home:applySubmit")}
        </div>

        <div className="LanguageBtns">
          <button onClick={onChangeToKO}>{t("home:languageKorean")}</button>
          <button onClick={onChangeToEN}>{t("home:languageEnglish")}</button>
          <button onClick={onChangeToJA}>{t("home:languageJapanese")}</button>
        </div>
      </header>
    </div>
  )
}
