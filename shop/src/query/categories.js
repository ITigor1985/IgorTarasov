import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
      products {
        gallery
        name
        id
        description
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
