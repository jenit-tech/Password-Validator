// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const CardContainer = styled.div`
  background-color: #383a4e;
  padding: 50px 10px 50px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  max-width: 350px;
`

export const Heading = styled.h1`
  font-weight: 600;
  margin-bottom: 20px;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  margin-bottom: 25px;
  font-family: 'Roboto';
`

export const PasswordContainer = styled.input`
  outline: none;
  margin: 0px 25px 25px 25px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding: 10px;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 15px;
`
