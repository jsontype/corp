import { useState } from "react"
import AnimatedLogin from "components/AnimatedLogin"
import AnimatedLogo from "components/AnimatedLogo"
import "./style.css"

export default function Home() {
  const [isOpenLogin, setIsOpenLogin] = useState(false)

  const onClickLogin = () => {
    setIsOpenLogin(!isOpenLogin)
  }

  return (
    <div className="App">
      <header className="App-header">
        {isOpenLogin ? <AnimatedLogin /> : <AnimatedLogo />}
        <p>
          Welcome to <code>Y-Systems</code>
        </p>
        <div className="App-link" onClick={onClickLogin}>
          Login
        </div>
      </header>
    </div>
  )
}
