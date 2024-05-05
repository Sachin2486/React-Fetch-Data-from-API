import './App.css';
import { useEffect, useState } from 'react';

function App(){
  const [name,setName] = useState([]);
  
  useEffect(() => {
    names();
  }, []);

  const names = async () => {
    const response =  await fetch(' https://jsonplaceholder.typicode.com/albums/');

    setName(await response.json());
  }
  return(
    <div className='App'>
      <h1>Name is written over here below</h1>

      <ol className='list-group list-group-numbered'>

        {name.map((data) => {
          return (
            <li className='list-group-item' key={data.id}> {data.title}</li>
          )
        })
        }
      </ol>
    </div>

  );
  }
  
  export default App;