import styled from 'styled-components';

const fontSize = ({ eventType }) => {
  switch (eventType) {
    case 'modalCart':
      return '16px';
    case 'cart':
      return '24px';
    case 'productCard':
      return '18px';
    default:
      return '18px';
  }
};

const fontWeight = ({ eventType }) => {
  switch (eventType) {
    case 'modalCart':
      return 500;
    case 'cart':
      return 700;
    case 'productCard':
      return 500;
    default:
      return 500;
  }
};

export const CurrencyValue = styled.span`
  display: block;
  line-height: 18px;
  margin-bottom: 20px;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
`;
