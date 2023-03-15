import { useState } from "react"
import { useTranslation } from "react-i18next"
import Form from "components/Form"
import Logo from "components/Logo"
import "./style.scss"

export default function Home() {
  const { t } = useTranslation(["page"])
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const onClickLogin = () => {
    setIsOpenLogin(!isOpenLogin)
  }

  const onClickDevMentee = () => {
    window.location.href =
      "https://drive.google.com/drive/folders/1VovADSdZS1AooPqVgONC6SpRFG0QP_wv?usp=sharing"
  }
  const onClickDevSup = () => {
    window.location.href =
      "https://drive.google.com/drive/folders/1RrHtNLlhHcE5LjXtcxOfi_WUMSHGtmz4?usp=sharing"
  }
  const onClickPromo = () => {
    window.location.href =
      "https://drive.google.com/drive/folders/168d-B5RTKozSCcWiyiqDS3UhRdO-lwZd?usp=sharing"
  }

  return (
    <>
      {isOpenLogin ? (
        <Form />
      ) : (
        <>
          <Logo />
          <p>{t("home:hello")}</p>
        </>
      )}

      <div className="App-link" onClick={onClickLogin}>
        <span style={{ margin: 10 }}>
          {isOpenLogin ? t("home:applyCancel") : t("home:applySubmit")}
        </span>
        <span onClick={onClickPromo} style={{ margin: 10 }}>
          {t("home:promoSupData")}
        </span>
        <span onClick={onClickDevSup} style={{ margin: 10 }}>
          {t("home:devSupData")}
        </span>
        <span onClick={onClickDevMentee} style={{ margin: 10 }}>
          {t("home:devMenteeData")}
        </span>
      </div>
    </>
  )
}
