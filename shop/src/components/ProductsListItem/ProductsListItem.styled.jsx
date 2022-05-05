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
  padding: 16px;
`;

export const ProductName = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 10px;
`;
