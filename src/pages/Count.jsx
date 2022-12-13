import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const Count = () => {
  const [result, setResult] = React.useState(0);
  const formik = useFormik({
    initialValues: {
      input: "",
    },
    onSubmit: async (values, formikHelpers) => {
      const response = await axios.post(
        "http://localhost:3002/counter",
        values
      );
      formikHelpers.resetForm();
      setResult(response.data.result);
      // console.log(response.data);
    },
  });
  // console.log(formik.values)
  return (
    // <div className="w-full bg-gray-300">
    //   <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    //     <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl"></div>
    //     <div className="w-full bg-gray-300">
    //       <form className="mt-6" onSubmit={formik.handleSubmit}>
    //         <div className="mb-2">
    //           <input
    //             id="input"
    //             name="input"
    //             type="text"
    //             placeholder="input"
    //             onChange={formik.handleChange}
    //             value={formik.values.input}
    //             className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
    //           />
    //         </div>
    //         <button type="submit" className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
    //             Count
    //           </button>
    //       </form>

    //       <div className="">
    //         <pre>{JSON.stringify(result)}</pre>
    //       </div>

    //       <div className="w-full rounded-lg shadow-md lg:max-w-sm">
    //         <img
    //           className="object-cover w-full h-48"
    //           src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
    //           alt="image"
    //         />
    //         <div className="p-4">
    //           <h4 className="text-xl font-semibold tracking-tight text-blue-600">
    //             React Tailwind Card with Image
    //           </h4>
    //           <p className="mb-2 leading-normal">
    //             react tailwind css card with image It is a long established fact
    //             that a reader will be distracted by the readable content.
    //           </p>
    //           <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
    //             Read more
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full bg-gray-300">
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 underline">
          Counter Character
        </h1>
        <form className="mt-6" onSubmit={formik.handleSubmit}>
          <div className="mb-2">
            <input
              type="input"
              name="input"
              placeholder="enter input"
              onChange={formik.handleChange}
              value={formik.values.input}
              className="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="px-12  py-2 text-center  tracking-wide  text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Count
            </button>
          </div>
          <div className="mt-8">
            <label
              className="block text-xl text-center mb-4 font-semibold text-gray-800"
            >
              Result
            </label>


            <div className="text-center font-extrabold p-6 text-6xl  text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
          <pre>{JSON.stringify(result)}</pre>
        </div>

            
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Count;
