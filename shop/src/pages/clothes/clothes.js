import { Component } from 'react';
import { GET_CATEGORIES } from 'query/query';
import { Query } from '@apollo/client/react/components';
import ProductsListItem from 'components/ProductsListItem';

class Clothes extends Component {
  render() {
    const {
      currencie,
      setActiveCard,
      activStyleCard,
      modalOpen,
      setCartProduct,
    } = this.props;

    return (
      <ul className="listCard">
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            if (loading) return 'Loading...';
            const { categories } = data;
            return categories.map(category => {
              if (category.name === 'clothes') {
                return category.products.map((product, index) => (
                  <ProductsListItem
                    product={product}
                    index={index}
                    setActiveCard={setActiveCard}
                    activStyleCard={activStyleCard}
                    currencie={currencie}
                    key={product.id}
                    modalOpen={modalOpen}
                    setCartProduct={setCartProduct}
                  />
                ));
              }
              return null;
            });
          }}
        </Query>
      </ul>
    );
  }
}

export default Clothes;
