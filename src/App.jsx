import './assets/css/styles.scss';
import { fruitsData } from './assets/data/fruits';
import { Select } from './components';

function App() {
  const handleChange = (selectedItem) => {
    console.log('selected item', selectedItem);
  };

  return (
    <>
      <section className='section section-select'>
        <h2>Select</h2>
        <div className='container'>
          <Select
            defaultValue={[{ id: 0, label: 'Cherries' }]}
            onChange={handleChange}
            options={fruitsData}
          />
        </div>
      </section>
    </>
  );
}

export default App;
