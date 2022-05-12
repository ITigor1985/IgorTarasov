import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnLink = styled(Link)`
  color: white;
`;

export const TitleCart = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: #1d1f22;
  margin-bottom: 55px;
`;

export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;
  border-top: 1px solid #e5e5e5;
`;

export const ContainerDescription = styled.div`
  width: 292px;
`;

export const ProductBrand = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 16px;
`;

export const ProductName = styled.p`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 43px;
`;

export const ProductPrice = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const RemoveProduct = styled.button`
  padding: 13px 116px;
  background-color: #5ece7b;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  border: none;
  text-transform: uppercase;
`;

export const Counter = styled.div`
  display: flex;
  height: 288px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;
`;

export const ContainerCounterCarousel = styled.div`
  display: flex;
`;

export const BtnIncrement = styled.button`
  width: 45px;
  height: 45px;
  background-color: white;
  font-size: 25px;
`;
export const BtnDecrement = styled.button`
  width: 45px;
  height: 45px;
  background-color: white;
  font-size: 25px;
`;

export const Container = styled.div`
  border-top: 1px solid #e5e5e5;
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

export const Total = styled.span`
  font-weight: 700;
`;
