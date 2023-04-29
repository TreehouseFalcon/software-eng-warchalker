import { useState } from "react";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import EventsPage from "./EventsPage";
import ForumPage from "./ForumPage";
import AdminPage from "./AdminPage";

export default function App() {
  const [page, setPage] = useState("login");

  let PageComponent;
  switch (page) {
    case "main":
      PageComponent = MainPage;
      break;
    case "login":
      PageComponent = LoginPage;
      break;
    case "events":
      PageComponent = EventsPage;
      break;
    case "forum":
      PageComponent = ForumPage;
      break;
    case "admin":
      PageComponent = AdminPage;
      break;
    default:
      console.warn("No page component found for page: " + page);
  }

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-row justify-center mx-auto">
        <PageComponent page={page} setPage={setPage} />
      </div>
    </div>
  );
}
