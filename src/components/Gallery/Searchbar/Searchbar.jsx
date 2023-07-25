import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import {
  SearchBarWrapper,
  Form,
  Input,
  SearchBarButton,
} from './Searchbar.styled';

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChangeInput = e => {
    setValue(e.target.value.trim())
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (!value) {
      Notiflix.Notify.warning('Please enter something in the search');
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <SearchBarWrapper>
      <Form onSubmit={handleSubmitForm}>
        <SearchBarButton type="submit">
          <span>Search</span>
        </SearchBarButton>

        <Input
          name="searchName"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChangeInput}
          value={value}
        />
      </Form>
    </SearchBarWrapper>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
