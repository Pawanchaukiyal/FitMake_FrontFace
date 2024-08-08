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
// import SmallCard from "./components/cards/smallcard/SmallCard";

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
        {/* <Route path="/" element={<SmallCard />} /> */}
        {/* <Route path="/start/:level" element={<Start/>} /> */}
        <Route path="/common/:level" element={<Common1 />} />
        <Route path="/start" element={<Start />} />
        <Route path="/aot/:aot" element={<Common1 />} />
      </Routes>
    </div>
  );
};

export default App;
