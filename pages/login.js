import React from "react";
// next
import Link from "next/link";
// import
import AuthLayout from "../components/layout/authLayout";
function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
Login.Layout = AuthLayout;
export default Login;
