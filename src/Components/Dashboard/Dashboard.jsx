import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const marksArray = [
        {
            id: "1",
            name: "Cassie Meyer",
            Physics: 30,
            Chemistry: 60,
            Math: 21
        },
        {
            id: "2",
            name: "Alicia Cochran",
            Physics: 26,
            Chemistry: 60,
            Math: 17
        },
        {
            id: "3",
            name: "Gamble Hyde",
            Physics: 20,
            Chemistry: 60,
            Math: 24
        },
        {
            id: "4",
            name: "Brooks Moon",
            Physics: 30,
            Chemistry: 60,
            Math: 31
        },
        {
            id: "5",
            name: "Allie Gonzalez",
            Physics: 10,
            Chemistry: 60,
            Math: 23
        },
        {
            id: "6",
            name: "Summer Henry",
            Physics: 15,
            Chemistry: 60,
            Math: 20
        },
        {
            id: "7",
            name: "Jefferson Moss",
            Physics: 20,
            Chemistry: 60,
            Math: 17
        },
        {
            id: "8",
            name: "Bullock Rosales",
            Physics: 10,
            Chemistry: 43,
            Math: 14
        },
        {
            id: "9",
            name: "Hogan Owens",
            Physics: 27,
            Chemistry: 30,
            Math: 17
        },
        {
            id: "10",
            name: "Lou Donovan",
            Physics: 20,
            Chemistry: 60,
            Math: 12
        },
        {
            id: "11",
            name: "Sultan Suvo",
            Physics: 10,
            Chemistry: 60,
            Math: 16
        },
        {
            id: "12",
            name: "Jannatul Popy",
            Physics: 15,
            Chemistry: 60,
            Math: 19
        }
    ]



    return (
        <div>
            <LineChart

                width={1000}
                height={300}
                data={marksArray}

            >

                <Line dataKey="Physics"></Line>
                <Line dataKey="Math" stroke="#82ca9d"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;