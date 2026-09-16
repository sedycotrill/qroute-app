import { useState } from "react";
import Login from "./Signing In/Login";
import Create from "./Signing In/Create";

function App() {
  const [page, setPage] = useState<"login" | "create">("login");

  return (
    <>
      {page === "login" && <Login goToCreate={() => setPage("create")} />}
      {page === "create" && <Create goToLogin={() => setPage("login")} />}
    </>
  );
}

export default App;
