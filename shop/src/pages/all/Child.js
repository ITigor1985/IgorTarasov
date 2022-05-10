import { Query } from '@apollo/client/react/components';
import { Get_category_products } from 'query/query';
import { Component } from 'react';
import './all.css';
import ProductsListItem from 'components/ProductsListItem';

import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class Child extends Component {
  render() {
    const { location } = this.props;
    const title = location.pathname.slice(1);
    const url = location.pathname;

    const {
      currencie,
      setActiveCard,
      activStyleCard,
      modalOpen,
      setCartProduct,
    } = this.props;
    return (
      <main>
        <ul className="listCard">
          <Query variables={{ title }} query={Get_category_products}>
            {({ loading, data }) => {
              if (loading) return 'Loading...';
              const { category } = data;
              return category.products.map((product, index) => (
                <>
                  <NavLink to={`${url}/${product.id}`}>
                    <ProductsListItem
                      product={product}
                      index={index}
                      setActiveCard={setActiveCard}
                      activStyleCard={activStyleCard}
                      currencie={currencie}
                      key={product.id}
                      //modalOpen={modalOpen}
                      setCartProduct={setCartProduct}
                    />
                  </NavLink>
                </>
              ));
            }}
          </Query>
        </ul>
      </main>
    );
  }
}

export default withRouter(Child);
