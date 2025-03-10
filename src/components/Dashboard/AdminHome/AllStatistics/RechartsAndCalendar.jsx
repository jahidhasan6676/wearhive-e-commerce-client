import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const RechartsAndCalendar = () => {
  const [date, setDate] = useState(new Date());

  const data = [
    { month: "Jan", earnings: 4000 },
    { month: "Feb", earnings: 3000 },
    { month: "Mar", earnings: 5000 },
    { month: "Apr", earnings: 7000 },
    { month: "May", earnings: 6000 },
    { month: "Jun", earnings: 8000 },
  ];

  return (
    <div className="lg:flex gap-4 space-y-4 lg:space-y-0">
      {/* Bar Chart Section */}
      <div className="flex-1 bg-white shadow-sm rounded-md p-4">
        <h2 className="text-xl font-bold mb-4">Total Earnings</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Calendar Section */}
      <div className=" p-4 bg-white shadow-sm rounded-md flex justify-center items-center">
        <Calendar onChange={setDate} value={date} className="w-full" />
      </div>
    </div>
  );
};

export default RechartsAndCalendar;
