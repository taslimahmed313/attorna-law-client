import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './AddService.css';

const AddService = () => {
  useTitle("Add Service")

    const handlePostSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const title = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        // console.log(photo, title, price, description); 

        const addService = {
          img: photo,
          serviceName: title,
          price,
          description,
          date : Date()
        };

        fetch("http://localhost:5000/services", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addService),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }


    return (
      <div>
        <p className="text-2xl my-3 font-serif font-semibold">
          Add Your Service Here
        </p>
        <div className=" bg-teal-900 w-1/2 mx-auto mb-10 p-5">
          <form onSubmit={handlePostSubmit} className="add-service">
            <label htmlFor="photo">Provide Service Image</label>
            <br />
            <input type="text" name="photo" id="photo" required/>
            <br />
            <label htmlFor="title">Service Title</label>
            <br />
            <input type="text" name="name" id="title" required/>
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input type="text" name="price" id="price" required/>
            <br />
            <label htmlFor="description">Add Your Service Description</label>
            <br />
            <textarea
              className="w-full rounded-lg"
              name="description"
              id="description"
              cols="30"
              rows="5"
              required
            ></textarea>{" "}
            <div className="text-center">
              <button className="btn my-3 w-full" type="submit">
                Add To Service
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddService;