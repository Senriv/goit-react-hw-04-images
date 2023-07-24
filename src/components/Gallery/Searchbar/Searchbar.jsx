import React from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import {
  SearchBarWrapper,
  Form,
  Input,
  SearchBarButton,
} from './Searchbar.styled';

class SearchBar extends React.Component {
  state = {
    value: '',
  };

  handleChangeInput = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchName.value.trim();
    if (searchQuery === '') {
      Notiflix.Notify.warning('Please enter something in the search');
    }
    this.props.onSubmit(searchQuery);
    this.setState({ value: '' });
  };

  render() {
    return (
      <SearchBarWrapper>
        <Form onSubmit={this.handleSubmitForm} >
          <SearchBarButton type="submit">
            <span>Search</span>
          </SearchBarButton>

          <Input
            name="searchName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
            value={this.state.value}
          />
        </Form>
      </SearchBarWrapper>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
