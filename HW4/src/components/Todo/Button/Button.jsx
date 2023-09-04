

const Button = ({ text, handleFunc }) => {

  return (
    <button onClick={handleFunc}>{text}</button>
  )
}

export default Button