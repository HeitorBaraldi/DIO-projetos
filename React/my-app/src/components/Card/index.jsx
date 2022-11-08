import React from 'react'
import {CardContainer, 
      Content,
      HasInfo,
      ImageBackground,
      PostInfo,
      UserInfo,
      UserPicture} from './styles';
import {FiThumbsUp} from 'react-icons/fi';


const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://images5.alphacoders.com/689/689329.jpg'/>
      <Content>
            <UserInfo>
            <UserPicture src='https://images5.alphacoders.com/689/689329.jpg'/>
                  <div>
                        <h4>Carlos Baraldi</h4>
                        <p>Há 8 minutos</p>
                  </div>
            </UserInfo>
            <PostInfo>
                  <h4>Projeto para curso de HTML e CSS</h4>
                  <p>Projeto feito com o curso de css no bootcamp dio da Orange Tech...<strong>Saiba mais</strong></p>
            </PostInfo>
            <HasInfo>
                  <h4>#HTML #CSS #Javascript</h4>
                  <p>
                        <FiThumbsUp /> 10
                  </p>
            </HasInfo>
      </Content>
    </CardContainer>
  )
}

export {Card}