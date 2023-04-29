import { useState } from "react";
import Topbar from "./Topbar";

export default function ForumPage(props) {
  const page = props.page;
  const setPage = props.setPage;

  const [createVisible, setCreateVisible] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Topbar page={page} setPage={setPage} />

      <h1 className="mt-5 mb-2 underline text-4xl">Recent Forum Posts</h1>
      <button
        className="mb-2 py-2 px-4 hover:bg-sky-300 transition-colors"
        onClick={() => {
          setCreateVisible((val) => {
            return !val;
          });
        }}
      >
        {createVisible ? "View Posts" : "Create Post"}
      </button>

      <div className="border-2 border-dashed border-gray-500 w-1/2 mx-auto flex flex-col gap-1">
        {createVisible ? (
          <div className="p-4 flex flex-col gap-2">
            <div>
              <label className="block text-left">Title</label>
              <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="text" placeholder="Forum post title" />
            </div>

            <div>
              <label className="block text-left">Post content</label>
              <textarea className="w-full px-1 border-2 border-gray-500 rounded-md" placeholder="Type up your post here" />
            </div>

            <div>
              <label className="block text-left">Tags</label>
              <input className="w-full px-1 border-2 border-gray-500 rounded-md" type="text" placeholder="Comma-separated list of tags" />
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-emerald-300 rounded-md border-2 border-gray-500" onClick={() => setCreateVisible(false)}>
                Create post
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div className="bg-sky-300">
              <button>How do I make a new access point?</button>
            </div>
            <div className="bg-sky-300">
              <button>Error when updating profile picture</button>
            </div>
            <div className="bg-sky-300">
              <button>Best hotspots of 2022</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
