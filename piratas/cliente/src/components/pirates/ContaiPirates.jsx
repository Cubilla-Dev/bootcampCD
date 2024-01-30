import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/contai.css'

const ContaiPirates = () => {
    const [piratesData, setPiratesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/pirates'); 
                setPiratesData(response.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    const deletePirate = async (id) => {
        try{
            await axios.delete(`http://127.0.0.1:3000/delete/${id}`);
            //cuando se elimin uno se actualiza de neuvo la pagina
            const updatedPirates = piratesData.filter(pirate => pirate._id !== id);
            setPiratesData(updatedPirates);
        }catch(error){
            console.error('Error al eliminar a pirata: ', error)
        }
    }

    return (
        <div className='container'>
            <div className='title'>
                <div className='title-h1'>
                    <h1>Pirate Crew</h1>
                </div>
                <div className='button-container'>
                    <Link className='Link-add-pirate' to='/pirate/new'>Add Pirate</Link>
                </div>
            </div>
            <div className='view-pirate'>
                {piratesData.map((pirate) => (
                    <div key={pirate._id} className="pirate-container">
                        <div className="pirate-image">
                            <img src={pirate.imageUrl} alt={`Imagen de ${pirate.pirateName}`} />
                        </div>
                        <div className="pirate-details">
                            <h1>{pirate.pirateName}</h1>
                            <div className="buttons-container">
                                {/* //redirecciona a la pagina de piratas para ver mas en detalle*/}
                                <Link className='Link' to={`/pirate/${pirate._id}`}>View Pirate</Link>
                                <button onClick={() => deletePirate(pirate._id)}>Walk the Plank</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContaiPirates;
