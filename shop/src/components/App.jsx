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
import Cart from 'pages/cart/cart';
import Modal from './Modal';
import Currencies from './Currencies';
import { GlobalStyle } from 'GlobalStyled/GlobalStyled.styled';
import './App.css';
import ModalCart from './ModalCart';
import { GET_Categories } from 'query/query';
import { Query } from '@apollo/client/react/components';
import Child from 'pages/all/Child';
import ProductPage from 'pages/ProductPage';

class App extends Component {
  state = {
    activCardIndex: null,
    cartProduct: [],
    quantity: 0,
    currencie: 'USD',
    symbol: '$',
    modalCartOpen: false,
    dropCurrenciesMenu: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.cleanEventListener);

    const products = localStorage.getItem('products');
    const parsedProducts = JSON.parse(products);

    if (parsedProducts) {
      this.setState({ cartProduct: parsedProducts });
    }
  }

  componentDidUpdate(_, prevState) {
    const nextProducts = this.state.cartProduct;
    const prevProducts = prevState.cartProduct;

    if (nextProducts !== prevProducts) {
      localStorage.setItem('products', JSON.stringify(nextProducts));
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.cleanEventListener);
  }

  setProducts = products => {
    this.setState({ cartProduct: products });
  };

  removeProduct = id => {
    const products = this.state.cartProduct.filter(
      product => product.product.id !== id
    );
    this.setState({ cartProduct: products });
  };

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

  setCurrencie = (label, symbol, currentTarget, e) => {
    this.setState({ currencie: label, symbol: symbol });
    if (currentTarget === e.target) {
      this.setState(prevState => ({
        dropCurrenciesMenu: !prevState.dropCurrenciesMenu,
      }));
    }
  };

  toggle = event => {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.currentTarget !== event.target) {
      this.setState(prevState => ({
        dropCurrenciesMenu: !prevState.dropCurrenciesMenu,
      }));
    }
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
                <Query query={GET_Categories}>
                  {({ loading, data }) => {
                    if (loading) return 'Loading...';
                    const { categories } = data;
                    return categories.map(({ name }) => (
                      <LinkListItem key={name}>
                        <NavLink to={`/${name}`} activeClassName="active">
                          {name}
                        </NavLink>
                      </LinkListItem>
                    ));
                  }}
                </Query>
              </LinkList>
              <img src={logo} alt="logo" width={41} height={41} />
              <ContainerCurrenciesCart>
                <Currencies
                  setCurrencie={this.setCurrencie}
                  symbol={this.state.symbol}
                  dropCurrenciesMenu={this.state.dropCurrenciesMenu}
                  toggle={this.toggle}
                  closeCurrenciesDropDown={this.closeCurrenciesDropDown}
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
              <Route exact path="/:id">
                <Child
                  setCartProduct={this.setCartProduct}
                  currencie={this.state.currencie}
                  activStyleCard={this.activStyleCard}
                  setActiveCard={this.setActiveCard}
                  modalOpen={this.modalOpen}
                />
              </Route>
              <Route path="/:id/:productId" children={<ProductPage />}>
                <ProductPage
                  productId={this.state.productId}
                  bigImage={this.state.firstNaturalSizeImage}
                  currencie={this.state.currencie}
                  setCartProduct={this.setCartProduct}
                />
              </Route>
              <Route path="/cart">
                <Cart
                  currencie={this.state.currencie}
                  symbol={this.state.symbol}
                  products={this.state.cartProduct}
                  handleIncrement={this.handleIncrement}
                  handleDecrement={this.handleDecrement}
                  setProducts={this.setProducts}
                  removeProduct={this.removeProduct}
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
