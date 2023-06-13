import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-[url('../../public/images/bg.jpg')] object-center bg-cover">
    <AuthLayout title="Login" desc="silahkan di isi" type="login">
        <Login/>
        <p className="text-sm mt-4 text-center">
            Dont have an account?
            {/* <a className="font-bold text-blue-500" href="/register">
                Register
            </a> */}
            {/* cara menggunakan routing pake link pada buat pindah antar komponen/halaman */}
            <Link className="font-bold text-blue-500" to="/register">
                Register
            </Link>
        </p>
    </AuthLayout>
    </div>
    </>
  );
}
