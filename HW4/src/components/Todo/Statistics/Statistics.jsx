
const Statistics = ({ arr }) => {
  let completedTrue = 0
  let completedFalse = 0
  arr.map((item) => {
    if (item.completed) {
      completedTrue += 1
    } else {
      completedFalse += 1
    }
  })

  return (
    <ul>
      <li>All tasks: {arr.length}</li>
      <li>Completed tasks: {completedTrue}</li>
      <li>In progress tasks: {completedFalse}</li>
    </ul>
  )
}

export default Statistics