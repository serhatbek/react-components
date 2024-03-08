import { useId, useRef, useState } from 'react';
import './../Select.scss';
import Icon from '../../Icon/Icon';
import classNames from 'classnames';
import handleClickOutside from '../../../utils/handleClickOutside';
import { FloatLabel } from '../..';

const SingleSelect = ({ defaultValue, options, onChange }) => {
  const [selectedItem, setSelectedItem] = useState(defaultValue || '');
  const [showList, setShowList] = useState(false);
  const selectRef = useRef(null);

  const handleSelection = (optionValue) => {
    setSelectedItem(optionValue);
    onChange(selectedItem);
  };

  const toggleSelectList = () => {
    setShowList(!showList);
  };

  const closeSelectList = () => {
    setShowList(false);
  };

  handleClickOutside(selectRef, closeSelectList);

  return (
    <FloatLabel>
      <div className='select' ref={selectRef}>
        <div className='select__item' onClick={toggleSelectList}>
          {selectedItem}{' '}
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
              <li key={useId()} onClick={() => handleSelection(item.label)}>
                {item.label}
                {item.label === selectedItem && <Icon size={20} icon='check' />}
              </li>
            );
          })}
        </ul>
      </div>
    </FloatLabel>
  );
};

export default SingleSelect;
