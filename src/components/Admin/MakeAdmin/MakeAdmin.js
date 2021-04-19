import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/makeAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: data.email})
        })
        .then(res => res.json())
        .then(data => {
            alert('A new Admin Successfully added')
        })
    };
    return (
        <div className="col-12 col-md-6 ms-md-3">
            <h4 className="fontColor">Add an Admin</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                <input className="form-control mb-3" {...register("email", { required: true })} placeholder="Email"/>
                {errors.email && <small className="text-danger mb-2">Please enter a email</small>} <br/>

                <input className="customBtn" type="submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;