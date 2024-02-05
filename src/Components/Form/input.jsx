import React from "react";
import styles from "./input.module.css";

const input = ({ label, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default input;
