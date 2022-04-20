import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from 'query/categories';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
    categories: [],
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">All</Link>
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
              <Route exact path="/">
                <All />
              </Route>
              <Route path="/clothes">
                <Clothes />
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
