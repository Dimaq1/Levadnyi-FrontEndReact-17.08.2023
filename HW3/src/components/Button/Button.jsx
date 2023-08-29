import './Button.scss'

const Button = ({ text, handleFunc }) => {

  return (
    <button onClick={handleFunc} className="button">{text}</button>
  )
}

export default Button