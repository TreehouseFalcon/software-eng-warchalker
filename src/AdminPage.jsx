import { useState } from "react";
import Topbar from "./Topbar";

export default function AdminPage(props) {
  const page = props.page;
  const setPage = props.setPage;

  return (
    <div className="w-screen h-screen">
      <Topbar page={page} setPage={setPage} />

      <h1 className="mt-5 mb-2 underline text-4xl">User Accounts</h1>

      <div className="border-2 border-dashed border-gray-500 w-1/2 mx-auto flex flex-col gap-1">
        <div className="bg-sky-300 py-1 px-4 flex flex-row">
          <p>UserNumber1</p>

          <div className="ml-auto flex flex-row gap-1">
            <button className="bg-red-400 px-2 rounded-md border-2 border-gray-500">Reset Password</button>
            <button className="bg-red-400 px-2 rounded-md border-2 border-gray-500">Delete</button>
          </div>
        </div>
        <div className="bg-sky-300 py-1 px-4 flex flex-row">
          <p>AnotherTestUser</p>

          <div className="ml-auto flex flex-row gap-1">
            <button className="bg-red-400 px-2 rounded-md border-2 border-gray-500">Reset Password</button>
            <button className="bg-red-400 px-2 rounded-md border-2 border-gray-500">Delete</button>
          </div>
        </div>
        <div className="bg-sky-300 py-1 px-4 flex flex-row">
          <p>YourUsernameHere</p>

          <div className="ml-auto flex flex-row gap-1">
            <button className="bg-red-400 px-2 rounded-md border-2 border-gray-500">Reset Password</button>
            <button className="bg-red-400 px-2 rounded-md border-2 border-gray-500">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
