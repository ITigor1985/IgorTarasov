import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import {
  Container,
  LinkList,
  LinkListItem,
  Header,
  ContainerCurrenciesCart,
  BtnCart,
} from './App.styled';
import logo from '../images/a-logo.svg';
import cart from '../images/vector.svg';

import { Component } from 'react';
import All from 'pages/all/all';
import Clothes from 'pages/clothes/clothes';
import Tech from 'pages/tech/tech';
import Cart from 'pages/cart/cart';
import Modal from './Modal';
import Currencies from './Currencies';
import { GlobalStyle } from 'GlobalStyled/GlobalStyled.styled';
import './App.css';

class App extends Component {
  state = {
    activCardIndex: null,
    cartProduct: [],
    currencie: 'USD',
    symbol: '$',
  };

  setCurrencie = (label, symbol) => {
    this.setState({ currencie: label, symbol: symbol });
  };

  setCartProduct = product => {
    this.setState(prevState => ({
      cartProduct: [...prevState.cartProduct, product],
    }));
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
    document.body.style.overflow = 'hidden';
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

  modalClose = event => {
    if (event.currentTarget !== event.target) return;
    this.setState({ productId: '', firstNaturalSizeImage: '' });
    document.body.style.overflow = 'visible';
  };
  modalCloseESC = () => {
    this.setState({ productId: '', firstNaturalSizeImage: '' });
    document.body.style.overflow = 'visible';
  };

  cleanEventListener = e => {
    if (e.code === 'Escape') {
      this.modalCloseESC();
    }
  };

  render() {
    return (
      <Container>
        <Router>
          <div>
            <Header>
              <LinkList>
                <LinkListItem>
                  <NavLink to="/all" activeClassName="active">
                    All
                  </NavLink>
                </LinkListItem>
                <LinkListItem>
                  <NavLink to="/clothes" activeClassName="active">
                    Clothes
                  </NavLink>
                </LinkListItem>
                <LinkListItem>
                  <NavLink to="/tech" activeClassName="active">
                    Tech
                  </NavLink>
                </LinkListItem>
              </LinkList>
              <img src={logo} alt="logo" width={41} height={41} />
              <ContainerCurrenciesCart>
                <Currencies
                  setCurrencie={this.setCurrencie}
                  symbol={this.state.symbol}
                />
                <BtnCart type="button">
                  <Link to="/cart">
                    <img src={cart} width={21} height={18} alt="cart" />
                  </Link>
                </BtnCart>
              </ContainerCurrenciesCart>
            </Header>

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
                <Cart
                  currencie={this.state.currencie}
                  product={this.state.cartProduct}
                />
              </Route>
            </Switch>
          </div>
        </Router>
        {this.state.productId && this.state.firstNaturalSizeImage && (
          <Modal
            productId={this.state.productId}
            bigImage={this.state.firstNaturalSizeImage}
            currencie={this.state.currencie}
            setCartProduct={this.setCartProduct}
            onClick={this.modalClose}
          />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
export default App;
