import { Link } from 'react-router-dom'; 
import {useNavigate} from 'react-router-dom'; 
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header';
import BannerImage from '../../assets/el-camino-breaking-bad-2560x1440-aaron-paul-4k-22150.png'
import {
    Container,
    Title,
    TitleLight,
    TextContent
} from './styles.js'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (
        <>
            <Header/>
            <Container>
                <div>
                    <Title>
                        <TitleLight>
                            Implemente
                        <br/>
                        </TitleLight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
                </div>
                <div>
                    <img src={BannerImage} alt="Imagem Principal" width="100%"/>
                </div>
            </Container>
        </>
    )
}

export {Home}