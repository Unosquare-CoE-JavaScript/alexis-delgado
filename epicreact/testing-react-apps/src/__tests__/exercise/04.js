// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

const buildLoginForm = options => {
  //faker crea información falsa
  const usernameFake = faker.internet.userName()
  const passwordFake = faker.internet.password()

  return {username: usernameFake, password: passwordFake, ...options}
}

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  const handleSubmit = jest.fn()
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)

  // 🐨 get the username and password fields via `getByLabelText`
  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)

  const button = screen.getByRole('button')
  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want
  const {username, password} = buildLoginForm({username: usernameInput})
  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)
  // 🐨 click on the button with the text "Submit"
  userEvent.click(button)
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username,
    password: password,
  })

  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
