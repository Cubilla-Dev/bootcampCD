import {useState} from 'react'
import axios from 'axios'

const FormProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState()

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:3000/api/product/create', {
                name: name,
                description: description,
                price: price
            })
            const a = {
                name: name,
                description: description,
                price: price
            }
            console.log('Dato enviado correctamente')
            console.log(a)
            console.log(response.data)
        }
        catch(error){
            console.error('Error al enviar la data al server: ', error)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Title</label>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Description</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label>Price</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button type='submit'>Create</button>
        </form>
    )
}

export default FormProduct