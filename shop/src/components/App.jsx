import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import {
  Container,
  LinkList,
  LinkListItem,
  Header,
  ContainerCurrenciesCart,
  BtnCart,
  ContainerCartImage,
  NumberOfGoods,
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
import ModalCart from './ModalCart';

class App extends Component {
  state = {
    activCardIndex: null,
    cartProduct: [],
    quantity: 0,
    currencie: 'USD',
    symbol: '$',
    modalCartOpen: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.cleanEventListener);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.cleanEventListener);
  }

  handleIncrement = (quantity, id) => {
    const increment = quantity + 1;
    const products = this.state.cartProduct.map(product => ({
      ...product,
      quantity: product.product.id === id ? increment : product.quantity,
    }));
    this.setState({ cartProduct: products });
  };
  handleDecrement = (quantity, id) => {
    const decrement = quantity - 1;
    if (decrement < 1) return;
    const products = this.state.cartProduct.map(product => ({
      ...product,
      quantity: product.product.id === id ? decrement : product.quantity,
    }));
    this.setState({ cartProduct: products });
  };

  setCurrencie = (label, symbol) => {
    this.setState({ currencie: label, symbol: symbol });
  };

  setCartProduct = (product, id) => {
    const existingProduct = this.state.cartProduct.some(
      prod => prod.product.id === id
    );

    if (existingProduct) {
      alert('this product is in the cart');
      return;
    }
    this.setState(prevState => ({
      cartProduct: [...prevState.cartProduct, product],
    }));
    alert('product add to cart');
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

  modalClose = event => {
    if (event.currentTarget !== event.target) return;
    this.setState({ productId: '', firstNaturalSizeImage: '' });
    document.body.style.overflow = 'visible';
  };
  modalCloseESC = () => {
    this.setState({ productId: '', firstNaturalSizeImage: '' });
    document.body.style.overflow = 'visible';
  };

  openModalCart = () => {
    this.setState({ modalCartOpen: true });
    document.body.style.overflow = 'hidden';
  };
  closeModalCart = () => {
    this.setState({ modalCartOpen: false });
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
                <BtnCart type="button" onClick={this.openModalCart}>
                  <ContainerCartImage>
                    <img src={cart} width={21} height={18} alt="cart" />
                    {this.state.cartProduct.length > 0 && (
                      <NumberOfGoods>
                        {this.state.cartProduct.reduce((total, item) => {
                          return total + item.quantity;
                        }, 0)}
                      </NumberOfGoods>
                    )}
                  </ContainerCartImage>
                </BtnCart>
              </ContainerCurrenciesCart>
              {this.state.modalCartOpen && (
                <ModalCart
                  products={this.state.cartProduct}
                  currencie={this.state.currencie}
                  symbol={this.state.symbol}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
                  closeModalCart={this.closeModalCart}
                />
              )}
            </Header>

            <Switch>
              <Route exact path="/all">
                <All
                  setCartProduct={this.setCartProduct}
                  currencie={this.state.currencie}
                  activStyleCard={this.activStyleCard}
                  setActiveCard={this.setActiveCard}
                  modalOpen={this.modalOpen}
                />
              </Route>
              <Route path="/clothes">
                <Clothes
                  setCartProduct={this.setCartProduct}
                  currencie={this.state.currencie}
                  activStyleCard={this.activStyleCard}
                  setActiveCard={this.setActiveCard}
                  modalOpen={this.modalOpen}
                />
              </Route>
              <Route path="/tech">
                <Tech
                  setCartProduct={this.setCartProduct}
                  currencie={this.state.currencie}
                  activStyleCard={this.activStyleCard}
                  setActiveCard={this.setActiveCard}
                  modalOpen={this.modalOpen}
                />
              </Route>
              <Route path="/cart">
                <Cart
                  currencie={this.state.currencie}
                  symbol={this.state.symbol}
                  products={this.state.cartProduct}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
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
