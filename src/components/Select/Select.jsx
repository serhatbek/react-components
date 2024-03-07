import { useId, useState } from 'react';
import './Select.scss';
import Icon from '../Icon/Icon';
import classNames from 'classnames';

const Select = ({ defaultValue, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || '');
  const [showList, setShowList] = useState(false);

  const handleSelectOption = (optionValue) => {
    setSelectedOption(optionValue);
    onChange(selectedOption);
  };

  const toggleSelectList = () => {
    setShowList(!showList);
  };

  return (
    <div className='select'>
      <div className='select__item' onClick={toggleSelectList}>
        {selectedOption}{' '}
        <Icon size={32} icon={showList ? 'chevron-up' : 'chevron-down'} />
      </div>
      <ul
        className={classNames(
          'select__list',
          `${showList ? 'select__list--visible' : ''}`
        )}
      >
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
