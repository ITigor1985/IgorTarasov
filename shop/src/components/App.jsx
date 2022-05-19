import { Component } from 'react';
import { GET_Categories } from 'query/query';
import { Query } from '@apollo/client/react/components';
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

import Currencies from './Currencies';
import { GlobalStyle } from 'GlobalStyled/GlobalStyled.styled';
import './App.css';
import ModalCart from './ModalCart';
import Child from 'pages/AllCategory/Child';
import ProductPage from 'pages/ProductPage';
import Cart from 'pages/cart/cart';

class App extends Component {
  state = {
    activCardIndex: null,
    cartProduct: [],
    quantity: 0,
    currencie: 'USD',
    symbol: '$',
    modalCartOpen: false,
    dropCurrenciesMenu: false,
    activeAttributes: [],
  };
  componentDidMount() {
    const products = localStorage.getItem('products');
    const parsedProducts = JSON.parse(products);

    if (parsedProducts) {
      this.setState({ cartProduct: parsedProducts });
    }
  }

  componentDidUpdate(prevState) {
    const nextProducts = this.state.cartProduct;
    const prevProducts = prevState.cartProduct;

    if (nextProducts !== prevProducts) {
      localStorage.setItem('products', JSON.stringify(nextProducts));
    }
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

  setAttributes = attribut => {
    const existingProduct = [...this.state.activeAttributes];

    if (existingProduct.length === 0) {
      existingProduct.push(attribut);
      this.setState({
        activeAttributes: existingProduct,
      });
    } else {
      const prevProduct = existingProduct
        .filter(
          item =>
            item.name === attribut.name && item.productId === attribut.productId
        )
        .map(item => {
          item.index = attribut.index;
          return item;
        });

      if (prevProduct.length === 0) {
        existingProduct.push(attribut);
        this.setState({
          activeAttributes: existingProduct,
        });
      } else {
        const newCartProduct = existingProduct.filter(
          item => item.name !== attribut.name
        );
        newCartProduct.push(...prevProduct);
        this.setState({
          activeAttributes: newCartProduct,
        });
      }
    }
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
      this.setState({
        dropCurrenciesMenu: false,
      });
    }
  };

  toggle = event => {
    if (event.currentTarget !== event.target) {
      this.setState(prevState => ({
        dropCurrenciesMenu: !prevState.dropCurrenciesMenu,
      }));
    }
  };

  setCartProduct = (product, id) => {
    const existingProduct = this.state.cartProduct;

    if (existingProduct.length === 0) {
      existingProduct.push(product);
      this.setState({
        cartProduct: existingProduct,
      });
      alert('Product add cart');
    } else {
      const prevProduct = existingProduct
        .filter(item => {
          return item.product.id === id;
        })
        .map(item => {
          item.quantity = item.quantity + 1;
          return item;
        });

      if (prevProduct.length === 0) {
        existingProduct.push(product);
        this.setState({
          cartProduct: existingProduct,
        });
        alert('Product add cart');
      } else {
        const newCartProduct = existingProduct.filter(
          item => item.product.id !== id
        );
        newCartProduct.push(...prevProduct);
        this.setState({
          cartProduct: newCartProduct,
        });
        alert('Product add cart');
      }
    }
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

  toggleModalCart = () => {
    this.setState(prevState => ({ modalCartOpen: !prevState.modalCartOpen }));
    this.state.modalCartOpen
      ? (document.body.style.overflow = 'visible')
      : (document.body.style.overflow = 'hidden');
  };
  closeModalCart = event => {
    if (event.currentTarget === event.target)
      this.setState({ modalCartOpen: false });
    document.body.style.overflow = 'visible';
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
                <BtnCart type="button" onClick={this.toggleModalCart}>
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
                  removeProduct={this.removeProduct}
                  setAttributes={this.setAttributes}
                />
              )}
            </Header>

            <Switch>
              <Route exact path="/cart">
                {this.state.cartProduct && (
                  <Cart
                    currencie={this.state.currencie}
                    symbol={this.state.symbol}
                    products={this.state.cartProduct}
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    setProducts={this.setProducts}
                    removeProduct={this.removeProduct}
                    setAttributes={this.setAttributes}
                  />
                )}
              </Route>
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
                  currencie={this.state.currencie}
                  setCartProduct={this.setCartProduct}
                  setAttributes={this.setAttributes}
                  activeAttributes={this.state.activeAttributes}
                />
              </Route>
            </Switch>
          </div>
        </Router>
        <GlobalStyle />
      </Container>
    );
  }
}
export default App;
