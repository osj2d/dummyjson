import React from "react";

const UseForm = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
  };
};

export default UseForm;
