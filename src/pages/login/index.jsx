import {useNavigate} from 'react-router-dom'
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MdEmail, MdLock } from "react-icons/md";
import {
    Column,
    Container,
    CriarText,
    EsqueciText,
    Row,
    SubTitleLogin,
    Title,
    TitleLogin,
    Wrapper
} from './styles.js'

const Login = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }


    return (
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você bla bla bla
                        o seu futuro global agora!
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Entrar" variant="sencodary" onClick={handleClickSignIn} type="button"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export {Login}