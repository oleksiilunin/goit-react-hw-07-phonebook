import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Label, LabelWrapper, Input } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const handleChangeFilterInput = e => {
    const { value } = e.currentTarget;
    if (value.charAt(0) === ' ') {
      // If the first symbol is a gap(space), we ignore it
      dispatch(setFilterValue(value.slice(1)));
    } else {
      dispatch(setFilterValue(value));
    }
  };

  return (
    <Label>
      <LabelWrapper>
        <FiSearch size="20" />
        Find contacts by name
      </LabelWrapper>

      <Input
        type="text"
        name="filter"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeFilterInput}
      />
    </Label>
  );
};

export { Filter };
