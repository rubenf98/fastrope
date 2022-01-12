import { Row, Button } from 'antd';
import React from 'react'
import { dimensions } from '../../../helper';
import styled from "styled-components";

const Section = styled.div`
    width: ${props => props.image ? "36%" : "32%"};
    padding: ${props => props.image ? "0px" : "30px"};

    p {
        font-size: 1.6em;
    }

    img {
        width: 100%;
        margin: auto;
            display: block;
    }

    @media (max-width: ${dimensions.lg}) {
        width: ${props => props.items ? "100%" : "50%"};
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;

        img {
            width: 60%;
            
        }
    }
`;


const Container = styled(Row)`
    width: 100%;
    margin: auto;

    h1 {
        font-size: 3.6em;
        font-weight: bold;
        margin-bottom: 20px;
        line-height: 50px;
    }

    #a {
        order:1;
    }
    #b {
        order:2;
    }
    #c {
        order:3;
    }

    @media (max-width: ${dimensions.lg}) {
        #a {
            order:3;
        }
        #b {
            order:1;
        }
        #c {
            order:2;
        }
    }
`;

const ViewMore = styled(Button)`
   font-size: 1.6em;
   font-weight: bold;
   height: 60px;
`;

const ListItem = styled.div`
    font-size: 1.6em;
    background-image: url("/icon/about-list.svg");
    background-size: 50px 50px;
    margin: 20px 0px;
    background-repeat: no-repeat;
    background-position-y: 50%;
    padding-left: 60px;

    @media (max-width: ${dimensions.lg}) {
        width: 50%;
    }
`;




function About() {
    return (
        <Container type="flex" justify="space-between" gutter={16} align="middle">
            <Section id="a" items>
                <Row type="flex" >
                    <ListItem>
                        Lorem ipsum dolor sit, amet consec adipisicing elit.
                    </ListItem>
                    <ListItem>Lorem ipsum dolor sit, amet consec adipisicing elit.</ListItem>
                    <ListItem>Lorem ipsum dolor sit, amet consec adipisicing elit.</ListItem>
                    <ListItem>Lorem ipsum dolor sit, amet consec adipisicing elit.</ListItem>
                </Row>

            </Section>
            <Section image id="b">
                <img src="/about.jpg" alt="" />
            </Section>

            <Section id="c">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit natus dolores tempora mollitia illo voluptatibus nisi culpa ex aspernatur, consequuntur officia consectetur veniam quaerat illum neque odio. Amet, labore veritatis?</p>

                <ViewMore type="primary">View More</ViewMore>
            </Section>
        </Container>
    )
}

export default About
