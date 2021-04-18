import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Review = () => {

    const [value, setValue] = useState(5);
    const [name,setName] = useState("");
    const [review, setReview] = useState("")
    // const [reviewPush, setReviewPush] = useState({});
    const handleName = (event) => {
        const nameInfo = event;
        setName(nameInfo);
        console.log(nameInfo);
    }

    const handleReview = (event) => {
        const reviewInfo = event;
        setReview(reviewInfo);
        console.log(reviewInfo);
    }

    const handleSubmit = () => {
        const reviewData = {
            name: name,
            value: value,
            review: review
        }
        // setReviewPush(reviewData);
        console.log(reviewData);

        const url = "https://stark-mesa-31837.herokuapp.com/addReview";
      fetch(url,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(reviewData)

      })
      .then(response => {
          console.log(response);
          alert("Review added successfully")
        })

    }

    console.log(value);


    return (
        <Form>
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control onBlur={(event)=>handleName(event.target.value)} type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend" required>Please give your rating</Typography>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
            </Box>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write your review</Form.Label>
                <Form.Control onBlur={(event)=>handleReview(event.target.value)} as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
};

export default Review;