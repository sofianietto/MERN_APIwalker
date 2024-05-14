import { useState } from 'react'
import axios from 'axios';
import ShowData from './componentes/ShowData';



const App = () => {

  const [category, setCategory] = useState('people');
  const [id, setId] = useState("");
  const [dataState, setDataState] = useState({});
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);


  const handleChange = (e) => {
    setShowData(false);
    if (e.target.name === 'category') {
      setCategory(e.target.value);
    } else if (e.target.name === 'id') {
      setId(e.target.value);
    }
    console.log(category, id);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowData(true);
    // setCategory(e.target.category.value);
    // setId(e.target.id.value);
    console.log(category, id);
    try {
      setLoading(true);
      const res = await axios.get(`https://swapi.dev/api/${category}/${id}`);
      console.log(res);
      if (category === "people") {
        const homeworldRes = await axios.get(res.data.homeworld);
        setDataState({ ...res.data, homeworld: homeworldRes.data.name });
      } else {
        setDataState(res.data);
      }
    } catch (err) {
      setDataState(null);
      console.log(err.message);
    } finally {
      setLoading(false);
      console.log(dataState);
    }
  }

  return (
    <>
      <nav className='container mt-5'>
        <h1>Star Wars Api</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">Search for:
            <select onChange={handleChange} name="category" id="category" value={category}>
              <option value="people">People</option>
              <option value="planets">Planets</option>
              <option value="films">Films</option>
              <option value="species">Species</option>
              <option value="vehicles">Vehicles</option>
              <option value="starships">Starships</option>
            </select>
          </label>
          <div>
            <label htmlFor="id">ID:
              <input onChange={handleChange} type="text" name="id" id="id" value={id} />
            </label>
            <button type='submit'>Search</button>
          </div>
        </form>
      </nav>
      <div className='container mt-5'>
        {showData && <ShowData category={category} loading={loading} data={dataState} />}
      </div>
    </>
  )
};

export default App;