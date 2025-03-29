import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";

const data = [
  { name: "Everlane T-shirt", price: 30, baseColor: "#B38A6A", fillColor: "#D9D2CA" },
  { name: "Traditional Retail", price: 55, baseColor: "#5B524D", fillColor: "#D9D2CA" },
];

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="40%" height={400}>
      <BarChart 
        data={data} 
        barCategoryGap="50%" // Tăng khoảng cách giữa các cột
        barGap={5} // Khoảng cách giữa phần trên & phần dưới
      > 
        <XAxis dataKey="name" tick={{ fontSize: 14, fontWeight: "bold", fill: "#000" }} />
        <YAxis hide />
        <Tooltip />

        {/** 🔹 Bar phụ - PHẦN DƯỚI (Màu baseColor #B38A6A / #5B524D) */}
        <Bar dataKey="price" barSize={90} stackId="stack">  
          {data.map((entry, index) => (
            <Cell key={`cell-bottom-${index}`} fill={entry.baseColor} />
          ))}
        </Bar>

        {/** 🔹 Bar chính - PHẦN TRÊN (Màu nền #D9D2CA) */}
        <Bar dataKey="price" barSize={90} stackId="stack">
          <LabelList dataKey="price" position="top" fill="#000" fontWeight="bold" />  
          {data.map((entry, index) => (
            <Cell key={`cell-top-${index}`} fill={entry.fillColor} />
          ))}
        </Bar>

      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
