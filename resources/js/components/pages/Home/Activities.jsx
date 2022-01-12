import { Col, Row } from 'antd';
import React from 'react'
import styled from "styled-components";
import Carousel from 'react-multi-carousel';
import { getCarouselBreakpoints, maxWidth } from "../../../helper";

const Container = styled.div`
    width: 100%;
    margin: auto;

    h3 {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.2em;
    }
`;

const Section = styled.div`
    max-width: ${maxWidth};
    margin: 100px auto;
    display: block;
`;

const Activity = styled(Row)`
    border-radius: 3px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    margin-bottom: 50px;

    .image {
        background: ${props => "url(" + props.background + ")"};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: block;
        margin: auto;    
        min-height: 300px;
    }

    h1, p {
        color: white;
    }

    h1{
        font-weight: bold;
        font-size: 3em;
    }

    p{
        font-size: 1.2em;
    }
        
    .price {    
        text-align: right;
        color: whitesmoke;

        span{
            color: white;
            font-weight: bold;
        }
    }
    
`;

const Texture = styled(Col)`
    background: url("/vintage-wallpaper.png");
`;

const ActivityBackground = styled.div`
    padding: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const CarouselContainer = styled(Carousel)`
    max-height: 600px;
    margin: 50px 0px;

    .image-item {
        padding: 20px 0 20px 20px;
    }

    img {
        width: 100%;
         height: 100%;
    }
`;

const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];

function Activities() {
    return (
        <Container>
            <Section>
                <Activity type="flex" justify="space-around" background="/hiking.JPG">
                    <Col xs={24} md={12}>
                        <div className="image" />
                    </Col>
                    <Texture xs={24} md={12}>
                        <ActivityBackground >
                            <div>
                                <h1>Hiking</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolor doloribus saepe quod veniam! Assumenda, vero ad odit, quidem inventore corporis veniam eaque dignissimos, sint deserunt vitae laudantium expedita excepturi!</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolor doloribus saepe quod veniam! Assumenda, vero ad odit, quidem inventore corporis veniam eaque dignissimos, sint deserunt vitae laudantium expedita excepturi!</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolor doloribus saepe quod veniam! Assumenda, vero ad odit, quidem inventore corporis veniam eaque dignissimos, sint deserunt vitae laudantium expedita excepturi!</p>
                                <p className="price">From <span>40€</span></p>
                            </div>
                        </ActivityBackground>
                    </Texture>
                </Activity>
            </Section>

            <CarouselContainer itemClass="image-item" centerMode infinite swipeable responsive={getCarouselBreakpoints([1, 1, 2, 2, 3])}>
                {images.map(image => {
                    return (
                        <img src={image} alt="" />
                    );
                })}
            </CarouselContainer>

            <Section>
                <Activity type="flex" justify="space-around" background="/cannoying.JPG">
                    <Texture xs={24} md={12}>
                        <ActivityBackground >
                            <div>
                                <h1>Cannoying</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolor doloribus saepe quod veniam! Assumenda, vero ad odit, quidem inventore corporis veniam eaque dignissimos, sint deserunt vitae laudantium expedita excepturi!</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolor doloribus saepe quod veniam! Assumenda, vero ad odit, quidem inventore corporis veniam eaque dignissimos, sint deserunt vitae laudantium expedita excepturi!</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolor doloribus saepe quod veniam! Assumenda, vero ad odit, quidem inventore corporis veniam eaque dignissimos, sint deserunt vitae laudantium expedita excepturi!</p>
                                <p className="price">From <span>40€</span></p>
                            </div>
                        </ActivityBackground>
                    </Texture>
                    <Col xs={24} md={12}>
                        <div className="image" />
                    </Col>
                </Activity>
            </Section>

            <CarouselContainer itemClass="image-item" centerMode infinite swipeable responsive={getCarouselBreakpoints([1, 1, 2, 2, 3])}>
                {images.map(image => {
                    return (
                        <img src={image} alt="" />
                    );
                })}
            </CarouselContainer>
        </Container>
    )
}

export default Activities
