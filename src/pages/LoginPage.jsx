import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'

const LoginPage = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post("http://localhost:3002/login", values);
        // console.log(response.data.access_token)
        if(response?.data?.access_token){
          localStorage.setItem("access_token", response.data.access_token)
        }
        toast('Kamu berhasil login!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        navigate('/')

      } catch (err) {
        // console.log('test');
        // console.log(err) 
        // console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });




      }
    },
  });
  // console.log(formik.values)
  return (
    <div className="w-full bg-gray-300">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={formik.handleSubmit}>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@mail.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {/* <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a> */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
