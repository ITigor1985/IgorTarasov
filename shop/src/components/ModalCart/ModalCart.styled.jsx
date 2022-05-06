import styled from 'styled-components';

export const OverlayCart = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(57, 55, 72, 0.22);
  z-index: 1200;
`;
export const Container = styled.div`
  max-width: 1238px;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;

export const ModalCartContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 325px;
  max-height: 600px;
  overflow: auto;
  top: 0px;
  right: 0px;
  padding: 32px 16px;
`;

export const MyBag = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

export const QuantityItems = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;

export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0px;
  border-top: 1px solid #e5e5e5;
`;

export const ContainerDescription = styled.div`
  width: 292px;
`;

export const ProductBrand = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
`;

export const ProductName = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const Counter = styled.div`
  display: flex;
  height: 190px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
`;

export const ContainerCounterCarousel = styled.div`
  display: flex;
`;

export const BtnIncrement = styled.button`
  width: 24px;
  height: 24px;
  background-color: white;
  font-size: 14px;
`;
export const BtnDecrement = styled.button`
  width: 24px;
  height: 24px;
  background-color: white;
  font-size: 14px;
`;
export const ContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;
export const Total = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;

export const ContainerBtns = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const BtnBag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 43px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  background-color: white;
`;
export const BtnCheckOut = styled.button`
  border: none;
  background-color: #5ece7b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 43px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;
