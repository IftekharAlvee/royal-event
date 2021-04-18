import { Container } from '@material-ui/core';
import React from 'react';
import { CardColumns, CardDeck, CardGroup } from 'react-bootstrap';
import memory1 from '../../../images/memory1.jpg'
import memory2 from '../../../images/memory2.jpg'
import memory3 from '../../../images/memory3.jpg'
import memory4 from '../../../images/memory4.jpg'
import memory5 from '../../../images/memory5.jpg'
import memory6 from '../../../images/memory6.jpg'
import MemoryCard from './MemoryCard';

const Memory = () => {

    const memoryData = [
        { 
            imageUrl: memory1
        },
        { 
            imageUrl: memory2
        },
        { 
            imageUrl: memory3
        },
        { 
            imageUrl: memory4
        },
        { 
            imageUrl: memory5
        },
        { 
            imageUrl: memory6
        },
    ]

    return (
        <Container>
            <div class="text-center py-5 my-5">
                <h1>Our Memory</h1>
            </div>
            <CardColumns>
            {
                memoryData?.map(image=><MemoryCard image={image}></MemoryCard>)
            }
        </CardColumns>
        </Container>
    );
};

export default Memory;