import React from "react";
import styles from "./Filtter.module.css";
import PropTypes from "prop-types";

const Filter = ({ filter, handleChange }) => {
  return (
    <label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Find contact by name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
