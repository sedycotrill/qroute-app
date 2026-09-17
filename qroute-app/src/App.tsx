import { useState } from "react";
import Login from "./Signing In/Login";
import Create from "./Signing In/Create";
import { Verify } from "./Signing In/Verify";
import Landing from "./Main Page/Landing"; // Dagdagan ng "Main Page/"// 1. Import ang Landing component

function App() {
  // 2. Isama ang "landing" sa state type
  const [page, setPage] = useState<"login" | "create" | "verify" | "landing">("login");

  return (
    <>
      {page === "login" && (
        <Login 
          goToCreate={() => setPage("create")} 
          goToLanding={() => setPage("landing")} // 3. Ipasa ang function para lumipat sa landing
        />
      )}

      {page === "create" && (
        <Create 
          goToLogin={() => setPage("login")} 
          goToVerify={() => setPage("verify")} 
        />
      )}

      {page === "verify" && (
        <Verify 
          onVerify={(code) => {
            console.log("Submitted OTP Code:", code);
            setPage("login");
          }} 
        />
      )}

      {/* 4. Display ang Landing page at payagan ang Log out pabalik sa Login */}
      {page === "landing" && (
        <Landing onLogout={() => setPage("login")} />
      )}
    </>
  );
}

export default App;
