// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';
// import { baseUrl } from '../../Services/BaseUrl';

// const Products = () => {
//   const [show, setShow] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [formData, setFormData] = useState({
//     ProductCode: '',
//     ProductName: '',
//     ProductQuantity: '',
//     Category: '',
//     ProductPrice: '',
//     ProductDescription: '',
//     subProducts: [],
//   });
//   const [products, setProducts] = useState([]);
//   const [Name, setName] = useState([]);  // to store category names
//   const [subProductOptions, setSubProductOptions] = useState([]); // to store sub-product options
//   const [error, setError] = useState('');
//   const navigate = useNavigate()

//   const handleClose = () => {
//     setShow(false);
//     setEditProductId(null);
//     setFormData({
//       ProductCode: '',
//       ProductName: '',
//       ProductQuantity: '',
//       Category: '',
//       ProductPrice: '',
//       ProductDescription: '',
//       subProducts: [],
//     });
//   };
//   const handleShow = () => setShow(true);

//   const getAuthToken = () => {
//     return localStorage.getItem('authToken');
//   };

//   const fetchProducts = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/product/products', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const fetchName = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/cate/category', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setName(response.data);
//     } catch (error) {
//       console.error('Error fetching Name:', error);
//     }
//   };

//   // Fetch sub-product options from your API
//   const fetchSubProductOptions = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/subProduct/subproducts', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       console.log("suuuuuuub : ", response.data);

//       setSubProductOptions(response.data);
//     } catch (error) {
//       console.error('Error fetching sub-products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchName();
//     fetchSubProductOptions();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('FormData before submit:', formData); // Log the formData for debugging

//     try {
//       const authToken = getAuthToken();
//       if (editProductId) {
//         await axios.put(`http://localhost:3000/product/products/${editProductId}`, formData, {
//           headers: {
//             Authorization: `Bearer ${authToken}`
//           }
//         });
//         setProducts(prev => prev.map(prod => prod._id === editProductId ? { ...prod, ...formData } : prod));
//         fetchProducts();
//       } else {
//         const response = await axios.post('http://localhost:3000/product/products', formData, {
//           headers: {
//             Authorization: `Bearer ${authToken}`
//           }
//         });
//         console.log("product : ", response.data);

//         setProducts([...products, response.data]);
//       }
//       handleClose();
//     } catch (error) {
//       setError('Failed to save product');
//       console.error('Error saving product:', error);
//     }
//   };




//   const deleteProduct = async (productId) => {
//     try {
//       const authToken = getAuthToken();
//       await axios.delete(`${baseUrl}product/products/${productId}`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setProducts(prev => prev.filter(product => product._id !== productId));
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const handleEdit = (product) => {
//     setEditProductId(product._id);
//     setFormData({
//       ProductCode: product.ProductCode,
//       ProductName: product.ProductName,
//       ProductQuantity: product.ProductQuantity,
//       Category: product.Category,
//       ProductPrice: product.ProductPrice,
//       ProductDescription: product.ProductDescription,
//       subProducts: product.subProducts || [],
//     });
//     setShow(true);
//   };

//   const handleViewSubProduct = (productId) => {
//     navigate(`/viewSubProduct/${productId}`)
//   }

//   // Handle adding a new sub-product field dynamically
//   const handleAddNewSubProduct = () => {
//     setFormData({
//       ...formData,
//       subProducts: [...formData.subProducts, { subProduct: '', subProductQuantity: '' }]
//     });
//   };

//   // Handle change in sub-product dropdown or quantity input
//   const handleSubProductChange = (index, field, value) => {
//     const updatedSubProducts = formData.subProducts.map((subProduct, i) =>
//       i === index ? { ...subProduct, [field]: value } : subProduct
//     );
//     setFormData({ ...formData, subProducts: updatedSubProducts });
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         Add Product
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editProductId ? 'Edit Product' : 'Add Product'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             {/* Existing fields */}
//             <Form.Group controlId="formProductCode">
//               <Form.Label>Product Code</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter product code"
//                 name="ProductCode"
//                 value={formData.ProductCode}
//                 onChange={(e) => setFormData({ ...formData, ProductCode: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductName">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter product name"
//                 name="ProductName"
//                 value={formData.ProductName}
//                 onChange={(e) => setFormData({ ...formData, ProductName: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductQuantity">
//               <Form.Label>Product Quantity</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter product quantity"
//                 name="ProductQuantity"
//                 value={formData.ProductQuantity}
//                 onChange={(e) => setFormData({ ...formData, ProductQuantity: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formCategory">
//               <Form.Label>Category Name</Form.Label>
//               <Form.Control
//                 as="select"
//                 name="Category"
//                 value={formData.Category}
//                 onChange={(e) => setFormData({ ...formData, Category: e.target.value })}
//               >
//                 <option value="">Select category</option>
//                 {Name.map(category => (
//                   <option key={category._id} value={category._id}>
//                     {category.Name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formProductPrice">
//               <Form.Label>Product Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter product price"
//                 name="ProductPrice"
//                 value={formData.ProductPrice}
//                 onChange={(e) => setFormData({ ...formData, ProductPrice: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductDescription">
//               <Form.Label>Product Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter product description"
//                 name="ProductDescription"
//                 value={formData.ProductDescription}
//                 onChange={(e) => setFormData({ ...formData, ProductDescription: e.target.value })}
//               />
//             </Form.Group>


//             <h5>Sub-Products</h5>
//             {formData.subProducts.map((subProduct, index) => (
//               <div key={index} className="mb-3">
//                 <Form.Group controlId={`subProduct_${index}`}>
//                   <Form.Label>Sub-Product</Form.Label>
//                   <Form.Control
//                     as="select"
//                     value={subProduct.subProduct}
//                     onChange={(e) => handleSubProductChange(index, 'subProduct', e.target.value)}
//                   >
//                     <option value="">Select sub-product</option>
//                     {subProductOptions.map(sub => (
//                       <option key={sub._id} value={sub._id}>
//                         {sub.subProductName}
//                       </option>
//                     ))}
//                   </Form.Control>
//                 </Form.Group>
//                 <Form.Group controlId={`subProductQuantity${index}`}>
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control
//                     type="number"
//                     value={subProduct.subProductQuantity}
//                     onChange={(e) => handleSubProductChange(index, 'subProductQuantity', e.target.value)}
//                   />
//                 </Form.Group>
//               </div>
//             ))}

//             <Button variant="link" onClick={handleAddNewSubProduct}>
//               + Add New Sub-Product
//             </Button>

//             {error && <p className="text-danger">{error}</p>}

//             <Button variant="primary" type="submit">
//               {editProductId ? 'Update Product' : 'Add Product'}
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Product Code</th>
//             <th>Product Name</th>
//             <th>Product Quantity</th>
//             <th>Category Name</th>
//             <th>Product Price</th>
//             <th>Product Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.ProductCode}</td>
//               <td>{product.ProductName}</td>
//               <td>{product.ProductQuantity}</td>
//               <td>{product.Category?.Name}</td>
//               <td>{product.ProductPrice}</td>
//               <td>{product.ProductDescription}</td>
//               <td>
//                 <Button variant="light" onClick={() => handleViewSubProduct(product._id)}>
//                   <BsEye />
//                 </Button>
//                 <Button variant="light" onClick={() => handleEdit(product)}>
//                   <BsPencil />
//                 </Button>
//                 <Button variant="light" onClick={() => deleteProduct(product._id)}>
//                   <BsTrash />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Products;























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';
// import { baseUrl } from '../../Services/BaseUrl';

// const Products = () => {
//   const [show, setShow] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [formData, setFormData] = useState({
//     ProductCode: '',
//     ProductName: '',
//     ProductQuantity: '',
//     Category: '',
//     ProductPrice: '',
//     ProductDescription: '',
//     subProducts: [],
//   });
//   const [products, setProducts] = useState([]);
//   const [Name, setName] = useState([]); 
//   const [subProductOptions, setSubProductOptions] = useState([]); // to store sub-product options
//   const [error, setError] = useState('');
//   const [currentPage, setCurrentPage] = useState(1); // Track the current page
//   const productsPerPage = 3; 
//   const navigate = useNavigate();

//   const handleClose = () => {
//     setShow(false);
//     setEditProductId(null);
//     setFormData({
//       ProductCode: '',
//       ProductName: '',
//       ProductQuantity: '',
//       Category: '',
//       ProductPrice: '',
//       ProductDescription: '',
//       subProducts: [],
//     });
//   };
//   const handleShow = () => setShow(true);

//   const getAuthToken = () => {
//     return localStorage.getItem('authToken');
//   };

//   const fetchProducts = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/product/products', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const fetchName = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/cate/category', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setName(response.data);
//     } catch (error) {
//       console.error('Error fetching Name:', error);
//     }
//   };

//   const fetchSubProductOptions = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/subProduct/subproducts', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setSubProductOptions(response.data);
//     } catch (error) {
//       console.error('Error fetching sub-products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchName();
//     fetchSubProductOptions();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const authToken = getAuthToken();
//       if (editProductId) {
//         await axios.put(`http://localhost:3000/product/products/${editProductId}`, formData, {
//           headers: {
//             Authorization: `Bearer ${authToken}`
//           }
//         });
//         setProducts(prev =>
//           prev.map(prod => (prod._id === editProductId ? { ...prod, ...formData } : prod))
//         );
//         fetchProducts();
//       } else {
//         const response = await axios.post('http://localhost:3000/product/products', formData, {
//           headers: {
//             Authorization: `Bearer ${authToken}`
//           }
//         });
//         setProducts([...products, response.data]);
//       }
//       handleClose();
//     } catch (error) {
//       setError('Failed to save product');
//       console.error('Error saving product:', error);
//     }
//   };

//   const deleteProduct = async (productId) => {
//     try {
//       const authToken = getAuthToken();
//       await axios.delete(`${baseUrl}product/products/${productId}`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setProducts(prev => prev.filter(product => product._id !== productId));
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const handleEdit = (product) => {
//     setEditProductId(product._id);
//     setFormData({
//       ProductCode: product.ProductCode,
//       ProductName: product.ProductName,
//       ProductQuantity: product.ProductQuantity,
//       Category: product.Category,
//       ProductPrice: product.ProductPrice,
//       ProductDescription: product.ProductDescription,
//       subProducts: product.subProducts || [],
//     });
//     setShow(true);
//   };

//   const handleViewSubProduct = (productId) => {
//     navigate(`/viewSubProduct/${productId}`);
//   };

//   const handleAddNewSubProduct = () => {
//     setFormData({
//       ...formData,
//       subProducts: [...formData.subProducts, { subProduct: '', subProductQuantity: '' }]
//     });
//   };

//   const handleSubProductChange = (index, field, value) => {
//     const updatedSubProducts = formData.subProducts.map((subProduct, i) =>
//       i === index ? { ...subProduct, [field]: value } : subProduct
//     );
//     setFormData({ ...formData, subProducts: updatedSubProducts });
//   };

//   // Pagination logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const totalPages = Math.ceil(products.length / productsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div>

//       <div>
//         <h1>POroduct</h1>
//       <Button variant="primary" onClick={handleShow} >
//         Add Product
//       </Button>
//       </div>


//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editProductId ? 'Edit Product' : 'Add Product'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {/* Form fields go here */}
//           {/* You can keep the existing form and logic here */}
//         </Modal.Body>
//       </Modal>

//       <Table striped bordered hover style={{marginTop:'40px'}}>
//         <thead>
//           <tr>
//             <th>Product Code</th>
//             <th>Product Name</th>
//             <th>Product Quantity</th>
//             <th>Category Name</th>
//             <th>Product Price</th>
//             <th>Product Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentProducts.map((product) => (
//             <tr key={product._id}>
//               <td>{product.ProductCode}</td>
//               <td>{product.ProductName}</td>
//               <td>{product.ProductQuantity}</td>
//               <td>{product.Category?.Name}</td>
//               <td>{product.ProductPrice}</td>
//               <td>{product.ProductDescription}</td>
//               <td>
//                 <Button variant="light" onClick={() => handleViewSubProduct(product._id)}>
//                   <BsEye />
//                 </Button>
//                 <Button variant="light" onClick={() => handleEdit(product)}>
//                   <BsPencil />
//                 </Button>
//                 <Button variant="light" onClick={() => deleteProduct(product._id)}>
//                   <BsTrash />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Pagination controls */}
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <Button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={index + 1 === currentPage ? 'active' : ''}
//           >
//             {index + 1}
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;






















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';
// import { baseUrl } from '../../Services/BaseUrl';

// const Products = () => {
//   const [show, setShow] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [formData, setFormData] = useState({
//     ProductCode: '',
//     ProductName: '',
//     ProductQuantity: '',
//     Category: '',
//     ProductPrice: '',
//     ProductDescription: '',
//     subProducts: [],
//   });
//   const [products, setProducts] = useState([]);
//   const [Name, setName] = useState([]);  // to store category names
//   const [subProductOptions, setSubProductOptions] = useState([]); // to store sub-product options
//   const [error, setError] = useState('');
//   const navigate = useNavigate()

//   const handleClose = () => {
//     setShow(false);
//     setEditProductId(null);
//     setFormData({
//       ProductCode: '',
//       ProductName: '',
//       ProductQuantity: '',
//       Category: '',
//       ProductPrice: '',
//       ProductDescription: '',
//       subProducts: [],
//     });
//   };
//   const handleShow = () => setShow(true);

//   const getAuthToken = () => {
//     return localStorage.getItem('authToken');
//   };

//   const fetchProducts = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/product/products', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const fetchName = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/cate/category', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setName(response.data);
//     } catch (error) {
//       console.error('Error fetching Name:', error);
//     }
//   };

//   // Fetch sub-product options from your API
//   const fetchSubProductOptions = async () => {
//     try {
//       const authToken = getAuthToken();
//       const response = await axios.get('http://localhost:3000/subProduct/subproducts', {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       console.log("suuuuuuub : ", response.data);

//       setSubProductOptions(response.data);
//     } catch (error) {
//       console.error('Error fetching sub-products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchName();
//     fetchSubProductOptions();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('FormData before submit:', formData); // Log the formData for debugging

//     try {
//       const authToken = getAuthToken();
//       if (editProductId) {
//         await axios.put(`http://localhost:3000/product/products/${editProductId}`, formData, {
//           headers: {
//             Authorization: `Bearer ${authToken}`
//           }
//         });
//         setProducts(prev => prev.map(prod => prod._id === editProductId ? { ...prod, ...formData } : prod));
//         fetchProducts();
//       } else {
//         const response = await axios.post('http://localhost:3000/product/products', formData, {
//           headers: {
//             Authorization: `Bearer ${authToken}`
//           }
//         });
//         console.log("product : ", response.data);

//         setProducts([...products, response.data]);
//       }
//       handleClose();
//     } catch (error) {
//       setError('Failed to save product');
//       console.error('Error saving product:', error);
//     }
//   };




//   const deleteProduct = async (productId) => {
//     try {
//       const authToken = getAuthToken();
//       await axios.delete(`${baseUrl}product/products/${productId}`, {
//         headers: {
//           Authorization: `Bearer ${authToken}`
//         }
//       });
//       setProducts(prev => prev.filter(product => product._id !== productId));
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   const handleEdit = (product) => {
//     setEditProductId(product._id);
//     setFormData({
//       ProductCode: product.ProductCode,
//       ProductName: product.ProductName,
//       ProductQuantity: product.ProductQuantity,
//       Category: product.Category,
//       ProductPrice: product.ProductPrice,
//       ProductDescription: product.ProductDescription,
//       subProducts: product.subProducts || [],
//     });
//     setShow(true);
//   };

//   const handleViewSubProduct = (productId) => {
//     navigate(`/viewSubProduct/${productId}`)
//   }

//   // Handle adding a new sub-product field dynamically
//   const handleAddNewSubProduct = () => {
//     setFormData({
//       ...formData,
//       subProducts: [...formData.subProducts, { subProduct: '', subProductQuantity: '' }]
//     });
//   };

//   // Handle change in sub-product dropdown or quantity input
//   const handleSubProductChange = (index, field, value) => {
//     const updatedSubProducts = formData.subProducts.map((subProduct, i) =>
//       i === index ? { ...subProduct, [field]: value } : subProduct
//     );
//     setFormData({ ...formData, subProducts: updatedSubProducts });
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         Add Product
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editProductId ? 'Edit Product' : 'Add Product'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmit}>
//             {/* Existing fields */}
//             <Form.Group controlId="formProductCode">
//               <Form.Label>Product Code</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter product code"
//                 name="ProductCode"
//                 value={formData.ProductCode}
//                 onChange={(e) => setFormData({ ...formData, ProductCode: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductName">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter product name"
//                 name="ProductName"
//                 value={formData.ProductName}
//                 onChange={(e) => setFormData({ ...formData, ProductName: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductQuantity">
//               <Form.Label>Product Quantity</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter product quantity"
//                 name="ProductQuantity"
//                 value={formData.ProductQuantity}
//                 onChange={(e) => setFormData({ ...formData, ProductQuantity: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formCategory">
//               <Form.Label>Category Name</Form.Label>
//               <Form.Control
//                 as="select"
//                 name="Category"
//                 value={formData.Category}
//                 onChange={(e) => setFormData({ ...formData, Category: e.target.value })}
//               >
//                 <option value="">Select category</option>
//                 {Name.map(category => (
//                   <option key={category._id} value={category._id}>
//                     {category.Name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formProductPrice">
//               <Form.Label>Product Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter product price"
//                 name="ProductPrice"
//                 value={formData.ProductPrice}
//                 onChange={(e) => setFormData({ ...formData, ProductPrice: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductDescription">
//               <Form.Label>Product Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter product description"
//                 name="ProductDescription"
//                 value={formData.ProductDescription}
//                 onChange={(e) => setFormData({ ...formData, ProductDescription: e.target.value })}
//               />
//             </Form.Group>


//             <h5>Sub-Products</h5>
//             {formData.subProducts.map((subProduct, index) => (
//               <div key={index} className="mb-3">
//                 <Form.Group controlId={`subProduct_${index}`}>
//                   <Form.Label>Sub-Product</Form.Label>
//                   <Form.Control
//                     as="select"
//                     value={subProduct.subProduct}
//                     onChange={(e) => handleSubProductChange(index, 'subProduct', e.target.value)}
//                   >
//                     <option value="">Select sub-product</option>
//                     {subProductOptions.map(sub => (
//                       <option key={sub._id} value={sub._id}>
//                         {sub.subProductName}
//                       </option>
//                     ))}
//                   </Form.Control>
//                 </Form.Group>
//                 <Form.Group controlId={`subProductQuantity${index}`}>
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control
//                     type="number"
//                     value={subProduct.subProductQuantity}
//                     onChange={(e) => handleSubProductChange(index, 'subProductQuantity', e.target.value)}
//                   />
//                 </Form.Group>
//               </div>
//             ))}

//             <Button variant="link" onClick={handleAddNewSubProduct}>
//               + Add New Sub-Product
//             </Button>

//             {error && <p className="text-danger">{error}</p>}

//             <Button variant="primary" type="submit">
//               {editProductId ? 'Update Product' : 'Add Product'}
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Product Code</th>
//             <th>Product Name</th>
//             <th>Product Quantity</th>
//             <th>Category Name</th>
//             <th>Product Price</th>
//             <th>Product Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product._id}>
//               <td>{product.ProductCode}</td>
//               <td>{product.ProductName}</td>
//               <td>{product.ProductQuantity}</td>
//               <td>{product.Category?.Name}</td>
//               <td>{product.ProductPrice}</td>
//               <td>{product.ProductDescription}</td>
//               <td>
//                 <Button variant="light" onClick={() => handleViewSubProduct(product._id)}>
//                   <BsEye />
//                 </Button>
//                 <Button variant="light" onClick={() => handleEdit(product)}>
//                   <BsPencil />
//                 </Button>
//                 <Button variant="light" onClick={() => deleteProduct(product._id)}>
//                   <BsTrash />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Products;

















// {/* <Form onSubmit={handleSubmit}>
//             {/* Existing fields */}
//             <Form.Group controlId="formProductCode">
//               <Form.Label>Product Code</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter product code"
//                 name="ProductCode"
//                 value={formData.ProductCode}
//                 onChange={(e) => setFormData({ ...formData, ProductCode: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductName">
//               <Form.Label>Product Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter product name"
//                 name="ProductName"
//                 value={formData.ProductName}
//                 onChange={(e) => setFormData({ ...formData, ProductName: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductQuantity">
//               <Form.Label>Product Quantity</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter product quantity"
//                 name="ProductQuantity"
//                 value={formData.ProductQuantity}
//                 onChange={(e) => setFormData({ ...formData, ProductQuantity: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formCategory">
//               <Form.Label>Category Name</Form.Label>
//               <Form.Control
//                 as="select"
//                 name="Category"
//                 value={formData.Category}
//                 onChange={(e) => setFormData({ ...formData, Category: e.target.value })}
//               >
//                 <option value="">Select category</option>
//                 {Name.map(category => (
//                   <option key={category._id} value={category._id}>
//                     {category.Name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formProductPrice">
//               <Form.Label>Product Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter product price"
//                 name="ProductPrice"
//                 value={formData.ProductPrice}
//                 onChange={(e) => setFormData({ ...formData, ProductPrice: e.target.value })}
//               />
//             </Form.Group>

//             <Form.Group controlId="formProductDescription">
//               <Form.Label>Product Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 placeholder="Enter product description"
//                 name="ProductDescription"
//                 value={formData.ProductDescription}
//                 onChange={(e) => setFormData({ ...formData, ProductDescription: e.target.value })}
//               />
//             </Form.Group>


//             <h5>Sub-Products</h5>
//             {formData.subProducts.map((subProduct, index) => (
//               <div key={index} className="mb-3">
//                 <Form.Group controlId={`subProduct_${index}`}>
//                   <Form.Label>Sub-Product</Form.Label>
//                   <Form.Control
//                     as="select"
//                     value={subProduct.subProduct}
//                     onChange={(e) => handleSubProductChange(index, 'subProduct', e.target.value)}
//                   >
//                     <option value="">Select sub-product</option>
//                     {subProductOptions.map(sub => (
//                       <option key={sub._id} value={sub._id}>
//                         {sub.subProductName}
//                       </option>
//                     ))}
//                   </Form.Control>
//                 </Form.Group>
//                 <Form.Group controlId={`subProductQuantity${index}`}>
//                   <Form.Label>Quantity</Form.Label>
//                   <Form.Control
//                     type="number"
//                     value={subProduct.subProductQuantity}
//                     onChange={(e) => handleSubProductChange(index, 'subProductQuantity', e.target.value)}
//                   />
//                 </Form.Group>
//               </div>
//             ))}

//             <Button variant="link" onClick={handleAddNewSubProduct}>
//               + Add New Sub-Product
//             </Button>

//             {error && <p className="text-danger">{error}</p>}

//             <Button variant="primary" type="submit">
//               {editProductId ? 'Update Product' : 'Add Product'}
//             </Button>
//           </Form> */}





























import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Services/BaseUrl';

const Products = () => {
  const [show, setShow] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const [formData, setFormData] = useState({
    ProductCode: '',
    ProductName: '',
    ProductQuantity: '',
    Category: '',
    ProductPrice: '',
    ProductDescription: '',
    subProducts: [],
  });
  const [products, setProducts] = useState([]);
  const [Name, setName] = useState([]); // to store category names
  const [subProductOptions, setSubProductOptions] = useState([]); // to store sub-product options
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1); //current page traking
  const productsPerPage = 3; 
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    setEditProductId(null);
    setFormData({
      ProductCode: '',
      ProductName: '',
      ProductQuantity: '',
      Category: '',
      ProductPrice: '',
      ProductDescription: '',
      subProducts: [],
    });
  };
  const handleShow = () => setShow(true);

  const getAuthToken = () => {
    return localStorage.getItem('authToken');
  };

  const fetchProducts = async () => {
    try {
      const authToken = getAuthToken();
      const response = await axios.get('http://localhost:3000/product/products', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchName = async () => {
    try {
      const authToken = getAuthToken();
      const response = await axios.get('http://localhost:3000/cate/category', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setName(response.data);
    } catch (error) {
      console.error('Error fetching Name:', error);
    }
  };

  const fetchSubProductOptions = async () => {
    try {
      const authToken = getAuthToken();
      const response = await axios.get('http://localhost:3000/subProduct/subproducts', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setSubProductOptions(response.data);
    } catch (error) {
      console.error('Error fetching sub-products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchName();
    fetchSubProductOptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = getAuthToken();
      if (editProductId) {
        await axios.put(`http://localhost:3000/product/products/${editProductId}`, formData, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        setProducts(prev =>
          prev.map(prod => (prod._id === editProductId ? { ...prod, ...formData } : prod))
        );
        fetchProducts();
      } else {
        const response = await axios.post('http://localhost:3000/product/products', formData, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        setProducts([...products, response.data]);
      }
      handleClose();
    } catch (error) {
      setError('Failed to save product');
      console.error('Error saving product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const authToken = getAuthToken();
      await axios.delete(`${baseUrl}product/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setProducts(prev => prev.filter(product => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditProductId(product._id);
    setFormData({
      ProductCode: product.ProductCode,
      ProductName: product.ProductName,
      ProductQuantity: product.ProductQuantity,
      Category: product.Category,
      ProductPrice: product.ProductPrice,
      ProductDescription: product.ProductDescription,
      subProducts: product.subProducts || [],
    });
    setShow(true);
  };

  const handleViewSubProduct = (productId) => {
    navigate(`/viewSubProduct/${productId}`);
  };

  const handleAddNewSubProduct = () => {
    setFormData({
      ...formData,
      subProducts: [...formData.subProducts, { subProduct: '', subProductQuantity: '' }]
    });
  };

  const handleSubProductChange = (index, field, value) => {
    const updatedSubProducts = formData.subProducts.map((subProduct, i) =>
      i === index ? { ...subProduct, [field]: value } : subProduct
    );
    setFormData({ ...formData, subProducts: updatedSubProducts });
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editProductId ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Existing fields */}
            <Form.Group controlId="formProductCode">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product code"
                name="ProductCode"
                value={formData.ProductCode}
                onChange={(e) => setFormData({ ...formData, ProductCode: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="ProductName"
                value={formData.ProductName}
                onChange={(e) => setFormData({ ...formData, ProductName: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formProductQuantity">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product quantity"
                name="ProductQuantity"
                value={formData.ProductQuantity}
                onChange={(e) => setFormData({ ...formData, ProductQuantity: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formCategory">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                as="select"
                name="Category"
                value={formData.Category}
                onChange={(e) => setFormData({ ...formData, Category: e.target.value })}
              >
                <option value="">Select category</option>
                {Name.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.Name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formProductPrice">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                name="ProductPrice"
                value={formData.ProductPrice}
                onChange={(e) => setFormData({ ...formData, ProductPrice: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formProductDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                name="ProductDescription"
                value={formData.ProductDescription}
                onChange={(e) => setFormData({ ...formData, ProductDescription: e.target.value })}
              />
            </Form.Group>


            <h5>Sub-Products</h5>
            {formData.subProducts.map((subProduct, index) => (
              <div key={index} className="mb-3">
                <Form.Group controlId={`subProduct_${index}`}>
                  <Form.Label>Sub-Product</Form.Label>
                  <Form.Control
                    as="select"
                    value={subProduct.subProduct}
                    onChange={(e) => handleSubProductChange(index, 'subProduct', e.target.value)}
                  >
                    <option value="">Select sub-product</option>
                    {subProductOptions.map(sub => (
                      <option key={sub._id} value={sub._id}>
                        {sub.subProductName}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId={`subProductQuantity${index}`}>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={subProduct.subProductQuantity}
                    onChange={(e) => handleSubProductChange(index, 'subProductQuantity', e.target.value)}
                  />
                </Form.Group>
              </div>
            ))}

            <Button variant="link" onClick={handleAddNewSubProduct}>
              + Add New Sub-Product
            </Button>

            {error && <p className="text-danger">{error}</p>}

            <Button variant="primary" type="submit">
              {editProductId ? 'Update Product' : 'Add Product'}
            </Button>
          </Form>

        </Modal.Body>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Code</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Category Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.ProductCode}</td>
              <td>{product.ProductName}</td>
              <td>{product.ProductQuantity}</td>
              <td>{product.Category?.Name}</td>
              <td>{product.ProductPrice}</td>
              <td>{product.ProductDescription}</td>
              <td>
                <Button variant="light" onClick={() => handleViewSubProduct(product._id)}>
                  <BsEye />
                </Button>
                <Button variant="light" onClick={() => handleEdit(product)}>
                  <BsPencil />
                </Button>
                <Button variant="light" onClick={() => deleteProduct(product._id)}>
                  <BsTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Products;
