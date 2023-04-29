import { useState } from "react";

export default function EditProfile(props) {
  return (
    <div className="bg-white rounded-md border-2 border-gray-600 flex flex-col gap-4 px-2 py-2">
      <h2 className="underline">Edit Your Profile</h2>

      <div className="rounded-full bg-sky-400 w-24 h-24 flex flex-col justify-center mx-auto">
        <button className="w-full h-full rounded-full">Photo</button>
      </div>

      <div>
        <label className="block text-left">Username</label>
        <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="text" placeholder="YourCurrentUsername" />
      </div>

      <div>
        <label className="block text-left">Biography</label>
        <textarea
          className="w-full px-1 border-2 border-gray-500 rounded-md h-20"
          type="text"
          placeholder="This is where you'll be able to add a biography to your profile! It can be as long as you want."
        />
      </div>

      <div className="flex flex-col gap-2">
        <button className="bg-emerald-300 rounded-md border-2 border-gray-500" onClick={props.onSave}>
          Save changes
        </button>
      </div>
    </div>
  );
}
