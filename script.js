var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var animals = [{ type: 'turtle', icon: '\uD83D\uDC22' }, { type: 'octopus', icon: '\uD83D\uDC19' }, { type: 'fish', icon: '\uD83D\uDC20' }, { type: 'flamingo', icon: '\uD83E\uDDA9' }, { type: 'penguin', icon: '\uD83D\uDC27' }];

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

    _this.state = {
      arr: _this.props.arr.map(function (item) {
        return Object.assign({}, item, { active: false });
      })
    };
    _this.interval = null;
    _this.borderOfTable = 0;
    return _this;
  }

  _createClass(Table, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        var notActiveIndexes = _this2.state.arr.map(function (item, index) {
          return Object.assign({}, item, { index: index });
        }).filter(function (item) {
          return !item.active;
        }).map(function (item) {
          return item.index;
        });

        if (notActiveIndexes.length === Math.round(_this2.state.arr.length / 2)) {
          _this2.borderOfTable = 10;
        } else if (notActiveIndexes.length === 1) {
          _this2.borderOfTable = 20;
          clearInterval(_this2.interval);
        }

        function getRandomInt(max) {
          return Math.floor(Math.random() * max);
        }

        var randomIndex = getRandomInt(notActiveIndexes.length);

        var updatedArr = [].concat(_toConsumableArray(_this2.state.arr));

        updatedArr[notActiveIndexes[randomIndex]].active = true;

        _this2.setState({ arr: updatedArr });
      }, 2000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      var arr = this.state.arr;


      return React.createElement(
        'table',
        { style: { border: this.borderOfTable + 'px solid rgb(103, 71, 71)' } },
        React.createElement(
          'tbody',
          null,
          arr.map(function (item, index) {
            return React.createElement(
              'tr',
              { className: item['active'] === true ? 'active' : null, key: index },
              React.createElement(
                'td',
                null,
                item.type
              ),
              React.createElement(
                'td',
                null,
                item.icon
              )
            );
          })
        )
      );
    }
  }]);

  return Table;
}(React.Component);

var App = React.createElement(
  React.Fragment,
  null,
  React.createElement(Table, { arr: animals })
);

root.render(App);