import { useState } from "react";
import Login from "./Signing In/Login";
import Create from "./Signing In/Create";
import Verify from "./Signing In/Verify"; // 1. Import ang Verify component

function App() {
  // 2. Isama ang "verify" sa state type
  const [page, setPage] = useState<"login" | "create" | "verify">("login");

  return (
    <>
      {page === "login" && (
        <Login goToCreate={() => setPage("create")} />
      )}

      {page === "create" && (
        <Create 
          goToLogin={() => setPage("login")} 
          goToVerify={() => setPage("verify")} // 3. Ipasa ang navigation function
        />
      )}

      {page === "verify" && (
        <Verify 
          onVerify={(code) => {
            console.log("Submitted OTP Code:", code);
            setPage("login"); // O kahit anong landing page pagkatapos ma-verify
          }} 
        />
      )}
    </>
  );
}

export default App;