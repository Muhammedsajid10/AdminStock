// import React, { useEffect, useState } from 'react';
// import './SubProdfranchise.css';
// import axios from 'axios';

// const SubProdfranchise = () => {
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: ''
//     });
//     const [stockData, setStockData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [showModal, setShowModal] = useState(false);
//     const [response, setResponse] = useState(null);

//     const token = localStorage.getItem('authToken');

//     // Fetch stock data on mount
//     useEffect(() => {
//         const fetchStockData = async () => {
//             try {
//                 const res = await axios.get('http://localhost:3000/subProdStock/stock', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 console.log("stock : ", res.data);

//                 setStockData(res.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching stock data:', err);
//                 setLoading(false);
//             }
//         };

//         fetchStockData();
//     }, [token]);

//     // Handle form input change
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/subProdStock/stock', formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             setResponse(res.data);
//             alert('Stock entry created successfully!');
//             setFormData({ subProduct: '', franchise: '', quantity: '' }); // Reset form
//             setShowModal(false); // Close modal
//             setStockData([...stockData, res.data]); // Update stock list
//         } catch (err) {
//             console.error('Error creating stock entry:', err);
//             alert('Failed to create stock entry');
//         }
//     };

//     if (loading) {
//         return <p>Loading stock entries...</p>;
//     }

//     return (
//         <div>
//             <h1>Stock Management</h1>
//             <button onClick={() => setShowModal(true)}>Add Stock Entry</button>

//             {/* Modal for adding stock */}
//             {showModal && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={() => setShowModal(false)}>
//                             &times;
//                         </span>
//                         <h2>Create Stock Entry</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div>
//                                 <label>SubProduct ID:</label>
//                                 <input
//                                     operationtype="text"
//                                     name="subProduct"
//                                     value={formData.subProduct}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label>franchise (Franchise) ID:</label>
//                                 <input
//                                     operationtype="text"
//                                     name="franchise"
//                                     value={formData.franchise}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label>Quantity:</label>
//                                 <input
//                                     operationtype="number"
//                                     name="quantity"
//                                     value={formData.quantity}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <button operationtype="submit">Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* Stock data table */}
//             <h2>Stock List</h2>
//             <table border="1" cellPadding="5" cellSpacing="0">
//                 <thead>
//                     <tr>
//                         <th>SubProduct</th>
//                         <th>Franchise</th>
//                         <th>Quantity</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {stockData.map((stock) => (
//                         <tr key={stock._id}>
//                             <td>{stock.subProduct.subProductName}</td>
//                             <td>{stock.franchise.Name}</td>
//                             <td>{stock.quantity}</td>
//                             <td>{new Date(stock.date).toLocaleString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default SubProdfranchise;
































// import React, { useEffect, useState } from 'react';
// import './SubProdfranchise.css';
// import axios from 'axios';
// import { Modal, Button, Table } from 'react-bootstrap';

// const SubProdfranchise = () => {
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: ''
//     });
//     const [stockData, setStockData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [showModal, setShowModal] = useState(false);
//     const [response, setResponse] = useState(null);

//     const token = localStorage.getItem('authToken');

//     // Fetch stock data on mount
//     useEffect(() => {
//         const fetchStockData = async () => {
//             try {
//                 const res = await axios.get('http://localhost:3000/subProdStock/stock', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 console.log("stock : ", res.data);
//                 setStockData(res.data);
//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching stock data:', err);
//                 setLoading(false);
//             }
//         };

//         fetchStockData();
//     }, [token]);

//     // Handle form input change
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/subProdStock/stock', formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             setResponse(res.data);
//             alert('Stock entry created successfully!');
//             setFormData({ subProduct: '', franchise: '', quantity: '' }); // Reset form
//             setShowModal(false); // Close modal
//             setStockData([...stockData, res.data]); // Update stock list
//         } catch (err) {
//             console.error('Error creating stock entry:', err);
//             alert('Failed to create stock entry');
//         }
//     };

//     if (loading) {
//         return <p>Loading stock entries...</p>;
//     }

//     return (
//         <div className="container">
//             <h1 className="my-4">Stock Management</h1>

//             {/* Stock In and Stock Out buttons */}
//             <div className="mb-4">
//                 <Button variant="primary" onClick={() => setShowModal(true)}>Stock In</Button>
//                 <Button variant="secondary" className="ml-2">Stock Out</Button>
//             </div>

//             {/* Modal for adding stock */}
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Create Stock Entry</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group">
//                             <label>SubProduct ID:</label>
//                             <input
//                                 operationtype="text"
//                                 className="form-control"
//                                 name="subProduct"
//                                 value={formData.subProduct}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>franchise (Franchise) ID:</label>
//                             <input
//                                 operationtype="text"
//                                 className="form-control"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Quantity:</label>
//                             <input
//                                 operationtype="number"
//                                 className="form-control"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <Button variant="primary" operationtype="submit">
//                             Submit
//                         </Button>
//                     </form>
//                 </Modal.Body>
//             </Modal>

//             {/* Stock data table */}
//             <h2 className="my-4">Stock List</h2>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>SubProduct</th>
//                         <th>Franchise</th>
//                         <th>Quantity</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {stockData.map((stock) => (
//                         <tr key={stock._id}>
//                             <td>{stock.subProduct.subProductName}</td>
//                             <td>{stock.franchise.Name}</td>
//                             <td>{stock.quantity}</td>
//                             <td>{new Date(stock.date).toLocaleString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default SubProdfranchise;





















// import React, { useEffect, useState } from 'react';
// import './SubProdfranchise.css';
// import axios from 'axios';
// import { Modal, Button, Table, Form } from 'react-bootstrap';

// const SubProdfranchise = () => {
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: ''
//     });
//     const [stockData, setStockData] = useState([]);
//     const [subProducts, setSubProducts] = useState([]);
//     const [franchises, setFranchises] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [showModal, setShowModal] = useState(false);
//     const [response, setResponse] = useState(null);

//     const token = localStorage.getItem('authToken');

//     // Fetch stock data, subProducts, and franchises on mount
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const stockRes = await axios.get('http://localhost:3000/subProdStock/stock', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setStockData(stockRes.data);

//                 const subProductRes = await axios.get('http://localhost:3000/subProduct/subproducts', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setSubProducts(subProductRes.data);

//                 const franchiseRes = await axios.get('http://localhost:3000/fran/franchise', {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setFranchises(franchiseRes.data);

//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching data:', err);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [token]);

//     // Handle form input change
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/subProdStock/stock', formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             setResponse(res.data);
//             alert('Stock entry created successfully!');
//             setFormData({ subProduct: '', franchise: '', quantity: '' }); // Reset form
//             setShowModal(false); // Close modal
//             setStockData([...stockData, res.data]); // Update stock list
//         } catch (err) {
//             console.error('Error creating stock entry:', err);
//             alert('Failed to create stock entry');
//         }
//     };

//     if (loading) {
//         return <p>Loading stock entries...</p>;
//     }

//     return (
//         <div className="container">
//             <h1 className="my-4">Stock Management</h1>

//             {/* Stock In and Stock Out buttons */}
//             <div className="mb-4">
//                 <Button variant="primary" onClick={() => setShowModal(true)}>Stock In</Button>
//                 <Button variant="secondary" className="ml-2">Stock Out</Button>
//             </div>

//             {/* Modal for adding stock */}
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Create Stock Entry</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form onSubmit={handleSubmit}>
//                         <Form.Group>
//                             <Form.Label>SubProduct</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="subProduct"
//                                 value={formData.subProduct}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select SubProduct</option>
//                                 {subProducts.map((subProduct) => (
//                                     <option key={subProduct._id} value={subProduct._id}>
//                                         {subProduct.subProductName}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label>Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.Name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 operationtype="number"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </Form.Group>

//                         <Button variant="primary" operationtype="submit">
//                             Submit
//                         </Button>
//                     </form>
//                 </Modal.Body>
//             </Modal>

//             {/* Stock data table */}
//             <h2 className="my-4">Stock List</h2>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>SubProduct</th>
//                         <th>Franchise</th>
//                         <th>Quantity</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {stockData.map((stock) => (
//                         <tr key={stock._id}>
//                             <td>{stock.subProduct.subProductName}</td>
//                             <td>{stock.franchise.Name}</td>
//                             <td>{stock.quantity}</td>
//                             <td>{new Date(stock.date).toLocaleString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default SubProdfranchise;


// the above goooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooood


























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Modal, Form, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SubProdfranchise() {
//     const [stockData, setStockData] = useState([]);
//     const [subProducts, setSubProducts] = useState([]);
//     const [franchises, setFranchises] = useState([]);
//     const [showInModal, setShowInModal] = useState(false);
//     const [showOutModal, setShowOutModal] = useState(false);
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: '',
//         operationtype: ''
//     });



//     // const token = localStorage.getItem('authToken'); 

//     const getAuthToken = () => {
//         return localStorage.getItem('authToken');
//     };

//     // Fetch all stock data (both franchise and StockOut)
//     const fetchStockData = async () => {
//         try {
//             const token = getAuthToken()

//             const res = await axios.get('http://localhost:3000/subProdStock/stock', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setStockData(res.data);
//         } catch (err) {
//             console.error('Error fetching stock data:', err);
//         }
//     };

//     // Fetch SubProduct data for dropdown
//     const fetchSubProducts = async () => {
//         try {
//             const token = getAuthToken()
//             console.log("Token: ", token);
//             const res = await axios.get('http://localhost:3000/subProduct/subproducts', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             console.log("subPro : ", res.data);

//             setSubProducts(res.data);
//         } catch (err) {
//             console.error('Error fetching sub-products:', err);
//         }
//     };

//     // Fetch Franchise data for dropdown
//     const fetchFranchises = async () => {
//         try {
//             const token = getAuthToken()
//             const res = await axios.get('http://localhost:3000/fran/franchise', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             console.log("fran : ", res.data)
//             setFranchises(res.data);
//         } catch (err) {
//             console.error('Error fetching franchises:', err);
//         }
//     };

//     useEffect(() => {
//         fetchStockData();
//         fetchSubProducts(); // Fetch sub-products on load
//         fetchFranchises();  // Fetch franchises on load
//     }, []);

//     // Handle form submission for franchise
//     const handlefranchiseSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = getAuthToken()
//             const res = await axios.post('http://localhost:3000/subProdStock/stock', formData, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             alert('Stock in entry created successfully!');
//             setFormData({ subProduct: '', franchise: '', quantity: '' });
//             setShowInModal(false);
//             setStockData([...stockData, res.data]);  // Update state with new entry
//         } catch (err) {
//             console.error('Error creating stock in entry:', err);
//             alert('Failed to create stock in entry');
//         }
//     };

//     // Handle form submission for StockOut
//     const handleStockOutSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = getAuthToken()
//             const res = await axios.post('http://localhost:3000/subProdStock/stock-out', formData, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             alert('Stock out entry created successfully!');
//             setFormData({ subProduct: '', franchise: '', quantity: '' });
//             setShowOutModal(false);
//             setStockData([...stockData, res.data]);  // Update state with new entry
//         } catch (err) {
//             console.error('Error creating stock out entry:', err);
//             alert('Failed to create stock out entry');
//         }
//     };

//     // Handle input changes in the form
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     return (
//         <div className="container">
//             <h1 className="my-4">Stock Management</h1>

//             {/* Buttons for franchise and StockOut */}
//             <Button variant="primary" onClick={() => setShowInModal(true)}>Add Stock In</Button>
//             <Button variant="secondary" className="ml-2" onClick={() => setShowOutModal(true)}>Add Stock Out</Button>

//             {/* Stock Data Table */}
//             <Table striped bordered hover className="my-4">
//                 <thead>
//                     <tr>
//                         <th>Sub Product</th>
//                         <th>Stock In Franchise</th>
//                         <th>Quantity</th>
//                         <th>operationtype</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {stockData.map((stock) => (
//                         <tr key={stock._id}>
//                             <td>{stock.subProduct.subProductName}</td>
//                             <td>{stock.franchise.Name}</td>
//                             <td>{stock.quantity}</td>
//                             <td>{stock.operationtype}</td>
//                             <td>{new Date(stock.date).toLocaleDateString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             {/* Stock In Modal */}
//             <Modal show={showInModal} onHide={() => setShowInModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add Stock In</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handlefranchiseSubmit}>
//                         <Form.Group>
//                             <Form.Label>operationtype</Form.Label>
//                             <div>
//                                 <Form.Check
//                                     operationtype="radio"
//                                     label="Stock In"
//                                     name="operationtype"
//                                     value="franchise" // or however you want to label it
//                                     checked={formData.operationtype === 'franchise'}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                                 <Form.Check
//                                     operationtype="radio"
//                                     label="Stock Out"
//                                     name="operationtype"
//                                     value="stockOut" // or however you want to label it
//                                     checked={formData.operationtype === 'stockOut'}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                             </div>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label>Sub Product</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="subProduct"
//                                 value={formData.subProduct}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Sub Product</option>
//                                 {subProducts.map((subProduct) => (
//                                     <option key={subProduct._id} value={subProduct._id}>
//                                         {subProduct.subProductName}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Stock IN Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.Name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 operationtype="number"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter Quantity"
//                                 required
//                             />
//                         </Form.Group>
//                         <Button variant="primary" operationtype="submit">Submit</Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>

//             {/* Stock Out Modal */}
//             <Modal show={showOutModal} onHide={() => setShowOutModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add Stock Out</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleStockOutSubmit}>


//                         <Form.Group>
//                             <Form.Label>operationtype</Form.Label>
//                             <div>
//                                 <Form.Check
//                                     operationtype="radio"
//                                     label="Stock In"
//                                     name="operationtype"
//                                     value="franchise" // or however you want to label it
//                                     checked={formData.operationtype === 'franchise'}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                                 <Form.Check
//                                     operationtype="radio"
//                                     label="Stock Out"
//                                     name="operationtype"
//                                     value="stockOut" // or however you want to label it
//                                     checked={formData.operationtype === 'stockOut'}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                             </div>
//                         </Form.Group>



//                         <Form.Group>
//                             <Form.Label>Sub Product</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="subProduct"
//                                 value={formData.subProduct}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Sub Product</option>
//                                 {subProducts.map((subProduct) => (
//                                     <option key={subProduct._id} value={subProduct._id}>
//                                         {subProduct.subProductName}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Stock OUT Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 operationtype="number"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter Quantity"
//                                 required
//                             />
//                         </Form.Group>
//                         <Button variant="primary" operationtype="submit">Submit</Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default SubProdfranchise


































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Modal, Form, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SubProdfranchise() {
//     const [subProducts, setSubProducts] = useState([]);  // Sub-products from the database
//     const [franchises, setFranchises] = useState([]);  // Franchise data for stock in/out
//     const [showModal, setShowModal] = useState(false);  // Modal state
//     const [formData, setFormData] = useState({         // Form data for stock in/out
//         subProduct: '',
//         franchise: '',
//         quantity: '',
//         operationtype: ''
//     });

//     const [selectedSubProduct, setSelectedSubProduct] = useState(null); // Selected sub-product for stock in/out

//     const getAuthToken = () => {
//         return localStorage.getItem('authToken');
//     };

//     // Fetch sub-products
//     const fetchSubProducts = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/subProduct/subproducts', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setSubProducts(res.data);
//             console.log('subProducttt : ',res.data);

//         } catch (err) {
//             console.error('Error fetching sub-products:', err);
//         }
//     };

//     // Fetch franchise data
//     const fetchFranchises = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/fran/franchise', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setFranchises(res.data);
//         } catch (err) {
//             console.error('Error fetching franchises:', err);
//         }
//     };

//     useEffect(() => {
//         fetchSubProducts();  // Fetch sub-products on load
//         fetchFranchises();   // Fetch franchises on load
//     }, []);

//     // Handle stock in/out form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = getAuthToken();
//             const url = formData.operationtype === 'franchise' 
//                 ? 'http://localhost:3000/subProdStock/stock-in' 
//                 : 'http://localhost:3000/subProdStock/stock-out';

//             const res = await axios.post(url, { ...formData, subProduct: selectedSubProduct._id }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });

//             alert(`${formData.operationtype === 'franchise' ? 'Stock In' : 'Stock Out'} entry created successfully!`);
//             setFormData({ subProduct: '', franchise: '', quantity: '', operationtype: '' });
//             setShowModal(false);
//         } catch (err) {
//             console.error(`Error creating ${formData.operationtype} entry:`, err);
//             alert(`Failed to create ${formData.operationtype} entry`);
//         }
//     };

//     // Open modal with selected sub-product
//     const openStockModal = (subProduct, operationtype) => {
//         setSelectedSubProduct(subProduct);
//         setFormData({ ...formData, operationtype });  // Set stock operationtype
//         setShowModal(true);
//     };

//     // Handle input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     return (
//         <div className="container">
//             <h1 className="my-4">Sub Products Management</h1>

//             {/* Sub-products table */}
//             <Table striped bordered hover className="my-4">
//                 <thead>
//                     <tr>
//                         <th>Sub Product Name</th>
//                         <th>prise</th>
//                         <th>quantity</th>
//                         <th>Stock In</th>
//                         <th>Stock Out</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {subProducts.map((subProduct) => (
//                         <tr key={subProduct._id}>
//                             <td>{subProduct.subProductName}</td>
//                             <td>{subProduct.subProductPrice}</td>
//                             <td>{subProduct.subProductMinQuantity}</td>
//                             <td>
//                                 <Button 
//                                     variant="success" 
//                                     onClick={() => openStockModal(subProduct, 'franchise')}
//                                 >
//                                     Stock In
//                                 </Button>
//                             </td>
//                             <td>
//                                 <Button 
//                                     variant="danger" 
//                                     onClick={() => openStockModal(subProduct, 'stockOut')}
//                                 >
//                                     Stock Out
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             {/* Stock In/Out Modal */}
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{formData.operationtype === 'franchise' ? 'Add Stock In' : 'Add Stock Out'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group>
//                             <Form.Label>Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.Name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 operationtype="number"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter Quantity"
//                                 required
//                             />
//                         </Form.Group>

//                         <Button variant="primary" operationtype="submit">
//                             {formData.operationtype === 'franchise' ? 'Add Stock In' : 'Add Stock Out'}
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default SubProdfranchise;


















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Modal, Form, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SubProdstockIN() {
//     const [subProducts, setSubProducts] = useState([]);
//     const [franchises, setFranchises] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: '',
//         operationtype: ''
//     });
//     const [selectedSubProduct, setSelectedSubProduct] = useState(null);

//     const getAuthToken = () => {
//         return localStorage.getItem('authToken');
//     };

//     // Fetch sub-products
//     const fetchSubProducts = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/subProduct/subproducts', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setSubProducts(res.data);
//         } catch (err) {
//             console.error('Error fetching sub-products:', err);
//         }
//     };

//     // Fetch franchise data
//     const fetchFranchises = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/fran/franchise', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setFranchises(res.data);
//         } catch (err) {
//             console.error('Error fetching franchises:', err);
//         }
//     };

//     useEffect(() => {
//         fetchSubProducts();
//         fetchFranchises();
//     }, []);

//     // Handle stock in/out form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = getAuthToken();
//             const res = await axios.post('http://localhost:3000/subProdStock/stock-in-out', {
//                 ...formData,
//                 subProduct: selectedSubProduct._id
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });

//             alert(`${formData.operationtype === 'franchise' ? 'Stock In' : 'Stock Out'} operation successfully created!`);
//             setFormData({ subProduct: '', franchise: '', quantity: '', operationtype: '' });
//             setShowModal(false);
//             fetchSubProducts();  // Update the sub-products list after stock operation
//         } catch (err) {
//             console.error('Error creating stock operation:', err);
//             alert('Failed to create stock operation');
//         }
//     };

//     const openStockModal = (subProduct, operationtype) => {
//         setSelectedSubProduct(subProduct);
//         setFormData({ ...formData, operationtype });
//         setShowModal(true);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     return (
//         <div className="container">
//             <h1 className="my-4">Sub Products Management</h1>

//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Sub Product Name</th>
//                         <th>Price</th>
//                         <th>Available Quantity</th>
//                         <th>Stock In</th>
//                         <th>Stock Out</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {subProducts.map((subProduct) => (
//                         <tr key={subProduct._id}>
//                             <td>{subProduct.subProductName}</td>
//                             <td>{subProduct.subProductPrice}</td>
//                             <td>{subProduct.subProductMinQuantity}</td>
//                             <td>
//                                 <Button variant="success" onClick={() => openStockModal(subProduct, 'franchise')}>
//                                     Stock In
//                                 </Button>
//                             </td>
//                             <td>
//                                 <Button variant="danger" onClick={() => openStockModal(subProduct, 'stockOut')}>
//                                     Stock Out
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{formData.operationtype === 'franchise' ? 'Stock In' : 'Stock Out'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group>
//                             <Form.Label>Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.Name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 type="number"  // Corrected this line
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter Quantity"
//                                 required
//                             />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">  {/* Corrected this line */}
//                             {formData.operationtype === 'franchise' ? 'Add Stock In' : 'Add Stock Out'}
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default SubProdstockIN;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Modal, Form, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SubProdstockIN() {
//     const [subProducts, setSubProducts] = useState([]);
//     const [franchises, setFranchises] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: '',
//         operationtype: ''
//     });
//     const [selectedSubProduct, setSelectedSubProduct] = useState(null);

//     const getAuthToken = () => {
//         return localStorage.getItem('authToken');
//     };

//     // Fetch sub-products
//     const fetchSubProducts = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/subProduct/subproducts', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setSubProducts(res.data);
//         } catch (err) {
//             console.error('Error fetching sub-products:', err);
//         }
//     };

//     // Fetch franchise data
//     const fetchFranchises = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/fran/franchise', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setFranchises(res.data);
//         } catch (err) {
//             console.error('Error fetching franchises:', err);
//         }
//     };

//     useEffect(() => {
//         fetchSubProducts();
//         fetchFranchises();
//     }, []);

//     // Handle stock in/out form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = getAuthToken();
//             const res = await axios.post('http://localhost:3000/subProdStock/stock-in-out', {
//                 ...formData,
//                 subProduct: selectedSubProduct._id
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });

//             alert(`${formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'} operation successfully created!`);
//             setFormData({ subProduct: '', franchise: '', quantity: '', operationtype: '' });
//             setShowModal(false);
//             fetchSubProducts();  // Update the sub-products list after stock operation
//         } catch (err) {
//             console.error('Error creating stock operation:', err);
//             alert('Failed to create stock operation');
//         }
//     };

//     const openStockModal = (subProduct, operationtype) => {
//         setSelectedSubProduct(subProduct);
//         setFormData({ ...formData, operationtype });
//         setShowModal(true);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     return (
//         <div className="container">
//             <h1 className="my-4">Sub Products Management</h1>

//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Sub Product Name</th>
//                         <th>Price</th>
//                         <th>Available Quantity</th>
//                         <th>Stock In</th>
//                         <th>Stock Out</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {subProducts.map((subProduct) => (
//                         <tr key={subProduct._id}>
//                             <td>{subProduct.subProductName}</td>
//                             <td>{subProduct.subProductPrice}</td>
//                             <td>{subProduct.subProductMinQuantity}</td>
//                             <td>
//                                 <Button variant="success" onClick={() => openStockModal(subProduct, 'stockIn')}>
//                                     Stock In
//                                 </Button>
//                             </td>
//                             <td>
//                                 <Button variant="danger" onClick={() => openStockModal(subProduct, 'stockOut')}>
//                                     Stock Out
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group>
//                             <Form.Label>Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.Name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter Quantity"
//                                 required
//                             />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             {formData.operationtype === 'stockIn' ? 'Add Stock In' : 'Add Stock Out'}
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default SubProdstockIN;


///////////////////////////////////////////////////////////////////////////////////////////////////////////










///////smmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Modal, Form, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SubProdstockIN() {
//     const [subProducts, setSubProducts] = useState([]);
//     const [franchises, setFranchises] = useState([]);
//     const [stockOperations, setStockOperations] = useState([]); // Store filtered stock operations
//     const [showModal, setShowModal] = useState(false);
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: '',
//         operationtype: ''
//     });
//     const [filterData, setFilterData] = useState({
//         franchise: '',
//         subProductSearch: ''
//     }); // Store filter form data
//     const [selectedSubProduct, setSelectedSubProduct] = useState(null);

//     const getAuthToken = () => {
//         return localStorage.getItem('authToken');
//     };

//     // Fetch sub-products
//     const fetchSubProducts = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/subProduct/subproducts', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setSubProducts(res.data);
//         } catch (err) {
//             console.error('Error fetching sub-products:', err);
//         }
//     };

//     // Fetch franchise data
//     const fetchFranchises = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/fran/franchise', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setFranchises(res.data);
//         } catch (err) {
//             console.error('Error fetching franchises:', err);
//         }
//     };

//     // Fetch filtered stock operations
//     const fetchFilteredStockOperations = async () => {
//         try {
//             const token = getAuthToken();
//             const { franchise, subProductSearch } = filterData;
//             const res = await axios.get('http://localhost:3000/subProdStock/filter-stock', {
//                 params: { franchise, subProductSearch },
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setStockOperations(res.data); // Set the filtered stock operations
//         } catch (err) {
//             console.error('Error fetching filtered stock operations:', err);
//             alert('Failed to fetch filtered stock operations');
//         }
//     };

//     useEffect(() => {
//         fetchSubProducts();
//         fetchFranchises();
//     }, []);

//     // Handle stock in/out form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = getAuthToken();
//             const res = await axios.post('http://localhost:3000/subProdStock/stock-in-out', {
//                 ...formData,
//                 subProduct: selectedSubProduct._id
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });

//             alert(`${formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'} operation successfully created!`);
//             setFormData({ subProduct: '', franchise: '', quantity: '', operationtype: '' });
//             setShowModal(false);
//             fetchSubProducts();  // Update the sub-products list after stock operation
//         } catch (err) {
//             console.error('Error creating stock operation:', err);
//             alert('Failed to create stock operation');
//         }
//     };

//     // Handle filter input change
//     const handleFilterInputChange = (e) => {
//         const { name, value } = e.target;
//         setFilterData({ ...filterData, [name]: value });
//     };

//     // Handle stock modal opening
//     const openStockModal = (subProduct, operationtype) => {
//         setSelectedSubProduct(subProduct);
//         setFormData({ ...formData, operationtype });
//         setShowModal(true);
//     };

//     // Handle form input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     return (
//         <div className="container">
//             <h1 className="my-4">Sub Products Management</h1>

//             {/* Filter Form */}
//             <Form className="mb-4" onSubmit={(e) => { e.preventDefault(); fetchFilteredStockOperations(); }}>
//                 <Form.Group>
//                     <Form.Label>Franchise</Form.Label>
//                     <Form.Control
//                         as="select"
//                         name="franchise"
//                         value={filterData.franchise}
//                         onChange={handleFilterInputChange}
//                     >
//                         <option value="">Select Franchise</option>
//                         {franchises.map((franchise) => (
//                             <option key={franchise._id} value={franchise._id}>
//                                 {franchise.Name}
//                             </option>
//                         ))}
//                     </Form.Control>
//                 </Form.Group>

//                 <Form.Group>
//                     <Form.Label>Sub Product Search</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="subProductSearch"
//                         value={filterData.subProductSearch}
//                         onChange={handleFilterInputChange}
//                         placeholder="Search Sub Product"
//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Search
//                 </Button>
//             </Form>

//             {/* Display Filtered Stock Operations */}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Sub Product Name</th>
//                         <th>Franchise</th>
//                         <th>Quantity</th>
//                         <th>Operation Type</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {stockOperations.map((operation) => (
//                         <tr key={operation._id}>
//                             <td>{operation.subProduct?.subProductName}</td>
//                             <td>{operation.franchise?.Name}</td>
//                             <td>{operation.quantity}</td>
//                             <td>{operation.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'}</td>
//                             <td>{new Date(operation.date).toLocaleDateString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             {/* Existing Table for Sub Products */}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Sub Product Name</th>
//                         <th>Price</th>
//                         <th>Available Quantity</th>
//                         <th>Stock In</th>
//                         <th>Stock Out</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {subProducts.map((subProduct) => (
//                         <tr key={subProduct._id}>
//                             <td>{subProduct.subProductName}</td>
//                             <td>{subProduct.subProductPrice}</td>
//                             <td>{subProduct.subProductMinQuantity}</td>
//                             <td>
//                                 <Button variant="success" onClick={() => openStockModal(subProduct, 'stockIn')}>
//                                     Stock In
//                                 </Button>
//                             </td>
//                             <td>
//                                 <Button variant="danger" onClick={() => openStockModal(subProduct, 'stockOut')}>
//                                     Stock Out
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             {/* Stock Operation Modal */}
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group>
//                             <Form.Label>Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.Name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter Quantity"
//                                 required
//                             />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             {formData.operationtype === 'stockIn' ? 'Add Stock In' : 'Add Stock Out'}
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default SubProdstockIN;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Modal, Form, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SubProdstockIN() {
//     const [subProducts, setSubProducts] = useState([]);
//     const [franchises, setFranchises] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: '',
//         operationtype: ''
//     });
//     const [selectedSubProduct, setSelectedSubProduct] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedFranchise, setSelectedFranchise] = useState('');

//     const getAuthToken = () => {
//         return localStorage.getItem('authToken');
//     };

//     // Fetch sub-products
//     const fetchSubProducts = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/subProdStock/filter-stock', {
//                 headers: { Authorization: `Bearer ${token}` },
//                 params: {
//                     franchise: selectedFranchise,
//                     subProductSearch: searchTerm
//                 }
//             });
//             setSubProducts(res.data);
//         } catch (err) {
//             console.error('Error fetching sub-products:', err);
//         }
//     };

//     // Fetch franchise data
//     const fetchFranchises = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/fran/franchise', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setFranchises(res.data);
//         } catch (err) {
//             console.error('Error fetching franchises:', err);
//         }
//     };

//     // Fetch sub-products when filters are applied
//     useEffect(() => {
//         fetchFranchises();
//         fetchSubProducts();
//     }, [selectedFranchise, searchTerm]);

//     // Handle stock in/out form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = getAuthToken();
//             const res = await axios.post('http://localhost:3000/subProdStock/stock-in-out', {
//                 ...formData,
//                 subProduct: selectedSubProduct._id
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });

//             alert(`${formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'} operation successfully created!`);
//             setFormData({ subProduct: '', franchise: '', quantity: '', operationtype: '' });
//             setShowModal(false);
//             fetchSubProducts();  // Update the sub-products list after stock operation
//         } catch (err) {
//             console.error('Error creating stock operation:', err);
//             alert('Failed to create stock operation');
//         }
//     };

//     const openStockModal = (subProduct, operationtype) => {
//         setSelectedSubProduct(subProduct);
//         setFormData({ ...formData, operationtype });
//         setShowModal(true);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     return (
//         <div className="container">
//             <h1 className="my-4">Sub Products Management</h1>

//             {/* Filter and Search section */}
//             <div className="d-flex mb-4">
//                 <Form.Control
//                     as="select"
//                     value={selectedFranchise}
//                     onChange={(e) => setSelectedFranchise(e.target.value)}
//                     className="mr-2"
//                 >
//                     <option value="">All Franchises</option>
//                     {franchises.map((franchise) => (
//                         <option key={franchise._id} value={franchise._id}>
//                             {franchise.Name}
//                         </option>
//                     ))}
//                 </Form.Control>

//                 <Form.Control
//                     type="text"
//                     placeholder="Search Sub Product"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="mr-2"
//                 />
//             </div>

//             {/* Table for displaying sub-products */}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Sub Product Name</th>
//                         <th>Price</th>
//                         <th>Total Quantity</th>
//                         <th>Stock In</th>
//                         <th>Stock Out</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {subProducts.length > 0 ? (
//                         subProducts.map((item) => (
//                             <tr key={item._id}>
//                                 <td>{item.subProductDetails[0]?.subProductName}</td>
//                                 <td>{item.subProductDetails[0]?.subProductPrice}</td>
//                                 <td>{item.totalQuantity}</td>
//                                 <td>
//                                     <Button variant="success" onClick={() => openStockModal(item.subProductDetails[0], 'stockIn')}>
//                                         Stock In
//                                     </Button>
//                                 </td>
//                                 <td>
//                                     <Button variant="danger" onClick={() => openStockModal(item.subProductDetails[0], 'stockOut')}>
//                                         Stock Out
//                                     </Button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="5">No sub products found</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>

//             {/* Modal for Stock In/Out */}
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'} Sub Product</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group controlId="formFranchise">
//                             <Form.Label>Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.Name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="formQuantity">
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                         </Form.Group>
//                         <Button variant="primary" type="submit">
//                             {formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'}
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default SubProdstockIN;


















//////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SubProdstockIN() {
    const [subProducts, setSubProducts] = useState([]);
    const [franchises, setFranchises] = useState([]);
    const [totalQuantities, setTotalQuantities] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        subProduct: '',
        franchise: '',
        quantity: '',
        operationtype: ''
    });
    const [selectedSubProduct, setSelectedSubProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFranchise, setSelectedFranchise] = useState('');

    const getAuthToken = () => {
        return localStorage.getItem('authToken');
    };

    // Fetch sub-products
    const fetchSubProducts = async () => {
        try {
            const token = getAuthToken();
            const res = await axios.get('http://localhost:3000/subProduct/subproducts', {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log("sub : ", res.data);

            setSubProducts(res.data);
            console.log("State after setting:", res.data);
        } catch (err) {
            console.error('Error fetching sub-products:', err);
        }
    };

    // Fetch franchise data
    const fetchFranchises = async () => {
        try {
            const token = getAuthToken();
            const res = await axios.get('http://localhost:3000/fran/franchise', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setFranchises(res.data);
        } catch (err) {
            console.error('Error fetching franchises:', err);
        }
    };

   

    // Fetch filtered stock data based on franchise
    const fetchFilteredStockData = async () => {
        try {
            const token = getAuthToken();
            const res = await axios.get('http://localhost:3000/subProdStock/filter-stock', {
                headers: { Authorization: `Bearer ${token}` },
                params: {
                    franchise: selectedFranchise,
                    subProductSearch: searchTerm
                }
            });
            return res.data; // Return filtered stock data
        } catch (err) {
            console.error('Error fetching filtered stock data:', err);
            return [];
        }
    };

    useEffect(() => {
        fetchSubProducts();
        fetchFranchises();
    }, []);

    useEffect(() => {
        console.log("Sub-products state: ", subProducts); // Add this to check state
    }, [subProducts]); // Log subProducts state whenever it updates


    useEffect(() => {
        const loadFilteredStockData = async () => {
            const filteredData = await fetchFilteredStockData();
            setSubProducts(filteredData); // Update subProducts to only the filtered list
        };

        loadFilteredStockData();
    }, [searchTerm, selectedFranchise]);

    // Handle stock in/out form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const token = getAuthToken();
    //         await axios.post('http://localhost:3000/subProdStock/stock-in-out', {
    //             ...formData,
    //             subProduct: selectedSubProduct._id
    //         }, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         });

    //         alert(`${formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'} operation successfully created!`);
    //         setFormData({ subProduct: '', franchise: '', quantity: '', operationtype: '' });
    //         setShowModal(false);
    //         // fetchTotalQuantities();  // Update total quantities after operation
    //     } catch (err) {
    //         console.error('Error creating stock operation:', err);
    //         alert('Failed to create stock operation');
    //     }
    // };


    


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = getAuthToken();
            const res = await axios.post('http://localhost:3000/subProdStock/stock-in-out', {
                ...formData,
                subProduct: selectedSubProduct._id
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            alert(`${formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'} operation successfully created!`);
            setFormData({ subProduct: '', franchise: '', quantity: '', operationtype: '' });
            setShowModal(false);
            fetchSubProducts();  // Update the sub-products list after stock operation
        } catch (err) {
            console.error('Error creating stock operation:', err);
            alert('Failed to create stock operation');
        }
    };
    





    const openStockModal = (subProduct, operationtype) => {
        setSelectedSubProduct(subProduct);
        setFormData({ ...formData, operationtype });
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container">
            <h1 className="my-4">Sub Products Management</h1>

            {/* Filter and Search section */}
            <div className="d-flex mb-4">
                <Form.Control
                    as="select"
                    value={selectedFranchise}
                    onChange={(e) => setSelectedFranchise(e.target.value)}
                    className="mr-2"
                >
                    <option value="">All Franchises</option>
                    {franchises.map((franchise) => (
                        <option key={franchise._id} value={franchise._id}>
                            {franchise.Name}
                        </option>
                    ))}
                </Form.Control>

                <Form.Control
                    type="text"
                    placeholder="Search Sub Product"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mr-2"
                />
            </div>

            {/* Table for displaying sub-products */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sub Product Name</th>
                        <th>Price</th>
                        <th>Total Quantity</th>
                        <th>Stock In</th>
                        <th>Stock Out</th>
                    </tr>
                </thead>
                <tbody>
                    {subProducts.length > 0 ? (
                        subProducts.map((item) => (
                            <tr key={item._id}>
                                <td>{item.subProduct?.subProductName}</td>
                                <td>{item.subProduct?.subProductPrice}</td>
                                <td>{item.subProduct?.subProductMinQuantity}</td>
                                {/* <td>{item.quantity}</td> Stock quantity */}
                                <td>
                                    <Button variant="success" onClick={() => openStockModal(item.subProduct, 'stockIn')}>
                                        Stock In
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger" onClick={() => openStockModal(item.subProduct, 'stockOut')}>
                                        Stock Out
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No sub products found</td>
                        </tr>
                    )}
                </tbody>



            </Table>

            {/* Modal for Stock In/Out */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Franchise</Form.Label>
                            <Form.Control
                                as="select"
                                name="franchise"
                                value={formData.franchise}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Franchise</option>
                                {franchises.map((franchise) => (
                                    <option key={franchise._id} value={franchise._id}>
                                        {franchise.Name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                placeholder="Enter Quantity"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {formData.operationtype === 'stockIn' ? 'Add Stock In' : 'Add Stock Out'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SubProdstockIN;

///////////////////////////////////vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv



























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Modal, Form, Table } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function SubProdstockIN() {
//     const [subProducts, setSubProducts] = useState([]);
//     const [franchises, setFranchises] = useState([]);
//     const [filteredStock, setFilteredStock] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [formData, setFormData] = useState({
//         subProduct: '',
//         franchise: '',
//         quantity: '',
//         operationtype: ''
//     });
//     const [selectedSubProduct, setSelectedSubProduct] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedFranchise, setSelectedFranchise] = useState('');

//     // Fetch auth token
//     const getAuthToken = () => {
//         return localStorage.getItem('authToken');
//     };

//     // Fetch franchises
//     const fetchFranchises = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/fran/franchise', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setFranchises(res.data);
//         } catch (err) {
//             console.error('Error fetching franchises:', err);
//         }
//     };

//     // Fetch filtered stock operations based on search term and franchise selection
//     const fetchFilteredStock = async () => {
//         try {
//             const token = getAuthToken();
//             const res = await axios.get('http://localhost:3000/subProdStock/filter-stock', {
//                 headers: { Authorization: `Bearer ${token}` },
//                 params: {
//                     franchise: selectedFranchise,
//                     subProductSearch: searchTerm
//                 }
//             });
//             setFilteredStock(res.data);
//         } catch (err) {
//             console.error('Error fetching filtered stock:', err);
//         }
//     };

//     // Fetch franchises and initially fetch all stock
//     useEffect(() => {
//         fetchFranchises();
//         fetchFilteredStock();  // Initially fetch all stock
//     }, []);

//     // Update filtered stock when searchTerm or selectedFranchise changes
//     useEffect(() => {
//         fetchFilteredStock();
//     }, [searchTerm, selectedFranchise]);

//     // Handle input changes for formData
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     // Handle form submission for stock in/out
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const token = getAuthToken();
//             const url = formData.operationtype === 'stockIn'
//                 ? 'http://localhost:3000/subProdStock/stockin'
//                 : 'http://localhost:3000/subProdStock/stockout';

//             const res = await axios.post(url, {
//                 franchise: formData.franchise,
//                 subProduct: selectedSubProduct._id,
//                 quantity: formData.quantity
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });

//             if (res.status === 200) {
//                 alert('Stock updated successfully');
//                 setShowModal(false);
//                 fetchFilteredStock();  // Refresh stock data
//             }
//         } catch (err) {
//             console.error('Error updating stock:', err);
//         }
//     };

//     // Modal opening logic for stock in/out
//     const openStockModal = (subProduct, operationtype) => {
//         setSelectedSubProduct(subProduct);
//         setFormData({ ...formData, operationtype });
//         setShowModal(true);
//     };

//     return (
//         <div className="container">
//             <h1 className="my-4">Sub Products Stock Management</h1>

//             {/* Search Input and Franchise Dropdown */}
//             <div className="d-flex mb-4">
//                 <Form.Control
//                     as="select"
//                     value={selectedFranchise}
//                     onChange={(e) => setSelectedFranchise(e.target.value)}
//                     className="mr-2"
//                 >
//                     <option value="">All Franchises</option>
//                     {franchises.map((franchise) => (
//                         <option key={franchise._id} value={franchise._id}>
//                             {franchise.Name}
//                         </option>
//                     ))}
//                 </Form.Control>

//                 <Form.Control
//                     type="text"
//                     placeholder="Search Sub Product"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="mr-2"
//                 />
//             </div>

//             {/* Table for displaying filtered stock */}
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Sub Product Name</th>
//                         <th>Franchise</th>
//                         <th>Quantity</th>
//                         <th>Operation Type</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredStock.map((stock) => (
//                         <tr key={stock._id}>
//                             <td>{stock.subProduct.subProductName}</td>
//                             <td>{stock.franchise.Name}</td>
//                             <td>{stock.quantity}</td>
//                             <td>{stock.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'}</td>
//                             <td>{new Date(stock.createdAt).toLocaleDateString()}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             {/* Modal for stock in/out */}
//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{formData.operationtype === 'stockIn' ? 'Stock In' : 'Stock Out'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group>
//                             <Form.Label>Franchise</Form.Label>
//                             <Form.Control
//                                 as="select"
//                                 name="franchise"
//                                 value={formData.franchise}
//                                 onChange={handleInputChange}
//                                 required
//                             >
//                                 <option value="">Select Franchise</option>
//                                 {franchises.map((franchise) => (
//                                     <option key={franchise._id} value={franchise._id}>
//                                         {franchise.Name}
//                                     </option>
//                                 ))}
//                             </Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label>Quantity</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="quantity"
//                                 value={formData.quantity}
//                                 onChange={handleInputChange}
//                                 placeholder="Enter Quantity"
//                                 required
//                             />
//                         </Form.Group>

//                         <Button variant="primary" type="submit">
//                             {formData.operationtype === 'stockIn' ? 'Add Stock In' : 'Add Stock Out'}
//                         </Button>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// }

// export default SubProdstockIN;
