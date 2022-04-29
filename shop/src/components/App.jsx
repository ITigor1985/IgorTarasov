import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Component } from 'react';
import All from 'pages/all/all';
import Clothes from 'pages/clothes/clothes';
import Tech from 'pages/tech/tech';
import Cart from 'pages/cart/cart';
import Modal from './Modal';
import Currencies from './Currencies';

class App extends Component {
  state = {
    activCardIndex: null,
    isLoading: false,
    currencie: 'USD',
    symbol: '$',
  };

  setCurrencie = (label, symbol) => {
    this.setState({ currencie: label, symbol: symbol });
  };

  activStyleCard = index => {
    const styleOption = ['cart'];
    if (this.state.activCardIndex === index) {
      styleOption.push('cart__visible');
    }
    return styleOption.join(' ');
  };

  setActiveCard = index => {
    this.setState({ activCardIndex: index });
  };

  modalOpen = (id, bigImage, event) => {
    event.preventDefault();
    this.setState({
      productId: id,
      firstNaturalSizeImage: bigImage,
    });
  };
  componentDidMount() {
    window.addEventListener('keydown', this.cleanEventListener);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.cleanEventListener);
  }

  modalClose = () => {
    this.setState({ productId: '', firstNaturalSizeImage: '' });
  };

  cleanEventListener = e => {
    if (e.code === 'Escape') {
      this.modalClose();
    }
  };

  render() {
    return (
      <div>
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
            <Currencies
              setCurrencie={this.setCurrencie}
              symbol={this.state.symbol}
            />
            <button type="button">
              <Link to="/cart">Cart</Link>
            </button>
            <hr />

            <Switch>
              <Route exact path="/all">
                <All
                  currencie={this.state.currencie}
                  activStyleCard={this.activStyleCard}
                  setActiveCard={this.setActiveCard}
                  modalOpen={this.modalOpen}
                />
              </Route>
              <Route path="/clothes">
                <Clothes
                  currencie={this.state.currencie}
                  activStyleCard={this.activStyleCard}
                  setActiveCard={this.setActiveCard}
                  modalOpen={this.modalOpen}
                />
              </Route>
              <Route path="/tech">
                <Tech
                  currencie={this.state.currencie}
                  activStyleCard={this.activStyleCard}
                  setActiveCard={this.setActiveCard}
                  modalOpen={this.modalOpen}
                />
              </Route>
              <Route path="/cart">
                <Cart currencie={this.state.currencie} />
              </Route>
            </Switch>
          </div>
        </Router>
        {this.state.productId && this.state.firstNaturalSizeImage && (
          <Modal
            productId={this.state.productId}
            bigImage={this.state.firstNaturalSizeImage}
            currencie={this.state.currencie}
            //onClick={this.modalClose}
          />
        )}
      </div>
    );
  }
}
export default App;
