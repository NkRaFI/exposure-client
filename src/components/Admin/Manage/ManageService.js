import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://limitless-caverns-60181.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (serviceId) => {
        fetch(`https://limitless-caverns-60181.herokuapp.com/deleteService/${serviceId}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            
            alert("service deleted successfully")
            if(result){
                fetch('https://limitless-caverns-60181.herokuapp.com/services')
                .then(res => res.json())
                .then(data => setServices(data))
            }
            
        })
    }


    return (
        <div className="table-responsive mx-auto mx-md-3">
            <table className="table table-striped primaryColor rounded">
                <thead>
                    <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col">Service Price</th>
                        <th scope="col">Delete Service</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services?.map((service) =>
                            <tr key={service._id}>
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                                <td>
                                    <div className="dropdown btn-group dropstart">
                                        <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Delete
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li onClick={()=>handleDelete(service._id)} className="dropdown-item text-danger">Delete</li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {
                (services?.length === 0) &&
                <div className="manageSpinner">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            }

        </div>
    );
};

export default ManageService;