import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot
} from "recharts";

const data = [
  { month: "Jan", precentage: 50 },
  { month: "Feb", precentage: 60 },
  { month: "March", precentage: 65 },
  { month: "April", precentage: 70 },
  { month: "May", precentage: 67 },
  { month: "Jun", precentage: 62 },
  { month: "July", precentage: 72 },
  { month: "Aug", precentage: 79 },
  { month: "Sep", precentage: 77 },
  { month: "Oct", precentage: 75 }
];

export default function App() {
  return (
    <ResponsiveContainer width={"100%"} height={344}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <defs>
          <linearGradient id="color" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop
              offset={"0%"}
              stopColor={"rgb(50, 93, 179)"}
              stopOpacity={0.3}
            />
            <stop offset={"75%"} stopColor={"#1a7dff"} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tick={{ fontFamily: "sans-serif", fontSize: 14 }}
        />
        <YAxis
          domain={[0, 100]}
          type={"number"}
          axisLine={false}
          tickLine={false}
          tick={{ fontFamily: "sans-serif", fontSize: 14 }}
          tickFormatter={(value) => `${value}%`}
          minTickGap={1}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="precentage"
          stroke="#659BF5"
          fill={"url(#color)"}
        />
        <ReferenceDot
          x={data[data.length - 1].month}
          y={data[data.length - 1].precentage}
          r={6}
          fill={"#1976D2"}
          stroke={"transparent"}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
