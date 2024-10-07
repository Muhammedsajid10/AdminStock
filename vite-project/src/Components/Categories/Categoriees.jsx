import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { IoTrashBin, IoPencil } from 'react-icons/io5';
import { baseUrl } from '../../Services/BaseUrl';
import { categoryUrl } from '../../Utils/Constants';

const Categories = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [Name, setName] = useState([]);
  const [editCategoryId, setEditCategoryId] = useState(null); 
  const [error, setError] = useState('');

  const handleClose = () => {
    setShow(false);
    setEditCategoryId(null); // Reset the edit state when modal is closed
    setCategoryName('');
  };
  const handleShow = () => setShow(true);


  const getauthToken = () => {
    return localStorage.getItem('authToken');
  };

  const fetchCategories = async () => {
    try {
      const authToken = getauthToken();
      const response = await axios.get(`${baseUrl}${categoryUrl}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setName(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = getauthToken();
      if (editCategoryId) {
        // Update category
        await axios.put(`${baseUrl}${categoryUrl}${editCategoryId}`, { Name: categoryName }, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        setName(prev => prev.map(cat => cat._id === editCategoryId ? { ...cat, Name: categoryName } : cat));
      } else {
        // Add new category
        const response = await axios.post(`${baseUrl}${categoryUrl}`, { Name: categoryName }, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        setName([...Name, response.data]); // Update state with new category
      }
      handleClose();
    } catch (error) {
      setError('Failed to save category');
      console.error('Error saving category:', error);
    }
  };


  //  delete category
  const deleteCategory = async (categoryId) => {
    try {
      const authToken = getauthToken();
      await axios.delete(`${baseUrl}${categoryUrl}${categoryId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setName(prev => prev.filter(category => category._id !== categoryId));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  //  edit category
  const handleEdit = (category) => {
    setEditCategoryId(category._id);
    setCategoryName(category.Name);
    setShow(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Category
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editCategoryId ? 'Edit Category' : 'Add Category'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCategoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {editCategoryId ? 'Update Category' : 'Add Category'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>


      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Name.length > 0 ? (
            Name.map((category, index) => (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.Name}</td>
                <td>
                  <IoPencil onClick={() => handleEdit(category)} />
                  <IoTrashBin onClick={() => deleteCategory(category._id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No Categories Added</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Categories;
