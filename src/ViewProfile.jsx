import { useState } from "react";

export default function ViewProfile(props) {
  return (
    <div className="bg-white rounded-md border-2 border-gray-600 flex flex-col gap-4 px-2 py-2">
      <h2 className="underline">YourUsernameHere</h2>

      <div className="rounded-full bg-sky-400 w-24 h-24 flex flex-col justify-center mx-auto">
        <p className="rounded-full">Photo</p>
      </div>

      <div>
        <label className="block text-left underline">Biography</label>
        <p className="text-left">Welcome to my profile!</p>
      </div>

      <div className="flex flex-col gap-2">
        <button className="bg-red-400 rounded-md border-2 border-gray-500" onClick={props.onSave}>
          Close
        </button>
      </div>
    </div>
  );
}
