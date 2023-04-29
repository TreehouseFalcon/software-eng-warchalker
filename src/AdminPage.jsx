import Topbar from "./Topbar";

export default function AdminPage(props) {
  const page = props.page;
  const setPage = props.setPage;

  return (
    <div className="w-screen h-screen">
      <Topbar page={page} setPage={setPage} />
    </div>
  );
}
