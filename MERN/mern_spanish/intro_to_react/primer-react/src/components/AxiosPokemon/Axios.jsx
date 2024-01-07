import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [ data, setData ] = useState(null);

        
    const llamadaApi = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then((response )=> {
                setData(response.data.results)
            })
            .catch(()=>{
                console.log('tiro error en la peticion')
            })
    }
    return (
        <div>
            <button onClick={()=> llamadaApi()}>Fetch Pokemon</button>
            {
                data && (
                    <ul>
                    {
                        data.map((item, index)=>(
                            <li key={index}>{item.name}</li>
                    ))
                    }
                    </ul>)
                
            }
        </div>
    )
}

export default Axios