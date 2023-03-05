import "./style.css"

export default function AnimatedLogin() {
  return (
    <div className="box">
      <form autoComplete="off">
        <h3>지원하기</h3>
        <div className="inputBox">
          <input type="text" required={true} />
          <span>성함</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required={true} />
          <span>경력사항</span>
          <i></i>
        </div>
        <div className="links">
          <span className="textLink">소개자이신가요?</span>
          <span className="textLink">약관</span>
        </div>
        <input type="submit" value="제출" />
      </form>
    </div>
  )
}
