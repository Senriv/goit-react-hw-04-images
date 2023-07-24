import styled from '@emotion/styled';

export const SearchBarWrapper = styled.header`
  background-color: #f0f0f0;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-right: 10px;
`;

export const SearchBarButton = styled.button`
 background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: #0056b3;
  }
`;
