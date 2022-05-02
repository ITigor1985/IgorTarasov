import styled from 'styled-components';

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

export const ListGallery = styled.ul`
  width: 9999px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: margin-left 250ms;
  font-size: 0;
`;

export const ListGalleryItem = styled.li`
  display: inline-block;
`;

export const ProductImage = styled.img`
  display: block;
  height: 288px;
  width: 200px;
  object-fit: contain;
`;

export const ContainerGallery = styled.div`
  width: 200px;
  overflow: hidden;
`;

export const Carousel = styled.div`
  position: relative;
  width: 200px;
`;

export const ArrowPrev = styled.button`
  position: absolute;
`;

export const ArrowNext = styled.button`
  position: absolute;
`;
