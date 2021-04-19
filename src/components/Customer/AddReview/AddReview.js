import React, { useState } from 'react';
import { useJwt } from "react-jwt";
import { useEffect } from 'react/cjs/react.development';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { decodedToken, isExpired } = useJwt(sessionStorage.getItem('token'));
    const [profilePicture, setProfilePicture] = useState(null)
    useEffect(() => {
        if (decodedToken) {
            setProfilePicture(decodedToken.picture)
        }
    }, [decodedToken])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newReview = {
            quote: data.quote,
            name: data.name,
            image: profilePicture,
        }
        
        fetch('https://limitless-caverns-60181.herokuapp.com/addReview',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    return (
        <section className="row">
            <div className="col-12 col-md-6 ms-md-5 mt-3">
                <h5 className="fontColor">Leave a review 💬</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-3" type="text" {...register("name", { required: true })} placeholder="Your Name" />
                    {errors.name && <small>This field is required</small>}
                    <textarea cols="30" rows="10" className="form-control" type="text" {...register("quote", { required: true })} placeholder="Comment" />
                    {errors.quote && <small>This field is required</small>}
                    <div className="text-center mt-3">
                        <input className="customBtn" type="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddReview;