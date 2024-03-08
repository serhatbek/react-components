import { useRef, useState } from 'react';
import './MultiSelect.scss';
import Icon from '../Icon/Icon';
import classNames from 'classnames';
import handleClickOutside from '../../utils/handleClickOutside';
import { FloatLabel } from '..';

const MultiSelect = ({ defaultValue, options, onChange }) => {
  const [selectedItems, setSelectedItems] = useState(defaultValue || []);
  const [showList, setShowList] = useState(false);
  const selectRef = useRef(null);

  const handleSelection = (optionValue) => {
    setSelectedItems((prevItems) => {
      const isSelected = prevItems.includes(optionValue);
      if (isSelected) {
        return prevItems.filter((item) => item.id !== optionValue.id);
      } else {
        return [...prevItems, optionValue];
      }
    });
    onChange(selectedItems);
  };

  const deleteSelected = (id) => {
    setSelectedItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const toggleSelectList = () => {
    setShowList(!showList);
  };

  const closeSelectList = () => {
    setShowList(false);
  };

  handleClickOutside(selectRef, closeSelectList);

  const labelValue = selectedItems.length > 0 ? selectedItems[0].label : '';

  return (
    <FloatLabel label='Choose a fruit' value={labelValue}>
      <div className='select' ref={selectRef}>
        <div className='select__item' onClick={toggleSelectList}>
          <div>
            {selectedItems?.map(
              (item) =>
                item.label !== '' && (
                  <span
                    key={item.id}
                    className='selected-tag'
                    onClick={() => deleteSelected(item.id)}
                  >
                    {item.label}
                    <Icon size={20} icon='x-close' />
                  </span>
                )
            )}
          </div>
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
              <li key={item.id} onClick={() => handleSelection(item)}>
                {item.label}
                {selectedItems?.find(
                  (itemInArray) => itemInArray.id === item.id
                ) && <Icon size={20} icon='check' />}
              </li>
            );
          })}
        </ul>
      </div>
    </FloatLabel>
  );
};

export default MultiSelect;

// const Select = ({ defaultValue, options, onChange }) => {
//   const [selectedItems, setSelectedItems] = useState(defaultValue || []);
//   const [showList, setShowList] = useState(false);
//   const selectRef = useRef(null);

//   const handleSelection = (optionValue) => {
//     setSelectedItems((prevItems) => {
//       const isSelected = prevItems.includes(optionValue);
//       if (isSelected) {
//         return prevItems.filter((item) => item !== optionValue);
//       } else {
//         return [...prevItems, optionValue];
//       }
//     });
//     onChange(selectedItems);
//   };

//   const deleteSelected = (itemToDelete) => {
//     setSelectedItems((prevItems) => {
//       return prevItems.filter((item) => item !== itemToDelete);
//     });
//   };

//   const toggleSelectList = () => {
//     setShowList(!showList);
//   };

//   const closeSelectList = () => {
//     setShowList(false);
//   };

//   handleClickOutside(selectRef, closeSelectList);

//   return (
//     <FloatLabel label='Choose a fruit' value={selectedItems[0]}>
//       <div className='select' ref={selectRef}>
//         <div className='select__item' onClick={toggleSelectList}>
//           <div>
//             {selectedItems?.map((item) => {
//               return (
//                 item !== '' && (
//                   <span
//                     key={item}
//                     className='selected-tag'
//                     onClick={() => deleteSelected(item)}
//                   >
//                     {item}
//                     <Icon size={20} icon='x-close' />
//                   </span>
//                 )
//               );
//             })}
//           </div>
//           <Icon size={32} icon={showList ? 'chevron-up' : 'chevron-down'} />
//         </div>
//         <ul
//           className={classNames(
//             'select__list',
//             `${showList ? 'select__list--visible' : ''}`
//           )}
//         >
//           {options?.map((item) => {
//             return (
//               <li key={item} onClick={() => handleSelection(item)}>
//                 {item}
//                 {selectedItems?.find((itemInArray) => itemInArray === item) && (
//                   <Icon size={20} icon='check' />
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </FloatLabel>
//   );
// };

// export default Select;

//------------------------------ Select

// const Select = ({ defaultValue, options, onChange }) => {
//   const [selectedItem, setSelectedItem] = useState(defaultValue || '');
//   const [showList, setShowList] = useState(false);
//   const selectRef = useRef(null);

//   const handleSelection = (optionValue) => {
//     setSelectedItem(optionValue);
//     onChange(selectedItem);
//   };

//   const toggleSelectList = () => {
//     setShowList(!showList);
//   };

//   const closeSelectList = () => {
//     setShowList(false);
//   };

//   handleClickOutside(selectRef, closeSelectList);

//   return (
//     <div className='select' ref={selectRef}>
//       <div className='select__item' onClick={toggleSelectList}>
//         {selectedItem}{' '}
//         <Icon size={32} icon={showList ? 'chevron-up' : 'chevron-down'} />
//       </div>
//       <ul
//         className={classNames(
//           'select__list',
//           `${showList ? 'select__list--visible' : ''}`
//         )}
//       >
//         {options?.map((item) => {
//           return (
//             <li key={id} onClick={() => handleSelection(item.value)}>
//               {item.label}
//               {item.label === selectedItem && <Icon size={20} icon='check' />}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Select;
