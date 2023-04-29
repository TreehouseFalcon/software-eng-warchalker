import { useState } from "react";

export default function ViewAccessPoint(props) {
  return (
    <div className="bg-white rounded-md border-2 border-gray-600 flex flex-col gap-4 px-2 py-2">
      <div>
        <h2 className="underline">Tim Horton's Coffee</h2>
        <h2 className="">
          Posted by{" "}
          <button className="text-sky-600" onClick={props.onViewProfile}>
            YourUsernameHere
          </button>
        </h2>
        <h2 className="text-amber-700">5 star rating</h2>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <h2 className="text-left underline">Address</h2>
          <h2 className="text-left">1234 Anywhere Blvd.</h2>
        </div>

        <div>
          <h2 className="text-left underline">Privacy</h2>
          <h2 className="text-left">Protected</h2>
        </div>

        <div className="flex flex-col gap-1">
          <button className="bg-sky-300 w-full rounded-md border-2 border-gray-500" onClick={props.onSave}>
            Copy network password
          </button>
          <button className="bg-sky-300 w-full rounded-md border-2 border-gray-500" onClick={props.onReview}>
            Rate access point
          </button>
          <button className="bg-orange-300 w-full rounded-md border-2 border-gray-500" onClick={props.onEdit}>
            Edit access point
          </button>
        </div>
      </div>
    </div>
  );
}
