import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import styled from "styled-components";
import { withRouter } from "react-router";

const Container = styled.div`
    max-width: 3840px;
    min-height: 100%;
    margin: auto;
    display: block;
`;

class Layout extends Component {
    render() {
        return (
            <Container>
                <Navbar />

                <div>{this.props.children}</div>

                <Footer />
            </Container>
        );
    }
}

export default withRouter(Layout);
