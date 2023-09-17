import React from 'react';
import '../Filter/filter-module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'Redux/FilterSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className="filter-label">
      Find contacts by name
      <input
        className="filter-input"
        type="text"
        onChange={handleChange}
      />
    </label>
  );
};