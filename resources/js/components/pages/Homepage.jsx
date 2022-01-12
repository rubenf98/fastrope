import React from 'react'
import styled, { keyframes } from "styled-components";
import ReactPlayer from 'react-player';
import Reservation from './Home/Reservation';
import About from './Home/About';
import { maxWidth } from '../../helper';
import { Col, Row, Card } from 'antd';
import Activities from './Home/Activities';
import Feedback from './Home/Feedback';


const jump = keyframes`
  0% {
    bottom: 20px;
  }

  15% {
    bottom: 30px;
  }
  
  30% {
    bottom: 20px;
  }
`;

const Header = styled.div`
    background: url("/header_wallpaper.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    height: ${props => props.height};
    overflow-y: hidden;
`;

const Overlay = styled.div`
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    background: #00000071;
`;


const HeaderContent = styled.div`
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    width: 90vw;
    height: 40vh;

    h1, h2 {
        color: white;
        margin: auto;
        display: block;
        text-align: center;
    }
    h1 {
        font-size: 6vw;
        font-weight: bold;
        //font-family: 'Audiowide', cursive;
    }
    h2 {
        font-size: 1.3em;
        font-family: 'Anonymous Pro', monospace;
        text-transform: uppercase;
    }

    div { 
        width: 60vw;
        height: 1px;
        margin: 20px auto;
        display: block;
        position: relative;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 15%;
            right: 15%;
            width: 70%;
            height: 2px;
            background-image: linear-gradient(to right, transparent, #8f8f8f, transparent);
        }

    }
`;

const Player = styled(ReactPlayer)`
    width: 100% !important;

    video {
        height: auto !important ;
    }
`;

const ScrollAction = styled.img`
    width: 60px;
    padding: 10px;
    border: 1px solid white;    
    position: absolute;
    bottom: 20px;
    border-radius: 50%;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
    animation: ${jump} 3s ease-in-out infinite;
`;

const Section = styled.div`
    max-width: ${maxWidth};
    margin: 100px auto;
    display: block;
`;

const Title = styled.div`
    width: 100%;
    text-align: center;
    margin: 150px auto;
    position: relative;

    h1 {
        font-size: 3em;
        font-weight: bold;
    }

    div {
        z-index: -1;
        font-size: 10em;
        font-weight: bold;
        color: #00000011;
        text-transform: uppercase;
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }   
`;



class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenHeight: "700px",
        }
    }

    updateDimensions = () => {
        this.setState({
            screenHeight: document.body.clientHeight + "px",

        })
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    render() {
        const { screenHeight } = this.state;
        return (
            <div>
                <Header height={screenHeight}>
                    <Player muted config={{ file: { attributes: { disablePictureInPicture: true } } }} loop url='/video.mp4' playing controls={false} />
                    <Overlay />
                    <HeaderContent height={screenHeight / 2}>
                        <h1>Fast Rope Madeira</h1>
                        <div />
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    </HeaderContent>
                    <ScrollAction src="/icon/arrow_down.svg" alt="scroll" />
                </Header>

                <Reservation />
                <Section>
                    <About />
                </Section>

                <Title>
                    <h1>Discover & Explore Madeira with Us</h1>
                    <div>Activities</div>
                </Title>

                <Activities />

                <Title>
                    <h1>What do People Say About Us?</h1>
                    <div>Experience</div>
                </Title>
                <Section>
                    <Feedback />
                </Section>
            </div>
        )
    }
}

export default Homepage
