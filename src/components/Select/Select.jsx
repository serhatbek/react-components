import { useId, useState } from 'react';
import './Select.scss';

const Select = ({ defaultValue, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || '');

  const handleSelectOption = (optionValue) => {
    setSelectedOption(optionValue);
    onChange(selectedOption);
  };

  return (
    <div className='select'>
      <div className='select__item'>{selectedOption}</div>
      <ul className='select__List'>
        {options?.map((item) => {
          return (
            <li key={useId()} onClick={() => handleSelectOption(item.value)}>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
