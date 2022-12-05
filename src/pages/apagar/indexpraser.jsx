import { Link } from 'react-router-dom'; 
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import BannerImage from '../../assets/el-camino-breaking-bad-2560x1440-aaron-paul-4k-22150.png'
import {
    Container,
    Title,
    TitleLight,
    TextContent
} from './styles.js'

const Feed = () => {
    return (
        <>
            <Header/>
            <Container>
                <Card/>
            </Container>
        </>
    )
}

export {Feed}