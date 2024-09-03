// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  Paragraph,
  PasswordContainer,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showErrorMsg = password.length < 8

  const onChangePasswordInput = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph> Check how strong and secure is your password</Paragraph>
        <PasswordContainer
          onChange={onChangePasswordInput}
          type="password"
          value={password}
        />
        {showErrorMsg && (
          <ErrorMsg> Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
