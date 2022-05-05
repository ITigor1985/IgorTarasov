import styled from 'styled-components';

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

export const CarouselCartProducts = styled.div`
  position: relative;
  display: flex;
  width: 200px;
`;

export const ArrowPrev = styled.button`
  position: absolute;
  padding: 0px;
  border: none;
  right: 72px;
  bottom: 16px;
  cursor: pointer;
`;

export const ArrowNext = styled.button`
  position: absolute;
  padding: 0px;
  border: none;
  right: 40px;
  bottom: 16px;
  cursor: pointer;
`;
