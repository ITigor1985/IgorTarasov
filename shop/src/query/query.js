import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
      products {
        gallery
        inStock
        name
        id
        brand
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
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const Get_category_products = gql`
  query ($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        gallery
        inStock
        name
        id
        brand
        description
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
        category
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;
export const GET_Categories = gql`
  query {
    categories {
      name
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
      gallery
      name
      inStock
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
