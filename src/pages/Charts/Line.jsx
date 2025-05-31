import React from "react";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="flex-1 bg-white dark:bg-secondary-dark-bg dark:text-white p-[4vw]">
      <Header category="Chart" title="Inflation Rate" />

      <LineChart />
    </div>
  );
};

export default Line;
