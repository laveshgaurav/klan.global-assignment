import React from "react";
import Page from "./Pages/Page";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Pages/Users/Users";

function App() {
  return (
    // NAVIGATION
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
