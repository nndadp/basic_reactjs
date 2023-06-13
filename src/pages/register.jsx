import React from 'react'
import AuthLayout from '../components/template/AuthLayout';
import Register from '../components/organism/Register';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <>
   <div>
   <AuthLayout title="Register" desc="silahkan di isi">
        <Register/>
        <p className="text-sm mt-4 text-center">
            have account?
            {/* <a className="font-bold text-blue-500" href="/register">
                Register
            </a> */}
            {/* cara menggunakan routing pake link pada buat pindah antar komponen/halaman */}
            <Link className="font-bold text-blue-500" to="/login">
                Login
            </Link>
        </p>
    </AuthLayout>
   </div>
    </>
  );
}
