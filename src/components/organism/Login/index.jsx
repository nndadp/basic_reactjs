import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Login() {
  return (
    <form action="">
        <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
        <InputForm label="password" name="password" type="password" placeholder="Masukkan password" />
        <Button color="bg-blue-200">Login</Button>
    </form>
  )
}
