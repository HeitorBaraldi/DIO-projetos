import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Carlos Baraldi" image="https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg" percentual={25}/>
                <UserInfo nome="Carlos Baraldi" image="https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg" percentual={65}/>
                <UserInfo nome="Carlos Baraldi" image="https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg" percentual={45}/>
                <UserInfo nome="Carlos Baraldi" image="https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
