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

export const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($id: String!) {
    product(id: $id) {
      id
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      name
      description
      category
      prices {
        currency {
          symbol
          label
        }
        amount
      }
      brand
    }
  }
`;
