import Button from "../Button/Button"
import './TodoList.scss'

const TodoList = ({ array, handleFunc, themeMode }) => {

  return (
    <div>
      {array.length > 0 ? (
        <table className={themeMode === 'light' ? 'light-table' : 'dark-table'}>
          <tbody>
            {array.map((item, index) => (
              <tr key={index}>
                <td style={{ background: item.completed ? 'red' : 'green' }}>{item.title}</td>
                <td>
                  <Button handleFunc={() => handleFunc(index)} text={item.completed ? 'Delete' : 'Complete'} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>

  )
}

export default TodoList