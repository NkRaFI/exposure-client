import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [btnEnabled, setBtnEnabled] = useState(true)
    const [imgUrl, setImgUrl] = useState(null)
    const handleUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '8dce128515bf5e69ae560e543b7c1c53');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
                setBtnEnabled(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const onSubmit = data => {
        const newService = {
            name: data.name,
            price: data.price,
            image: imgUrl,
            description: data.description,
        };

        fetch('http://localhost:5000/addService', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("book added successfully, Go to the home page to see the book")
            }
        })
    };


    return (
        <div>
            <div className="addService my-3 mx-3">
                <h4 className="my-2">Add Service</h4>
                <form className="row justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12 col-md-6">
                        <label htmlFor="name">Service name</label>
                        <input className="form-control mb-3" {...register("name")} placeholder="Service name" required/>

                        <label htmlFor="price">Add price-- <small>tk**</small></label>
                        <input type="number" className="form-control mb-3" {...register("price")} placeholder="Service price" required/>
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control mb-3" {...register("description")} placeholder="description" required/>

                        <label htmlFor="serviceImg">Add Thumbnail</label>
                        <br />
                        <input type="file" onChange={handleUpload} placeholder="Add book cover photo" required />
                    </div>

                    <input className="btn btn-danger my-4" type="submit" disabled={btnEnabled} />
                </form>
            </div>
        </div>
    );
};

export default AddService;