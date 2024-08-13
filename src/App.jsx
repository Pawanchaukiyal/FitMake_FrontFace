import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import { ScrollTop } from "./components/scrolltop/ScrollTop";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Logout from "./components/login/Logout";

import Start from "./constants/Start";

import Common2 from "./section/common/CommonPick"; // Ensure this is imported
import Commonaot from "./section/common/Commonaot";

import Common4 from "./section/common/Common4";
import CommonUnifiedLevel from "./section/common/CommonUnifiedLevel";
import CommonUnifiedAot from "./section/common/CommonUnifiedAot";
import CommonPick from "./section/common/CommonPick";
import Equip from "./section/common/Equip";

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
        {/* done */}
        <Route path="/yogalevel/:yogalevel" element={<CommonUnifiedLevel />} />
        {/* done */}
        <Route
          path="/exerciselevel/:exerciselevel"
          element={<CommonUnifiedLevel />}
        />
        {/* done */}
        <Route
          path="/exerciseaot/:exerciseaot"
          element={<CommonUnifiedAot />}
        />
        <Route path="/yogaaot/:yogaaot" element={<CommonUnifiedAot />} />
        {/* done */}
        <Route path="/combined/:value" element={<CommonPick />} />{" "}
        {/* For combined data */}
        <Route path="/yogalevel/:value" element={<CommonPick />} />
        <Route path="/aot/:value" element={<Commonaot />} />
        <Route path="/aot/:value" element={<Commonaot />} />
        <Route path="/category/:value" element={<Equip />} />
        <Route path="/exercise/exerciseaot/:value" element={<Common4 />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </div>
  );
};

export default App;
