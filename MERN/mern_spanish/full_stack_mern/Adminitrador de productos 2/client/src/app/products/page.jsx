'use client'
import axios from "axios";
const { useState, useEffect } = require("react");
import Link from "next/link";


const ProductosPage = () => {
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

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <main>

            <h1>Productos disponibles</h1>
            <ul style={{ marginLeft: 24 }}>
                {
                    products.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <h3>
                                    <Link href={`/products/${item._id}`} >{item.title}</Link>
                                </h3>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    );
};

export default ProductosPage;
