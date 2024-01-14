import { useState, useEffect } from 'react';import axios from 'axios';
import{ useParams }from 'react-router-dom'

const LukeAPIwalker = () => {
    const [ id, setId ] = useState('');
    const [ data, setData ] = useState({});    
    const [ dataPar, setDataPar ] = useState('people');
    const [error, setError] = useState(null);
    const {paramId } = useParams()

    const handleChange = (e) =>{
        setDataPar(e.target.value);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (paramId !== undefined) {
                    await axios.get(`https://swapi.dev/api/${dataPar}/${paramId}/`)
                    .then(response => {
                        setData(response.data);
                        console.log('Petición exitosa:', response.data);
                        setError(null)
                    });
                } else {
                    console.log('No se cumple la condición para hacer la petición.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error)
            }
        };
    
        fetchData();
    }, []);

    const search = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.get(`https://swapi.dev/api/${dataPar}/${id}/`);
            setData(response.data);
            console.log(response.data)
            setError(null)
        } catch (e) {
            console.error('Hubo error en la peticion ', e);
            setError(e)
        }
    }


    return (
        <div>
            <form onSubmit={search}>
                <div>
                    <p>Search for:</p>
                    <select value={dataPar} onChange={handleChange}>
                    <option value={'people'}>People</option>
                    <option value={'films'}>films</option>
                    <option value={'starships'}>starships</option>
                    <option value={'vehicles'}>vehicles</option>
                    <option value={'species'}>species</option>
                    <option value={'planets'}>Planets</option>
                    </select>
                    <label>id:</label>
                    <input value={id} onChange={(e) => setId(e.target.value)} />
                    <button type="submit">Search</button>
                </div>
            </form>
            {
                error && 
                <div>
                    <h3>Estos no son los droides que está buscando</h3>
                    <img src='../public/img/Obi-Wan_Kenobi.jpg'/>
                </div>
            }
            <h3>{data.name}</h3>
            <h3>{data.height}</h3>
            <h3>{data.mass}</h3>
            <h3>{data.hair_color}</h3>
            <p></p>
        </div>
    )
}

export default LukeAPIwalker