import {
    Row, Form, Select,
    DatePicker,
    Button
} from 'antd';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 200px;
    padding: 32px;
    background: #14141e;
`;

const Title = styled.h1`
    color: white;
    text-transform: capitalize;
    text-align: center;
    margin: auto 20px;
`;

const Divider = styled.div`
    background: white;
    height: 2px;
    width: 20%;
`;

const FormItem = styled(Form.Item)`
    width: 27%;
    margin: auto;
`;


const FormContainer = styled(Row)`
    padding: 30px;
    width: 60%;
    margin: auto;
`;

const Submit = styled(Button)`
    border-radius: 50%;
    height: 38px;
    width: 38px;
    padding: 0px;

    img {
        width: 18px;
        display: block;
        margin: auto;
    }
`;

function Reservation() {
    return (
        <Container>
            <Row type="flex" justify="center" align="middle">
                <Divider />
                <Title>Make your reservation</Title>
                <Divider />
            </Row>
            <Form>
                <FormContainer type="flex" justify="space-around" align="middle">
                    <FormItem>
                        <Select placeholder="Location" size="large">
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Select placeholder="Activity" size="large">
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <DatePicker placeholder="Date" size="large" style={{ width: "100%" }} />
                    </FormItem>

                    <Submit type="primary">
                        <img src="/icon/arrow_right.svg" alt="submit" />
                    </Submit>

                </FormContainer>
            </Form>
        </Container>
    )
}

export default Reservation
