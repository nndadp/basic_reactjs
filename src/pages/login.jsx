import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login';
import { Link } from 'react-router-dom';
import Navbar from '../components/molecules/Navbar';
import Footer from '../components/molecules/Footer';

export default function LoginPage() {
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center object-center bg-cover">
      <img className="object-none object-left w-70 h-80" src="'../../public/images/bg3.jpg" />
    <AuthLayout title="Login" desc="silahkan di isi" type="login">
        <Login/>
        <p className="text-sm mt-4 text-center">
            Dont have an account?
            {/* <a className="font-bold text-blue-500" href="/register">
                Register
            </a> */}
            {/* cara menggunakan routing pake link pada buat pindah antar komponen/halaman */}
            <Link className="font-bold text-pink-500" to="/register">
                Register
            </Link>
        </p>
    </AuthLayout>
    <Footer/>
    </div>
    </>
  );
}
