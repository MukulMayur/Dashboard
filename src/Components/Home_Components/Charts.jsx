import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Charts() {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="flex h-[20rem] md:h-[24rem] lg:h-[26rem] bg-[#282828] shadow-md py-4 md:py-5 lg:py-5  rounded-md">
      <div className="w-full h-full">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 25, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              // Customizing activeBar
              barSize={40}
              radius={[5, 5, 0, 0]}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              // Customizing activeBar
              barSize={40}
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
