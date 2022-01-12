import React from 'react'
import styled from "styled-components";
import { Col, Row, Card } from 'antd';
import { dimensions } from '../../../helper';

const Container = styled(Row)`
    //
`;

const Star = styled.div`
    display: inline-block;
    width: 15px;
    height: 15px;
    background: #288105;
    border-radius: 50%;
    margin: 5px;
`;

const ItemContainer = styled.div`
    width: 25%;
    padding: 15px 10px;
    border: 1px solid #dbdbdb;
    display: flex;
    flex-direction: column;

    @media (max-width: ${dimensions.md}) {
        width: 50%;
    }

    &:first-child{
        border-left: none;
    }

    &:last-child{
        border-right: none;
    }

    p{
        font-size: 1.4em;
        color: black;
        flex-grow: 1;
    }

    h3 {
        font-size: 1.3em;
        margin: 0px;
    }

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .user{
 
    }
    
`;

const Item = ({ stars, comment, user, avatar }) => (
    <ItemContainer>
        <div>
            {[...Array(stars)].map(() =>
                <Star></Star>
            )}
        </div>
        <p>"{comment}"</p>

        <Row className="user" type="flex" align="middle">
            <img src={"/feedback/" + avatar + ".webp"} alt="avatar" />
            <h3>{user}</h3>
        </Row>

    </ItemContainer>
)

export default function Feedback() {
    return (
        <Container type="flex" justify="space-between">
            <Item
                stars={5}
                comment="Foi um grande desafio, mas bastante divertido! Pessoal muito atencioso. Estou ansiosa para poder fazer novamente, e conhecer novos lugares!"
                user="Mónica Luís"
                avatar="monica"
            />

            <Item
                stars={5}
                comment="Equipa de profissionais muito prestativa, desporto imenso saudável e paisagens extremamente bonitas!"
                user="Gonçalo Pinto"
                avatar="goncalo"
            />

            <Item
                stars={5}
                comment="Equipa de profissionais muito prestável e atenciosa. Foi um dia muito bem passado! Mal posso esperar por repetir e conhecer mais sítios tão bonitos na ilha."
                user="Maria Nunes"
                avatar="maria"
            />

            <Item
                stars={5}
                comment="Excelente dia, excelentes Guias, atividade fantástica...desde o transporte, a explicação inicial, a atenção a todos nós. Recomendo vivamente."
                user="Mécia Andrade"
                avatar="mecia"
            />
        </Container>
    )
}