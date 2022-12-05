import React from "react";
import { Button } from "../Button/Button";

import {
    Container,
    Row,
    Column,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    UserPicture,
    Input
} from './styles'

const Header = ({autenticado}) =>{
    return(
        <Wrapper>
            <Container>
                <Row>
                    {/* <img src={} alt="Logo "> */}
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/Italo-Alan"/>
                    ) : (
                        <>               
                        <MenuRight href="#">Home</MenuRight >
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}