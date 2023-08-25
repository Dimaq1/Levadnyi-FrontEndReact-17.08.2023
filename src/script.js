const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` }
]

class Table extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      arr: this.props.arr.map(item => ({ ...item, active: false }))
    };
    this.interval = null
    this.borderOfTable = 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const notActiveIndexes = this.state.arr
        .map((item, index) => ({ ...item, index }))
        .filter(item => !item.active)
        .map(item => item.index)

      if (notActiveIndexes.length === Math.round(this.state.arr.length / 2)) {
        this.borderOfTable = 10
      } else if (notActiveIndexes.length === 1) {
        this.borderOfTable = 20
        clearInterval(this.interval)
      }

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      const randomIndex = getRandomInt(notActiveIndexes.length)

      const updatedArr = [...this.state.arr]

      updatedArr[notActiveIndexes[randomIndex]].active = true;

      this.setState({ arr: updatedArr })
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { arr } = this.state

    return <table style={{ border: `${this.borderOfTable}px solid rgb(103, 71, 71)` }}>

      <tbody>

        {arr
          .map((item, index) => <tr className={item['active'] === true ? 'active' : null} key={index}>
            <td>
              {item.type}
            </td>

            <td>
              {item.icon}
            </td>
          </tr>)
        }

      </tbody>

    </table >
  }
}



const App = <React.Fragment>

  <Table arr={animals} />

</React.Fragment>


root.render(App)
















