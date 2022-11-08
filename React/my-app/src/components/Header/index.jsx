import React from 'react';
import logo from '../../assets/logo.png';
import {Button} from '../Button';

import { BuscarInputContainer,
         Container,
         Input,
         Menu,
         MenuRight,
         Row,
         UserPicture,
         Wrapper } from './styles';

const Header = ({autenticado}) => {
      return (
            <Wrapper>
                  <Container>
                        <Row>
                              <img src={logo} alt='Logo da Dio'/>
                              {autenticado ? (<>
                                                                  <BuscarInputContainer>
                                                                  <Input placeholder='Buscar...'/>
                                                                  </BuscarInputContainer>
                                                                  <Menu>Live Code</Menu>
                                                                  <Menu>Global</Menu>
                                                                  </>
                                                ) : null}      
                        </Row>
                        <Row>
                              {autenticado ? (
                                    <UserPicture src='https://images5.alphacoders.com/689/689329.jpg' />
                              ) : (
                                    <>
                                    <MenuRight href="#">Home</MenuRight>
                                    <Button title="Entrar"/>
                                    <Button title="Cadastrar"/>
                                    </>
                              )}

                        </Row>
                  </Container>
            </Wrapper>
      )
}
export {Header}