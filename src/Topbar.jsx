export default function Topbar(props) {
  const page = props.page;
  const setPage = props.setPage;

  return (
    <div className="flex flex-row gap-5 px-5 py-3 border-b-2 border-gray-600 border-dashed">
      <h1 className="text-2xl underline">W4RCH4LKER</h1>
      <button className={"px-2 rounded-md " + (page === "main" ? "bg-purple-200" : "")} onClick={() => setPage("main")}>
        Home
      </button>
      <button className={"px-2 rounded-md " + (page === "events" ? "bg-purple-200" : "")} onClick={() => setPage("events")}>
        Events
      </button>
      <button className={"px-2 rounded-md " + (page === "forum" ? "bg-purple-200" : "")} onClick={() => setPage("forum")}>
        Forum
      </button>
      <button className="ml-auto px-2" onClick={() => setPage("login")}>
        Log Out
      </button>
    </div>
  );
}
