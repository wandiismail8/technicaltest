// import React from 'react'

// export default function HomePage() {
//   return (
//     <div>HomePage</div>
//   )
// }



// import { useState, useEffect } from "react";
import AddUser from "../components/AddUser";
import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export default function HomePage() {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3001/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // }, []);

  const {data} = useSWR('http://localhost:3001/users', fetcher)
// console.log(data);

  return (
    <>
    <div>
    Total User : {data?.length}
    </div>
    
    <AddUser/>
    <div className="p-5 h-screen bg-gray-100">
    <h1 className="text-2xl font-bold text-center text-slate-700 mb-4 pt-3 ">
            User List
          </h1>
      <table className="w-full">
        <thead className="bg-gray-200 border-b-2 border-gray-300">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Email
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Phone
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Addres
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => {
            return (
              <tr key={user.id} className="odd:bg-white even:bg-blue-100">
                <td className="p-3 text-sm text-gray-700">{user.id}</td>
                <td className="p-3 text-sm text-gray-700">{user.username}</td>
                <td className="p-3 text-sm text-gray-700">{user.email}</td>
                <td className="p-3 text-sm text-gray-700">
                  {user.phoneNumber}
                </td>
                {user.isPremium ? (
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                      PREMIUM
                    </span>
                  </td>
                ) : (
                  <td className="p-3 text-sm text-gray-700">
                    <span className="p-1.5 text-xs font-medium tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      REGULAR
                    </span>
                  </td>
                )}
                <td className="p-3 text-sm text-gray-700">{user.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}


