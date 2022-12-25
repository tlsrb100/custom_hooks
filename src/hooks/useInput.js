import { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(event.target.value);
    }
    if (willUpdate) setValue(event.target.value);
  };
  return { value, onChange };
};

export default useInput;
