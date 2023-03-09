import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import "./style.scss"

export default function Footer({
  value,
  setValue,
  onChangeToKO,
  onChangeToEN,
  onChangeToJA,
}: any) {
  const { t } = useTranslation()

  useEffect(() => {
    switch (value) {
      case 0:
        onChangeToKO()
        break
      case 1:
        onChangeToEN()
        break
      case 2:
        onChangeToJA()
        break
      default:
        onChangeToJA()
        break
    }
  }, [value, onChangeToKO, onChangeToEN, onChangeToJA])

  return (
    <Box sx={{ width: 250 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue) => {
          e.preventDefault()
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          label={t("home:languageKorean")}
          icon={
            <img
              src="https://flagcdn.com/16x12/kr.png"
              srcSet="https://flagcdn.com/32x24/kr.png 2x,
              https://flagcdn.com/48x36/kr.png 3x"
              width="16"
              height="12"
              alt="South Korea"
            />
          }
          className={"languageBtnGroup"}
        />
        <BottomNavigationAction
          label={t("home:languageEnglish")}
          icon={
            <img
              src="https://flagcdn.com/16x12/us.png"
              srcSet="https://flagcdn.com/32x24/us.png 2x,
              https://flagcdn.com/48x36/us.png 3x"
              width="16"
              height="12"
              alt="United States"
            />
          }
          className={"languageBtnGroup"}
        />
        <BottomNavigationAction
          label={t("home:languageJapanese")}
          icon={
            <img
              src="https://flagcdn.com/16x12/jp.png"
              srcSet="https://flagcdn.com/32x24/jp.png 2x,
              https://flagcdn.com/48x36/jp.png 3x"
              width="16"
              height="12"
              alt="Japan"
            />
          }
          className={"languageBtnGroup"}
        />
      </BottomNavigation>
    </Box>
  )
}
