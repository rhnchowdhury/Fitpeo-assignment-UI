import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { Area, AreaChart, YAxis } from 'recharts';

const ShowChart = () => {
    const data = [
        {
            uv: 20,
            pv: 10,
            amt: 5,
        },
        {
            uv: 10,
            pv: 15,
            amt: 7,
        },
        {
            uv: 20,
            pv: 4,
            amt: 10,
        },
        {
            uv: 30,
            pv: 18,
            amt: 13,
        },
        {
            uv: 30,
            pv: 19,
            amt: 9,
        },

    ];
    return (
        <div>
            <AreaChart width={200}
                height={100}
                data={data}>
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </div>
    );
};

export default ShowChart;