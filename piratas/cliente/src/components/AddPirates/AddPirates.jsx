import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/add.css'

const AddPirates = () => {
  // Estado para manejar los datos del formulario
    const [pirateName, setPirateName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [treasureChests, setTreasureChests] = useState('1');
    const [pirateCatch, setPirateCatch] = useState('');
    const [crewPosition, setCrewPosition] = useState('captain');
    const [accessories, setAccessories] = useState({
        pegLeg: false,
        eyePatch: false,
        hookHand: false,
    });
    const [ error, setError ] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault()
        //para que cuando envie de nuevo el formulario para que se limpie 
        setError(null)
        //validar que los campos no esten vacios 
        // if (error) {
        //     alert('Todos los campos son obligatorios');
        //     return;
        // }
        try {
            await axios.post('http://127.0.0.1:3000/pirate/new', {
                pirateName,
                imageUrl: imageUrl,
                treasureChests,
                pirateCatch,
                crewPosition,
                accessories,
            });
            console.log('Datos enviados exitosamente');

            setPirateName('');
            setImageUrl('');
            setTreasureChests('1');
            setPirateCatch('');
            setCrewPosition('captain');
            setAccessories({
                pegLeg: false,
                eyePatch: false,
                hookHand: false,
            });
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            if (error.response && error.response.data && error.response.data.errors) {
                setError(error.response.data.errors.join(', '));
            } else {
                setError('Error interno del servidor');
            }
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='container-add'>
                <div className='title-add'>
                    <div className='title-h1'>
                        <h1>Add Pirate</h1>
                    </div>
                    <div className='button-container'>
                        <Link className='Link-add-pirate' to='/pirates'>Crew Board</Link>
                    </div>
                </div>
                <div className="add-pirates">
                <div className="column-one">
                <div className="input-group">
                    <label htmlFor="pirateName">Pirate Name:</label>
                    <input type="text" id="pirateName" value={pirateName} onChange={(e) => setPirateName(e.target.value)} />
                </div>

                <div className="input-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>

                <div className="input-group">
                    <label htmlFor="treasureChests">Treasure Chests:</label>
                    <select id="treasureChests" value={treasureChests} onChange={(e) => setTreasureChests(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="pirateCatch">Pirate Catch:</label>
                    <input type="text" id="pirateCatch" value={pirateCatch} onChange={(e) => setPirateCatch(e.target.value)} />
                </div>
            </div>


            <div className="column-two">
                <div className="input-group">
                    <label htmlFor="crewPosition">Crew Position:</label>
                    <select id="crewPosition" value={crewPosition} onChange={(e) => setCrewPosition(e.target.value)}>
                        <option value="captain">Captain</option>
                        <option value="firstMate">First Mate</option>
                        <option value="quartermaster">Quartermaster</option>
                        <option value="swabbie">Swabbie</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Accessories:</label>
                    <div className="checkbox-group">
                        <div>
                            <input type="checkbox" id="pegLeg" checked={accessories.pegLeg} onChange={() => setAccessories((prev) => ({ ...prev, pegLeg: !prev.pegLeg }))} />
                            <label htmlFor="pegLeg">Peg Leg</label>
                        </div>
                        <div>
                            <input type="checkbox" id="eyePatch" checked={accessories.eyePatch} onChange={() => setAccessories((prev) => ({ ...prev, eyePatch: !prev.eyePatch }))} />
                            <label htmlFor="eyePatch">Eye Patch</label>
                        </div>
                        <div>
                            <input type="checkbox" id="hookHand" checked={accessories.hookHand} onChange={() => setAccessories((prev) => ({ ...prev, hookHand: !prev.hookHand }))} />
                            <label htmlFor="hookHand">Hook Hand</label>
                        </div>
                    </div>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className='contai-button'>
                        <button type='submit'>Add Pirate</button>
                    </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddPirates;
