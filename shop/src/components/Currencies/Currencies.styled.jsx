import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const BtnCurrenciesSelection = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  width: 55px;
`;

export const Symbol = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  margin-right: 8px;
`;

export const BtnCurrency = styled.button`
  background-color: white;
  border: none;
  padding: 8px 38px 8px 20px;
  :nth-child(2n) {
    background-color: #eeeeee;
  }
  :last-child {
    margin-bottom: 0px;
  }
`;
export const ContainerCurrencyDropDown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100%;
  z-index: 1000;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;
