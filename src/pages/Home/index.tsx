import { useState } from "react"
import { useTranslation } from "react-i18next"
import Form from "components/Form"
import Logo from "components/Logo"
import "./style.scss"

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
    <>
      {isOpenLogin ? (
        <Form />
      ) : (
        <>
          <Logo />
          <h2>{t("home:brandName")}</h2>
          <p>{t("home:brandDescription")}</p>
        </>
      )}

      <div className="App-link" onClick={onClickLogin}>
        {isOpenLogin ? t("home:applyCancel") : t("home:applySubmit")}
      </div>
    </>
  )
}
