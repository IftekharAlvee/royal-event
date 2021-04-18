import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const ReviewCard = (props) => {

    const {name, value, review } = props.review;
    // const [value, setValue] = React.useState(2);

    return (
        <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
            <p>
                {review}
            </p>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Review in rating</Typography>
                <Rating name="read-only" value={value} readOnly />
            </Box>
            <footer className="blockquote-footer">
                <small className="text-muted">
                 <cite title="Source Title">{name}</cite>
                </small>
            </footer>
            </blockquote>
        </Card>
    );
};

export default ReviewCard;