import React from "react";
import TopDisplay from "../Components/Home_Components/TopDisplay";
import Analytics from "../Components/Home_Components/Analytics";
import Table from "../Components/Home_Components/Table";
import Charts from "../Components/Home_Components/Charts";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="px-3 pt-3 md:p-0 lg:p-0">
        <Analytics />
      </div>
      <div className="flex flex-col md:flex lg:flex-row p-2 space-x-2">
        <TopDisplay />
      </div>
      <div className="w-full px-3">
        <Charts />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default Home;