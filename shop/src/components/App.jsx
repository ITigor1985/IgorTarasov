import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Query } from '@apollo/client/react/components';
import { GET_CURRENCIES } from 'query/categories';
import { Component } from 'react';
import All from 'pages/all/all';
import Clothes from 'pages/clothes/clothes';
import Tech from 'pages/tech/tech';
// export const App = () => {
//   const { loading, error, data } = useQuery(GET_CATEGORIES);
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     if (!loading) {
//       setCategories(data.categories);
//     }
//   }, [data, loading]);
//   return (
//     <div>
//       {categories.map((categori, index) => (
//         <div key={index}> {categori.name}</div>
//       ))}
//     </div>
//   );
// };

class App extends Component {
  state = {
    isLoading: false,
    currencie: 'USD',
  };

  setCurrencie = label => {
    this.setState({ currencie: label });
  };

  render() {
    return (
      <div>
        <Query query={GET_CURRENCIES}>
          {({ loading, data }) => {
            if (loading) return 'Loading...';
            const { currencies } = data;
            return currencies.map(({ label, symbol }) => (
              <button
                type="button"
                onClick={() => this.setCurrencie(label)}
                key={label}
              >
                {label}
                {symbol}
              </button>
            ));
          }}
        </Query>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/all">All</Link>
              </li>
              <li>
                <Link to="/clothes">Clothes</Link>
              </li>
              <li>
                <Link to="/tech">Tech</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/all">
                <All currencie={this.state.currencie} />
              </Route>
              <Route path="/clothes">
                <Clothes currencie={this.state.currencie} />
              </Route>
              <Route path="/tech">
                <Tech />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
