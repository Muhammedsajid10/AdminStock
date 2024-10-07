import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { IoTrashBin, IoEye, IoPencil } from 'react-icons/io5';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Franchise.css'

const Franchise = () => {
    const [Name, setName] = useState([]); 
    const [showModal, setShowModal] = useState(false); 
    const [newFranchise, setNewFranchise] = useState({ Name: '' });
    const [currentFranchise, setCurrentFranchise] = useState(null); // To hold the current franchise for update
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const getauthToken = () => {
        return localStorage.getItem('authToken');
    };

    // Fetch all franchises
    const fetchData = async () => {
        try {
            const authToken = getauthToken();
            const response = await axios.get('http://localhost:3000/fran/franchise', {
                headers: {
                    Authorization: `Bearer ${authToken}` 
                }
            });
            setName(response.data);
        } catch (error) {
            console.error('Error fetching franchises:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Delete franchise
    const deleteFranchise = async (franchiseId) => {
        try {
            const authToken = getauthToken();
            await axios.delete(`http://localhost:3000/fran/franchise/${franchiseId}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setName((prev) => prev.filter((franchise) => franchise._id !== franchiseId));
        } catch (error) {
            console.error('Error deleting franchise:', error);
        }
    };

    // Open the modal to update a franchise
    const updateFranchise = (franchiseId) => {
        const franchise = Name.find((franchise) => franchise._id === franchiseId);
        setCurrentFranchise(franchise);
        setNewFranchise({ Name: franchise.Name }); 
        setShowModal(true); 
    };

    // Handle the form submission for updating the franchise
    const handleUpdateFranchise = async () => {
        try {
            const authToken = getauthToken();
            await axios.put(`http://localhost:3000/fran/franchise/${currentFranchise._id}`, newFranchise, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            // Update the local state with the updated franchise
            setName((prev) =>
                prev.map((franchise) =>
                    franchise._id === currentFranchise._id ? { ...franchise, Name: newFranchise.Name } : franchise
                )
            );
            setShowModal(false); 
            setNewFranchise({ Name: '' }); 
        } catch (error) {
            setError('Failed to update franchise');
            console.error('Error updating franchise:', error);
        }
    };

    // const viewFranchise = (franchiseId) => {
    //     navigate(`/viewFranchise/${franchiseId}`);
    // };

    // Add new franchise
    const handleAddFranchise = async () => {
        try {
            const authToken = getauthToken();
            const response = await axios.post('http://localhost:3000/fran/franchise', newFranchise, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setName([...Name, response.data]); // Update state with new franchise
            setShowModal(false); 
            setNewFranchise({ Name: '' }); 
        } catch (error) {
            setError('Failed to add franchise');
            console.error('Error adding franchise:', error);
        }
    };

    return (
        <div>
           
            <Button variant="primary" onClick={() => { setShowModal(true); setCurrentFranchise(null); }}>
                Add Franchise
            </Button>

           
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentFranchise ? 'Update Franchise' : 'Add Franchise'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Franchise Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter franchise name"
                                value={newFranchise.Name}
                                onChange={(e) => setNewFranchise({ ...newFranchise, Name: e.target.value })}
                            />
                        </Form.Group>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={currentFranchise ? handleUpdateFranchise : handleAddFranchise}>
                        {currentFranchise ? 'Update Franchise' : 'Add Franchise'}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Table striped bordered hover className='tablee'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Franchise Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Name.map((franchise, index) => (
                        <tr key={franchise._id}>
                            <td>{index + 1}</td>
                            <td>{franchise.Name}</td>
                            <td>
                                <IoEye onClick={() => viewFranchise(franchise._id)} />
                                <IoPencil onClick={() => updateFranchise(franchise._id)} />
                                <IoTrashBin onClick={() => deleteFranchise(franchise._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Franchise;
