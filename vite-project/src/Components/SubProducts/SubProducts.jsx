import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { IoTrashBin, IoPencil } from 'react-icons/io5';

const SubProducts = () => {
  const [show, setShow] = useState(false);
  const [subProductData, setSubProductData] = useState({
    subProductCode: '',
    subProductName: '',
    subProductMinQuantity: '',
    subProductPrice: '',
    subProductDescription: ''
  });
  const [subProducts, setSubProducts] = useState([]);
  const [editSubProductId, setEditSubProductId] = useState(null); 
  const [error, setError] = useState('');

  const handleClose = () => {
    setShow(false);
    setEditSubProductId(null);
    setSubProductData({
      subProductCode: '',
      subProductName: '',
      subProductMinQuantity: '',
      subProductPrice: '',
      subProductDescription: ''
    });
  };

  const handleShow = () => setShow(true);

  const getAuthToken = () => {
    return localStorage.getItem('authToken');
  };

  // Fetch sub-products from the backend
  const fetchSubProducts = async () => {
    try {
      const authToken = getAuthToken();
      const response = await axios.get('http://localhost:3000/subProduct/subproducts', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setSubProducts(response.data);
    } catch (error) {
      console.error('Error fetching sub-products:', error);
    }
  };

  useEffect(() => {
    fetchSubProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = getAuthToken();
      if (editSubProductId) {
        // Update sub-product
        await axios.put(`http://localhost:3000/subProduct/subproducts/${editSubProductId}`, subProductData, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        setSubProducts((prev) =>
          prev.map((subProduct) =>
            subProduct._id === editSubProductId ? { ...subProduct, ...subProductData } : subProduct
          )
        );
      } else {
        // Add new sub-product
        const response = await axios.post('http://localhost:3000/subProduct/subproducts', subProductData, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        setSubProducts([...subProducts, response.data]);
      }
      handleClose();
    } catch (error) {
      setError('Failed to save sub-product');
      console.error('Error saving sub-product:', error);
    }
  };

  // Delete sub-product
  const deleteSubProduct = async (subProductId) => {
    try {
      const authToken = getAuthToken();
      await axios.delete(`http://localhost:3000/subProduct/subproducts/${subProductId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setSubProducts((prev) => prev.filter((subProduct) => subProduct._id !== subProductId));
    } catch (error) {
      console.error('Error deleting sub-product:', error);
    }
  };

  // Edit sub-product
  const handleEdit = (subProduct) => {
    setEditSubProductId(subProduct._id);
    setSubProductData({
      subProductCode: subProduct.subProductCode,
      subProductName: subProduct.subProductName,
      subProductMinQuantity: subProduct.subProductMinQuantity,
      subProductPrice: subProduct.subProductPrice,
      subProductDescription: subProduct.subProductDescription
    });
    setShow(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Sub Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editSubProductId ? 'Edit Sub Product' : 'Add Sub Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSubProductCode">
              <Form.Label>Sub-Product Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter sub-product code"
                name="subProductCode"
                value={subProductData.subProductCode}
                onChange={(e) => setSubProductData({ ...subProductData, subProductCode: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formSubProductName">
              <Form.Label>Sub-Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter sub-product name"
                name="subProductName"
                value={subProductData.subProductName}
                onChange={(e) => setSubProductData({ ...subProductData, subProductName: e.target.value })}
              />
            </Form.Group>

          

            <Form.Group controlId="formsubProductMinQuantity">
              <Form.Label>subProductMinQuantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter subProductMinQuantity"
                name="subProductMinQuantity"
                value={subProductData.subProductMinQuantity}
                onChange={(e) => setSubProductData({ ...subProductData, subProductMinQuantity: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formsubProductPrice">
              <Form.Label>subProductPrice</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter subProductPrice"
                name="subProductPrice"
                value={subProductData.subProductPrice}
                onChange={(e) => setSubProductData({ ...subProductData, subProductPrice: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formsubProductDescription">
              <Form.Label>subProductDescription</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter subProductDescription"
                name="subProductDescription"
                value={subProductData.subProductDescription}
                onChange={(e) => setSubProductData({ ...subProductData, subProductDescription: e.target.value })}
              />
            </Form.Group>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {editSubProductId ? 'Update Sub Product' : 'Add Sub Product'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Sub-Product Code</th>
            <th>Sub-Product Name</th>
            <th>subProductMinQuantity</th>
            <th>subProductPrice</th>
            <th>subProductDescription</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subProducts.length > 0 ? (
            subProducts.map((subProduct, index) => (
              <tr key={subProduct._id}>
                <td>{index + 1}</td>
                <td>{subProduct.subProductCode}</td>
                <td>{subProduct.subProductName}</td>
                <td>{subProduct.subProductMinQuantity}</td>
                <td>{subProduct.subProductPrice}</td>
                <td>{subProduct.subProductDescription}</td>
                <td>
                  <IoPencil onClick={() => handleEdit(subProduct)} />
                  <IoTrashBin onClick={() => deleteSubProduct(subProduct._id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">No Sub Products Added</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default SubProducts;
