import React from "react";
import { Outlet } from "react-router-dom";
import { Top } from "./style";

function Home() {
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Cloud Music 2.0</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Outlet />
    </div>
  );
}

export default Home;
