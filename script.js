var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var CARS = [{
  id: 1,
  brand: "Audi",
  models: [{
    id: 1,
    name: "A1",
    collection: [{
      id: 1,
      version: "Sportback",
      year: 2019,
      horsepower: 95,
      engine: 999
    }, {
      id: 2,
      version: "Citycarver",
      year: 2019,
      horsepower: 95,
      engine: 999
    }]
  }, {
    id: 2,
    name: "Q5",
    collection: [{
      id: 1,
      version: "FY 2021",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }, {
      id: 2,
      version: "Sportback",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }]
  }, {
    id: 3,
    name: "TT",
    collection: [{
      id: 1,
      version: "Coupe",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }, {
      id: 2,
      version: "Roadster",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }]
  }]
}, {
  id: 2,
  brand: "BMW",
  models: [{
    id: 1,
    name: "8 series",
    collection: [{
      id: 1,
      version: "G1X LCI",
      year: 2022,
      horsepower: 333,
      engine: 2998
    }, {
      id: 2,
      version: "G1X",
      year: 2019,
      horsepower: 340,
      engine: 2998
    }]
  }, {
    id: 2,
    name: "X6",
    collection: [{
      id: 1,
      version: "G06 LCI",
      year: 2023,
      horsepower: 530,
      engine: 4395
    }, {
      id: 2,
      version: "G06",
      year: 2020,
      horsepower: 286,
      engine: 2993
    }]
  }]
}];

var App = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Car Specs"
  ),
  React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      CARS.map(function (item, index) {
        return React.createElement(
          React.Fragment,
          { key: index },
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              { colSpan: 3 },
              item.brand
            )
          ),
          item.models.map(function (it, ind) {
            return React.createElement(
              React.Fragment,
              { key: ind },
              React.createElement(
                "tr",
                null,
                it.collection.map(function (t, r) {
                  return t.id === 1 && React.createElement(
                    React.Fragment,
                    { key: r },
                    React.createElement(
                      "td",
                      { className: 'name', rowSpan: 2 },
                      it.name
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement(
                        "ul",
                        null,
                        Object.keys(t).map(function (l, k) {
                          return React.createElement(
                            "li",
                            { key: k },
                            l,
                            ": ",
                            t[l]
                          );
                        })
                      )
                    )
                  );
                })
              ),
              React.createElement(
                "tr",
                null,
                it.collection.map(function (t, r) {
                  return t.id !== 1 && React.createElement(
                    "td",
                    { key: r },
                    React.createElement(
                      "ul",
                      null,
                      Object.keys(t).map(function (l, k) {
                        return React.createElement(
                          "li",
                          { key: k },
                          l,
                          ": ",
                          t[l]
                        );
                      })
                    )
                  );
                })
              )
            );
          })
        );
      })
    )
  )
);

root.render(App);