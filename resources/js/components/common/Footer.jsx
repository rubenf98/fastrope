import { Row } from 'antd';
import React from 'react'
import styled from "styled-components";
import moment from "moment";
import { dimensions } from '../../helper';

const Container = styled.div`
    max-width: 100%;
    height: 600px;
    background: url("/footer.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 3;
    overflow: hidden;

    @media (max-width: ${dimensions.md}) {
        height: 400px;
    }
    @media (max-width: ${dimensions.sm}) {
        height: 300px;
    }
`;

const BackgroundText = styled.div`
    z-index: 2;
    font-size: 17vw;
    font-weight: bold;
    color: #ffffff22;
    text-transform: uppercase;
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


const Overlay = styled.div`
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    background: #0000007b;
    z-index: 1;
`;

const Content = styled.div`
    z-index: 3;
    position: absolute;
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: white;
        text-align: center;
        font-size: 6em;
        margin: 0px;

        @media (max-width: ${dimensions.md}) {
            font-size: 3.5em;
        }
        @media (max-width: ${dimensions.sm}) {
            font-size: 2.5em;
        }
    }
    p{
        margin: 0px;
        margin-bottom: 20px;
        color: white;
        text-align: center;
        font-size: 1.3em;

        @media (max-width: ${dimensions.md}) {
            font-size: 1.2em;
        }
        @media (max-width: ${dimensions.sm}) {
            font-size: .8em;
        }
    }
`;

const Logo = styled.a`
    width: 18px;
    margin: 0 10px;

    img{
        width: 100%;
    }
`;


function Footer() {
    return (
        <Container>
            <Overlay />
            <BackgroundText>FASTROPE</BackgroundText>
            <Content>
                <div>
                    <h1>Fast Rope Madeira</h1>
                    <p>Copyright ??{moment().year()} All rights reserved | R??ben Freitas</p>
                    <Row type="flex" justify="center" align="middle">
                        <Logo href="https://termly.io/resources/articles/copyright-examples/" target="_blank" >
                            <img src="/icon/company/facebook.png" alt="facebook" />
                        </Logo>
                        <Logo href="https://termly.io/resources/articles/copyright-examples/" target="_blank" >
                            <img src="/icon/company/whatsapp.svg" alt="whatsapp" />
                        </Logo>
                        <Logo href="https://www.instagram.com/fastrope.madeira/" target="_blank" >
                            <img src="/icon/company/instagram.svg" alt="instagram" />
                        </Logo>
                    </Row>
                </div>

            </Content>
        </Container>
    )
}

export default Footer
