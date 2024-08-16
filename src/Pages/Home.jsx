import React from "react";
import TopDisplay1 from "../Components/Home_Components/TopDisplay1";
import TopDisplay2 from "../Components/Home_Components/TopDisplay2";
import TopDisplay3 from "../Components/Home_Components/TopDisplay3";
import TopDisplay4 from "../Components/Home_Components/TopDisplay4";
import Analytics from "../Components/Home_Components/Analytics";
import Table from "../Components/Home_Components/Table";
import Charts from "../Components/Home_Components/Charts";

function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <Analytics />
      </div>

      <div className="flex flex-col  md:flex lg:flex-row p-2 space-x-2">
        <TopDisplay1 />
        <TopDisplay2 />
        <TopDisplay3 />
        <TopDisplay4 />
      </div>
      <div>
        <Charts />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default Home;
