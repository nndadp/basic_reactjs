import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'

export default function Register() {
  return (
    <form action="">
    <InputForm label="Name" name="name" type="text" placeholder="Masukkan nama" />
    <InputForm label="Email" name="email" type="email" placeholder="Masukkan email" />
    <InputForm label="password" name="password" type="password" placeholder="Masukkan password" />
    <Button color="bg-blue-200">Register</Button>
</form>
  )
}
