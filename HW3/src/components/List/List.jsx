import ListItem from "./ListItem/ListItem"

const List = ({ array }) => {

  return (
    <ul className="list">
      {array.map((item, index) => <ListItem key={index} text={item.title} />)}
    </ul>
  )
}

export default List