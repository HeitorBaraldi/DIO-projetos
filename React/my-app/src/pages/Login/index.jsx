import {MdMail, MdLock} from 'react-icons/md'

import {Button} from '../../components/Button';
import { Header } from '../../components/Header';
import {Input} from '../../components/Input';

import {Column, Container,CriarText,EsqueciText,Row,SubTitleLogin,Title,TitleLogin,Wrapper} from './styles'

const Login = () => {
      return (<>
      <Header />
      <Container>
            <Column>
                  <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                  </Title>
            </Column>
            <Column>
                  <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin> 
                        <form>
                              <Input placeholder='Email' leftIcon={<MdMail />}/>
                              <Input placeholder='Senha' type='password' leftIcon={<MdLock/>}/>
                              <Button title='Entrar' variant='secondary'/>   
                        </form>
                        <Row>
                              <EsqueciText>Esqueci minha senha</EsqueciText>
                              <CriarText>Criar Conta</CriarText>
                        </Row>
                  </Wrapper> 
            </Column>
      </Container>
      </>

      )
}

export {Login}