import { useState } from 'react';
import './Todo.scss'
import List from '../List/List';
import Button from '../Button/Button';

const Todo = () => {

  const [listFirst, setListFirst] = useState([
    {
      id: 1,
      title: `Task 1`
    },
    {
      id: 2,
      title: `Task 2`
    },
    {
      id: 3,
      title: `Task 3`
    },
    {
      id: 4,
      title: `Task 4`
    },
    {
      id: 5,
      title: `Task 5`
    }
  ])
  const [listSecond, setListSecond] = useState([])
  const [listThird, setListThird] = useState([])

  const transferToRightForFirstList = () => {
    const [firstItem, ...updateItems] = listFirst
    setListFirst(updateItems)
    setListSecond([firstItem, ...listSecond])
  }

  const transferToRightForSecondList = () => {
    const [firstItem, ...updateItems] = listSecond
    setListSecond(updateItems)
    setListThird([firstItem, ...listThird])
  }

  const transferToLeftForSecondList = () => {
    const [firstItem, ...updateItems] = listSecond
    setListSecond(updateItems)
    setListFirst([firstItem, ...listFirst])
  }

  const removeLastItem = () => {
    setListThird(prevState => prevState.slice(0, -1))
  }

  return (
    <div className='container__todo'>

      <div className='container__todo-list'>
        <List array={listFirst} />
        {listFirst.length ?
          <div className='buttons'>
            <Button handleFunc={transferToRightForFirstList} text={'Transfer first to right'} />
          </div>
          : null
        }
      </div>

      <div className='container__todo-list'>
        <List array={listSecond} />
        {listSecond.length ?
          <div className='buttons'>
            <Button handleFunc={transferToLeftForSecondList} text={'Transfer first to left'} />
            <Button handleFunc={transferToRightForSecondList} text={'Transfer first to right'} />
          </div>
          : null
        }
      </div>

      <div className='container__todo-list'>
        <List array={listThird} />
        {listThird.length ?
          <div className='buttons'>
            <Button handleFunc={removeLastItem} text={'Remove last item'} />
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default Todo