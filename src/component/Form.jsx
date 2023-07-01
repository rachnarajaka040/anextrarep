import React from 'react'
import { useState } from 'react';
import './Signup.css';
function Form() {
    const [formData, setFormData] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('myFormData', JSON.stringify(formData));
        document.getElementById('username').value = "";
        document.getElementById('age').value = "";
        document.getElementById('password').value = "";
        document.getElementById('email').value = "";
        document.getElementById('file').value = "";
       
    };

    return (
        <div class="main-bg" >
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="card shadow">
                            <div class="card-title text-center border-bottom">
                                <h2 class="p-3">Form</h2>
                            </div>
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-4">
                                        <label for="username" class="form-label">Full name</label>
                                        <input type="text" class="form-control" onChange={handleChange} id="username" name="username" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="age" class="form-label">Age</label>
                                        <input type="number" class="form-control" name="age" id="age" onChange={handleChange} />
                                    </div>
                                    <div class="mb-4">
                                        <label for="weight" class="form-label">Weight</label>
                                        <input type="number" onChange={handleChange} class="form-control" id="password" name="password" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" onChange={handleChange} class="form-control" id="email" name="email" />
                                    </div>
                                    <div class="mb-4">
                                        <label for="file" class="form-label">File</label>
                                        <input type="file" onChange={handleChange} class="form-control" id="file" name="file" />
                                    </div>
                                   
                                    <div class="d-grid gap-2 col- mx-auto" style={{ width: "18rem" }}>
                                        <button class="btn btn-primary" type="submit">Login</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form