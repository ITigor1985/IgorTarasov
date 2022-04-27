import { Query } from '@apollo/client/react/components';
import { GET_CATEGORIES } from 'query/categories';
import { Component } from 'react';
import './all.css';
import ProductsListItem from 'components/ProductsListItem';

class All extends Component {
  render() {
    const { currencie, setActiveCard, activStyleCard } = this.props;
    return (
      <ul className="listCard">
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            console.log(data);
            if (loading) return 'Loading...';

            const { categories } = data;
            return categories.map(category => {
              if (category.name === 'all') {
                return category.products.map((product, index) => (
                  <ProductsListItem
                    product={product}
                    index={index}
                    setActiveCard={setActiveCard}
                    activStyleCard={activStyleCard}
                    currencie={currencie}
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

export default All;
