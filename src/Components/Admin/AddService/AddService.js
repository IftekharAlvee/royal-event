import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from "axios";


const AddService = () => {


    // const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState([]);
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const handleTitle = (event) => {
      const titleInfo = event;
       setTitle(titleInfo);
      
  };

  
  const handleDescription = (event) => {
      const descriptionInfo = event;
    setDescription(descriptionInfo)
    
};



const handleSubmit = () => {
    
    const eventData = {
                  title: title,
                  imageURL: imageURL,
                  description: description
              };
    console.log(eventData);
    const url = "http://localhost:5000/addServices";
      fetch(url,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(eventData)

      })
      .then(response => {
          console.log(response);
          alert("Service added successfully")
        })

    };



//   const onSubmit = (data) => {
//       const eventData = {
//           name: data.name,
//           imageURL: imageURL,
//           price: data.price
//       }
//       const url = "http://localhost:5000/addServices";
//       fetch(url,{
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify(eventData)

//       })
//       .then(response => {
//           console.log(response);
//           alert("Image added successfully")
//         })

//       console.log(data);
//     };

  const handleImageUpload = event => {
      console.log(event.target.files[0]);
      const eventData = new FormData();
      eventData.set('key', '75c6082fcb864884103abf85530dab32');
      eventData.append('image', event.target.files[0]);

      axios.post('https://api.imgbb.com/1/upload',eventData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  


// 
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Service Title</Form.Label>
                    <Form.Control onBlur={(event)=> handleTitle(event.target.value)} type="text" placeholder="Enter Titele" />
                </Form.Group>

                <Form.Group>
                    <Form.File onChange={handleImageUpload} id="exampleFormControlFile1" label="Service image"  />
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Service Description</Form.Label>
                    <Form.Control onBlur={(event)=> handleDescription(event.target.value)} as="textarea" rows={3} />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddService;