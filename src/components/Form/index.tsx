import "./style.css"

export default function AnimatedLogin() {
  return (
    <div className="box">
      <form autoComplete="off">
        <h3>Login</h3>
        <div className="inputBox">
          <input type="text" required={true} />
          <span>ID</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required={true} />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <span className="textLink">What is this?</span>
          <span className="textLink">Policy</span>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
