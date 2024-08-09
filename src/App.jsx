import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import { ScrollTop } from "./components/scrolltop/ScrollTop";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Logout from "./components/login/Logout";
import Common1 from "./section/common/Common1";
import Start from "./constants/Start";
import BodyFocus from "./section/bodyfocussection/BodyFocus";
import Common2 from "./section/common/Common2"; // Ensure this is imported

const App = () => {
  return (
    <div className=".back__bg">
      <ScrollTop />
      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/explore" element={<Explore />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/logout" element={<Logout />} />
  <Route path="/level/:level" element={<Common1 />} />
  <Route path="/start" element={<Start />} />
  <Route path="/aot/:aot" element={<Common1 />} />
  <Route path="/combined/:value" element={<Common2 />} /> {/* For combined data */}
  <Route path="/level/:value" element={<Common2 />} />
<Route path="/aot/:value" element={<Common2 />} />

</Routes>
    </div>
  );
};

export default App;