import React from "react";
import { useFormik } from "formik";
import { mutate } from "swr";
import axios from "axios";

const AddUser = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      isPremium: false,
      phoneNumber: "",
      address: "",
    },
    onSubmit: async (values, formikHelpers) => {
      await axios.post("http://localhost:3001/users", values);
      formikHelpers.resetForm();
      mutate("http://localhost:3001/users");
    },
  });
  return (
    <div className="md:container px-10 py-4 bg-slate-300 rounded">
      <h1 className="text-2xl font-bold text-center text-slate-700 mb-2 underline ">
            New Account
          </h1>
      <form onSubmit={formik.handleSubmit}>
        <label className="block">
          <span className="block font-semibold text-slate-700 text-xl">
            Name
          </span>
        </label>
        <div>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Your name"
            onChange={formik.handleChange}
            value={formik.values.username}
            className="mt-1 w-full px-3 py-1 text-xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </div>
        <div>
         <label className="block">
          <span className="block font-semibold text-slate-700 text-xl">
            Email
          </span>
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Your email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="mt-1 w-full px-3 py-1 text-xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
      </div>
       <label className="block">
          <span className="block font-semibold text-slate-700 text-xl">
            Password
          </span>
        </label>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Your Password"
          onChange={formik.handleChange}
          value={formik.values.password}
            className="mt-1 w-full px-3 py-1 text-xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"

        />
      </div>
       <label className="block">
          <span className="block font-semibold text-slate-700 text-xl">
            Phone
          </span>
        </label>
      <div>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
            className="mt-1 w-full px-3 py-1 text-xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"

        />
      </div>
       {/* <label className="block">
          <span className="block font-bold text-slate-700 text-xl">
            Username
          </span>
        </label>
      <div>
        Premium :
        <input
          id="isPremium"
          name="isPremium"
          type="radio"
          onChange={formik.handleChange}
          value={formik.values.isPremium}
        />
      </div> */}
       <label className="block">
          <span className="block font-semibold text-slate-700 text-xl">
            Address
          </span>
        </label>
      <div>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          onChange={formik.handleChange}
          value={formik.values.address}
            className="mt-1 w-full px-3 py-1 text-xl bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"

        />
      </div>
      <div className="mt-3">
            <button
              type="submit"
              className="px-12  py-2 text-center  tracking-wide  text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600"
            >
              Submit
            </button>
          </div>
      </form>
    </div>
  );
};

export default AddUser;
