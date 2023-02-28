import "./style.css"

export default function AnimatedLogin() {
  return (
    <div className="box">
      <form autoComplete="off">
        <h3>Sign in</h3>
        <div className="inputBox">
          <input type="text" required={true} />
          <span>Userame</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required={true} />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <span className="textLink">Forgot Password ?</span>
          <span className="textLink">Signup</span>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
