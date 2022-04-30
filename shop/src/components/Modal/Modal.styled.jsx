import styled from 'styled-components';

export const Container = styled.div`
  padding: 58px;
  width: 1238px;
`;

export const ContainerDescription = styled.div`
  width: 292px;
`;

export const ListGallery = styled.ul`
  margin-right: 40px;
  max-height: 650px;
  overflow: auto;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const ListGalleryItem = styled.li`
  margin-bottom: 40px;
`;

export const ProductDescription = styled.p`
  min-height: 50px;
  max-height: 200px;
  overflow: auto;
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

export const ContainerModalBigImage = styled.div`
  margin-right: 100px;
`;

export const ModalBigImage = styled.img`
  width: 610px;
  height: 510px;
  object-fit: contain;
`;
