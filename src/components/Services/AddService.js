import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/add-service", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
          reset()
      };
    return (
        <Container>
            
            <div className="my-3">
                <h2>
                     Add A New Service here
                </h2>           
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="my-1 py-2 w-100" {...register("name")} placeholder="Name" />
                <br />
                <input className="my-1 py-2 w-100" type="number" {...register("price")}  placeholder="Price"/>
                <br />
                <textarea className="my-1 py-2 w-100" type="text" {...register("description")}  placeholder="description"/>
                <br />
                <input className="my-1 py-2 w-100" type="url" {...register("image")}  placeholder="image"/>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <h6 className="me-2">Select Color : </h6>
                    <select className="my-1 py-2 w-25" {...register("colour")}>
                    <option value="default">default</option>
                    <option value="green">green</option>
                    <option value="cyan">cyan</option>
                    <option value="red">red</option>
                </select>
                </div>
                <br />
                <input className="my-1 py-2 w-100 custom-btnn" type="submit" />
            </form>

            <div className="my-5"></div>
        </Container>
    );
};

export default AddService;