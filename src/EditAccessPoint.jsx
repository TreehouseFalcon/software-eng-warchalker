import { useState } from "react";

export default function EditAccessPoint(props) {
  const [privacy, setPrivacy] = useState("Open");

  return (
    <div className="bg-white rounded-md border-2 border-gray-600 flex flex-col gap-4 px-2 py-2">
      <h2 className="underline">Edit access point</h2>

      <div>
        <label className="block text-left">Name</label>
        <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="text" placeholder="Local coffee shop" />
      </div>

      <div>
        <label className="block text-left">Address</label>
        <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="text" placeholder="1234 Anywhere Blvd." />
      </div>

      <div>
        <h2 className="text-left">Privacy</h2>
        <select className="w-full bg-white rounded-md border-2 border-gray-500" value={privacy} onChange={(val) => setPrivacy(val.target.value)}>
          <option>Open</option>
          <option>Protected</option>
          <option>Closed</option>
        </select>
      </div>

      {privacy === "Protected" && (
        <div>
          <label className="block text-left">Network password</label>
          <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="password" placeholder="••••••••••" />
        </div>
      )}

      <div className="flex flex-row gap-2">
        <button className=" flex-grow px-2 bg-red-300 rounded-md border-2 border-gray-500" onClick={props.onSave}>
          Cancel
        </button>
        <button className="flex-grow px-2 bg-emerald-300 rounded-md border-2 border-gray-500" onClick={props.onSave}>
          Save changes
        </button>
      </div>
    </div>
  );
}
