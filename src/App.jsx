import { useState } from 'react';
import './assets/css/styles.scss';
import { fruitsData, cartoonData } from './assets/data/data';
import { MultiSelect, SingleSelect } from './components';

function App() {
  const [fruitSelectItems, setFruitSelectItems] = useState([
    { id: 4, label: 'Cherries' },
    { id: 5, label: 'Nuts' },
    { id: 6, label: 'Watermelon' },
  ]);

  const [cartoonSelectItem, setCartoonSelectItem] = useState('TMNT');

  const handleMultiSelectItems = (selectedItems) => {
    setFruitSelectItems((prevItems) => [...prevItems, selectedItems]);
    // console.log(fruitSelectItems);
  };

  const handleSingleSelectItems = (selectedItem) => {
    setCartoonSelectItem(selectedItem);
    // console.log(selectedItem);
  };

  return (
    <>
      <section className='section section-select'>
        <h2>Multiple Select</h2>
        <div className='container'>
          <MultiSelect
            defaultValue={fruitSelectItems}
            onChange={handleMultiSelectItems}
            options={fruitsData}
          />
        </div>
      </section>

      <section className='section section-select'>
        <h2>Single Select</h2>
        <div className='container'>
          <SingleSelect
            defaultValue={cartoonSelectItem}
            onChange={handleSingleSelectItems}
            options={cartoonData}
          />
        </div>
      </section>
    </>
  );
}

export default App;
