import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import './Pages.css';
import { useNavigate } from 'react-router-dom';

const Pages = () => {
    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const loginData = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:3000/login', {
                Email: formData.Email,
                Password: formData.Password,
            });

            console.log(response.data);
            

            if (response.data.data) {
                const token = response.data.data;


                localStorage.setItem('authToken', token);

                navigate('/dashboard');
            }
        } catch (error) {
            // Handle error and display it
            setError('Login failed. Please check your credentials.');
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login-form-container">
            <Form onSubmit={loginData}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={formData.Email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                Email: e.target.value,
                            })
                        }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Password"
                        value={formData.Password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                Password: e.target.value,
                            })
                        }
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            </Form>
        </div>
    );
};

export default Pages;
