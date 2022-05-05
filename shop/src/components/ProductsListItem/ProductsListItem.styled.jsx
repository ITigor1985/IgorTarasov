import styled from 'styled-components';

export const ContainerImg = styled.div`
  position: relative;
  margin-bottom: 24px;
`;
export const ImageCart = styled.img`
  width: 72px;
  height: 72px;
`;
export const AddToCart = styled.button`
  position: absolute;
  background-color: inherit;
  border: none;
  right: 16px;
  bottom: 0px;
  transform: translateY(50%);
  padding: 0;
  cursor: pointer;
`;

export const ImgProduct = styled.img`
  width: 356px;
  height: 358px;
  object-fit: contain;
`;

export const ProductListItemContainer = styled.li`
  display: inline-block;
  padding: 16px;
`;
export const Overley = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(196, 196, 196, 0.247); ;
`;

export const OutOfStock = styled.p`
  position: absolute;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  text-transform: uppercase;
  color: #8d8f9a;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProductName = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 10px;
`;
