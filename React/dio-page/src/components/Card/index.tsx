import { FiThumbsUp } from 'react-icons/fi'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://w0.peakpx.com/wallpaper/851/640/HD-wallpaper-link-neon-icon-blue-background-neon-symbols-link-neon-icons-link-sign-computer-signs-link-icon-computer-icons.jpg"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"/>
         <div>
          <h4>Carlos Baraldi</h4>
          <p>Há 8 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
