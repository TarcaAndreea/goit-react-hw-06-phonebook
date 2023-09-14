import React from 'react';
import '../Filter/filter-module.css';
export const Filter = ({ onChangeFilter }) => {
  return (
    <label className="filter-label">
      Find contacts by name
      <input
        className="filter-input"
        type="text"
        onChange={e => onChangeFilter(e.target.value)}
      />
    </label>
  );
};
