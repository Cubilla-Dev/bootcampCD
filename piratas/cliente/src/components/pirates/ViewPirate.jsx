import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './css/view.css'

const ViewPirate = () => {
    const { id } = useParams();
    const [pirateData, setPirateData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:3000/pirate/${id}`);
            setPirateData(response.data);
        } catch (error) {
            console.error('Error al obtener datos del pirata:', error);
        }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <div className='container-view'>
                <h1 className='title2'>Deep Sea Davy</h1>
                <div className="view-pirate-2">
                {pirateData && (
                    <>
                    <div className="column-1">
                        <img src={pirateData.imageUrl} alt="Pirate" />
                        <h3>{pirateData.pirateCatch}</h3>
                    </div>
                    <div className="column-2">
                        <h1>About</h1>
                        <ul>
                            <li>Position: {pirateData.crewPosition}</li>
                            <li>Treasures: {pirateData.treasureChests}</li>
                            <li>Peg Leg: {pirateData.accessories.pegLeg ? 'Yes' : 'No'}</li>
                            <li>Eye Patch: {pirateData.accessories.eyePatch ? 'Yes' : 'No'}</li>
                            <li>Hook Hand: {pirateData.accessories.hookHand ? 'Yes' : 'No'}</li>
                        </ul>
                    </div>
                    </>
                )}
                </div>
            </div>
        </>
    );
};

export default ViewPirate;
