import { Query } from '@apollo/client/react/components';
import { GET_CATEGORIES } from 'query/categories';
import { Component } from 'react';
class All extends Component {
  render() {
    return (
      <div>
        <Query query={GET_CATEGORIES}>
          {({ loading, data }) => {
            if (loading) return 'Loading...';
            console.log(data);
            const { categories } = data;
            return categories.map(category =>
              category.products.map(product => (
                <div>
                  <p>{product.name}</p>
                  <img
                    src={product.gallery[0]}
                    alt={product.name}
                    width="400"
                  />
                </div>
              ))
            );
          }}
        </Query>
      </div>
    );
  }
}

export default All;
