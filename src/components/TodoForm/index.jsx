import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoFrom.propTypes = {
  onSubmit: PropTypes.func,
};
TodoFrom.defaultProps = {
  onSubmit: null,
}

function TodoFrom(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  const isChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSubmit) {
      const formValue = {
        title: value,
      }
      onSubmit(formValue)
      setValue('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={isChange
      } value={value}></input>
    </form>
  );
}

export default TodoFrom;