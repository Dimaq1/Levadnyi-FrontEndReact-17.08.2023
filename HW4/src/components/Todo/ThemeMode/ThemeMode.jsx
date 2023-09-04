
const ThemeMode = ({ toggleTheme, themeMode }) => {

  return (
    <select onChange={toggleTheme} value={themeMode}>
      <option value="light">light</option>
      <option value="dark">dark</option>
    </select>

  )
}

export default ThemeMode