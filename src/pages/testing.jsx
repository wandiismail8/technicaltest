// import React from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const Testing = () => {
//   const navigate = useNavigate()
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: async (values, formikHelpers) => {
//       // console.log(values);
//       try {
//         const response = await axios.post("http://localhost:3002/login", values);
//         // console.log(response.data.access_token)
//         if(response?.data?.access_token){
//           localStorage.setItem("access_token", response.data.access_token)
//         }
//         navigate('/')

//       } catch (err) {
//         console.log('test');
//         console.log(err);
//       }
//     },
//   });
//   // console.log(formik.values)
//   return (
//     <div className="w-full bg-gray-300">
//       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//         <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
//           <h1 className="text-3xl font-semibold text-center text-gray-700 underline">
//             Counter Character
//           </h1>
//           <form className="mt-6" onSubmit={formik.handleSubmit}>
//             <div className="mb-2">
//               <input
//                 type="input"
//                 name="input"
//                 placeholder="input@mail.com"
//                 onChange={formik.handleChange}
//                 value={formik.values.input}
//                 className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
//               />
//             </div>
//             <div className="mt-3">
//               <button
//                 type="submit"
//                 className="px-12  py-2 text-center  tracking-wide  text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
//               >
//                 Count
//               </button>
//             </div>
//             <div className="mt-8">
//               <label
//                 for="password"
//                 className="block text-xl text-center mb-4 font-semibold text-gray-800"
//               >
//                 Result
//               </label>


//               <div className="text-center font-extrabold p-6 text-6xl  text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
//             <pre>{JSON.stringify(result)}</pre>
//           </div>

              
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testing;
