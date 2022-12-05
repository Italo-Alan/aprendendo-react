import React from 'react';
import {FiThumbsUp} from 'react-icons/fi'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/Italo-Alan"/>
                    <div>
                        <h4>Italo Alan</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de aprendizado de Reacr</h4>
                    <p>Projeto feito o curso de html no Bootcamp Dio do Global Avenade... <strong>Saiba mais</strong></p>
                </PostInfo>
                    <HasInfo>
                        <h4>Projeto para curso de aprendizado de Reacr</h4>
                        <p>
                            <FiThumbsUp /> 12
                        </p>
                    </HasInfo>
            </Content>
    </CardContainer>
  )
}

export {Card}
