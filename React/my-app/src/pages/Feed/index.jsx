import { Header } from '../../components/Header';
import {Card} from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import {Container, Column, Title, TitleHighlight} from './styles'

const Feed = () => {
      return (<>
      <Header autenticado = {true}/>
      <Container>
            <Column flex={3}>
                  <Title>Feed</Title>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
            </Column>
            <Column flex={1}>
                  <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                  <UserInfo percentual={77} nome='Heitor Baraldi' image='https://images5.alphacoders.com/689/689329.jpg'/>
                  <UserInfo percentual={19} nome='Heitor Baraldi' image='https://images5.alphacoders.com/689/689329.jpg'/>
                  <UserInfo percentual={43} nome='Heitor Baraldi' image='https://images5.alphacoders.com/689/689329.jpg'/>
                  <UserInfo percentual={96} nome='Heitor Baraldi' image='https://images5.alphacoders.com/689/689329.jpg'/>
                  <UserInfo percentual={63} nome='Heitor Baraldi' image='https://images5.alphacoders.com/689/689329.jpg'/>
                  <UserInfo percentual={11} nome='Heitor Baraldi' image='https://images5.alphacoders.com/689/689329.jpg'/>
            </Column>
      </Container>
      </>

      )
}

export {Feed}