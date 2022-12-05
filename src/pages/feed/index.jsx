import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (
        <>
            <Header autenticado="true"/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight> # RANKING TOP 5 SEMANAL</TitleHighlight>
                    <UserInfo percentual={80} nome="Italo Alan" image="https://avatars.githubusercontent.com/Italo-Alan"/>
                    <UserInfo percentual={90} nome="Isabelle Passos" image="https://avatars.githubusercontent.com/u/12"/>
                    <UserInfo percentual={73} nome="Ana Lucia" image="https://avatars.githubusercontent.com/u/12"/>
                    <UserInfo percentual={100} nome="João Vitor" image="https://avatars.githubusercontent.com/u/13"/>
                </Column>
            </Container>
        </>
    )
}

export {Feed}