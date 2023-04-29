import { useState } from "react";
import Topbar from "./Topbar";

export default function EventsPage(props) {
  const page = props.page;
  const setPage = props.setPage;

  const [createVisible, setCreateVisible] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Topbar page={page} setPage={setPage} />

      <h1 className="mt-5 mb-2 underline text-4xl">Local Events</h1>
      <button
        className="mb-2 py-2 px-4 hover:bg-sky-300 transition-colors"
        onClick={() => {
          setCreateVisible((val) => {
            return !val;
          });
        }}
      >
        {createVisible ? "View Events" : "Create Event"}
      </button>

      <div className="border-2 border-dashed border-gray-500 w-1/2 mx-auto flex flex-col gap-1">
        {createVisible ? (
          <div className="p-4 flex flex-col gap-2">
            <div>
              <label className="block text-left">Name</label>
              <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="text" placeholder="Event name" />
            </div>

            <div>
              <label className="block text-left">Address</label>
              <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="text" placeholder="1234 Anywhere Blvd." />
            </div>

            <div>
              <label className="block text-left">Date</label>
              <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="date" />
            </div>

            <div>
              <label className="block text-left">Time</label>
              <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="time" />
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-emerald-300 rounded-md border-2 border-gray-500" onClick={() => setCreateVisible(false)}>
                Create event
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div className="bg-sky-300">
              <button>1234 Anywhere Blvd. (4/30 @ 6pm)</button>
            </div>
            <div className="bg-sky-300">
              <button>5678 Somewhere St. (5/1 @ 12pm)</button>
            </div>
            <div className="bg-sky-300">
              <button>1 Infinite Loop (5/7 @ 2pm)</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
