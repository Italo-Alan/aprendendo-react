import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MdEmail, MdLock } from "react-icons/md";

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import {api} from "../../services/api"
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

const schema = yup.object({
    email: yup.string().email('Email não é válido.').required('Campo obrigatório.'),
    password: yup.string().min(6, 'O mínimo de caracteres é 6.').required('Campo obrigatório.'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors} } = useForm({
        resolver: yupResolver(schema),
        
        //valida o usuário de que modo
        mode: 'onChange'
    });

    const onSubmit = async data =>{
        try{
            const { data } = await api.get(`users?email=${FormData.email}&senha=${FormData.password}`)
            if(data.length === 1){
                navigate('/feed');
            }else{
                alert('Houve um erro, tente novamente !');    
            }
        }catch{
            alert('Houve um erro, tente novamente !');
        }
    }

    const handleClickSignIn = () => {
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                            <Input name="password"  errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title="Entrar" variant="sencodary"  type="submit"/>
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