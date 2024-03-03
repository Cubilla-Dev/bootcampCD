'use client'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Fragment, useState, useEffect } = require("react")
const ProductosPage = () => {
    const router = useRouter();
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/productos");
            const result = await response.data;
            console.log(result);
            setProducts(result);

        } catch (error) {
            console.log(error);
        }


    };
    const deleteProduct = (id) => async () => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/productos/${id}`);
            const result = await response.data;
            console.log(result);
            // Actualización de estado, no es a base de datos
/*             setProducts((prevVal) => {
                const newList = prevVal.filter((item) => item._id !== id);
                console.log(newList);
                return([...newList])
            }); */
            getProducts();

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <main>

            <h1>Productos disponibles</h1>
            <ul style={{ marginLeft: 24 }}>
                {
                    products && products.map((item, idx) => {
                        return (
                            <li key={idx} style={{ marginBottom: 8 }}>
                                <div style={{ display: "flex", columnGap: 8 }}>
                                    <h3>
                                        <Link href={`/products/${item._id}`} >{item.title}</Link>
                                    </h3>
                                    <button><Link href={`/products/${item._id}/edit`} >Edit</Link></button>
                                    <button onClick={deleteProduct(item._id)} >Eliminar</button>

                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    );
};

export default ProductosPage;
