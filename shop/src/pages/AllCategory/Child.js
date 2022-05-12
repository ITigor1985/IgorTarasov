import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { withRouter } from 'react-router';
import { Get_category_products } from 'query/query';
import './Child.css';
import ProductsListItem from 'components/ProductsListItem';

class Child extends Component {
  render() {
    const {
      currencie,
      setActiveCard,
      activStyleCard,
      setCartProduct,
      location,
    } = this.props;
    const title = location.pathname.slice(1);

    return (
      <main>
        <ul className="listCard">
          <Query variables={{ title }} query={Get_category_products}>
            {({ loading, data }) => {
              if (loading) return 'Loading...';
              const { category } = data;
              return category.products.map((product, index) => (
                <ProductsListItem
                  product={product}
                  index={index}
                  key={product.id}
                  setActiveCard={setActiveCard}
                  activStyleCard={activStyleCard}
                  currencie={currencie}
                  setCartProduct={setCartProduct}
                />
              ));
            }}
          </Query>
        </ul>
      </main>
    );
  }
}

export default withRouter(Child);
