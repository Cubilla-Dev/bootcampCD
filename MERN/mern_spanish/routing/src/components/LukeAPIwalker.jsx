import { useState, useEffect } from 'react';
import axios from 'axios';
const LukeAPIwalker = () => {
    const [ data, setData ] = useState([]);

    useEffect(()=>{
        axios.get('')
            .then()
    }, [data])

    const handleChange = (e) =>{
        setData(e.target.value);
    }
    return (
        <div>
            <div>
                <p>Search for:</p>
                <select value={data} onChange={handleChange}>
                    {
                        data.map((items, index)=>{
                            <option key={index}>{items}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default LukeAPIwalker