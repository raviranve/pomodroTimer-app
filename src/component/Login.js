import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  let [localdata,setLocalData]  = useState("")
  useEffect(() => {
    console.log(localStorage.getItem("email_verified"))
    if (localStorage.getItem('email_verified')) {
      navigate('/polodroTimer');
    }
  }, [localdata]);

  return (
    <div>
      <GoogleOAuthProvider clientId="704933679961-mnmej99d1b5r81849pu5e0vmmifpft47.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            let data = jwtDecode(credentialResponse.credential);
           let c =  localStorage.setItem('email_verified', data.email);
            setLocalData(c)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;