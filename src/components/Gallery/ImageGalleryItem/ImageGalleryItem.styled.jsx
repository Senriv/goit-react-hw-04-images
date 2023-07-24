import styled from '@emotion/styled';

export const GalleryLi = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
