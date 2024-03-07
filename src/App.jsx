import './assets/css/styles.scss';
import { fruitsData } from './assets/data/fruits';
import { Select } from './components';

function App() {
  const handleChange = (option) => {
    console.log('selected item', option);
  };

  return (
    <>
      <div className='container'>
        <Select
          defaultValue='Choose A Fruit'
          onChange={handleChange}
          options={fruitsData}
        />
      </div>
    </>
  );
}

export default App;
