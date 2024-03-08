import { useState } from 'react';
import './assets/css/styles.scss';
import { fruitsData } from './assets/data/fruits';
import { MultiSelect } from './components';

function App() {
  const [fruitSelectItems, setFruitSelectItems] = useState([
    { id: 4, label: 'Cherries' },
    { id: 5, label: 'Nuts' },
    { id: 6, label: 'Watermelon' },
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
          <MultiSelect
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
