import { useState } from 'react';
import './assets/css/styles.scss';
import { fruitsData } from './assets/data/fruits';
import { Select } from './components';

function App() {
  const [fruitSelectItems, setFruitSelectItems] = useState([
    'Cherries',
    'Nuts',
  ]);

  const handleSelectItems = (selectedItems) => {
    setFruitSelectItems((prevItems) => [...prevItems, selectedItems]);
  };

  console.log(fruitSelectItems);

  return (
    <>
      <section className='section section-select'>
        <h2>Select</h2>
        <div className='container'>
          <Select
            defaultValue={fruitSelectItems}
            onChange={handleSelectItems}
            options={fruitsData}
          />
        </div>
      </section>
    </>
  );
}

export default App;
