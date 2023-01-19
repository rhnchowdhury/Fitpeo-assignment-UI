import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Feb',
            uv: 10,
            pv: 15,

        },
        {
            name: 'Mar',
            uv: 15,
            pv: 20,

        },
        {
            name: 'Apr',
            uv: 20,
            pv: 15,

        },
        {
            name: 'May',
            uv: 10,
            pv: 15,

        },
        {
            name: 'Jun',
            uv: 20,
            pv: 15,

        },
        {
            name: 'Jul',
            uv: 15,
            pv: 12,

        },
        {
            name: 'Aug',
            uv: 15,
            pv: 8,

        },
        {
            name: 'Sep',
            uv: 15,
            pv: 10,

        },
        {
            name: 'Oct',
            uv: 40,
            pv: 10,

        }];
    return (
        <div>
            <BarChart width={450}
                height={200}
                data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
                <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
            </BarChart>
        </div >
    );
};

export default Chart;