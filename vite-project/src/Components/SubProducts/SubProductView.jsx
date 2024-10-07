import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const SubProductView = () => {
    const { productId } = useParams();
    const [subProducts, setSubProducts] = useState([]);

    useEffect(() => {
        const fetchSubProducts = async () => {
            try {
                const authToken = localStorage.getItem('authToken');
                const response = await axios.get(`http://localhost:3000/product/products/${productId}`, {
                    headers: { Authorization: `Bearer ${authToken}` }
                });
                console.log("setSubProduct : ", response.data.subProducts);

                setSubProducts(response.data.subProducts);
            } catch (error) {
                console.error('Error fetching sub-products:', error);
            }
        };

        fetchSubProducts();
    }, [productId]);

    return (
        <div>
            <h2>Sub-Products</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sub-Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {subProducts.map((subProduct, index) => (
                        <tr key={index}>

                            <td>{subProduct.subProduct.subProductName}</td>
                            <td>{subProduct.subProductQuantity}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default SubProductView;









