import { useState } from "react";

export default function Rate(props) {
  return (
    <div className="bg-white rounded-md border-2 border-gray-600 flex flex-col gap-4 px-2 py-2">
      <h2 className="underline">Rate Tim Horton's Coffee</h2>

      <div>
        <h2 className="text-left">Rating</h2>
        <select className="w-full px-2 bg-white rounded-md border-2 border-gray-500">
          <option>5 stars</option>
          <option>4 stars</option>
          <option>3 stars</option>
          <option>2 stars</option>
          <option>1 stars</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <button className="bg-emerald-300 rounded-md border-2 border-gray-500" onClick={props.onSave}>
          Submit rating
        </button>
      </div>
    </div>
  );
}
