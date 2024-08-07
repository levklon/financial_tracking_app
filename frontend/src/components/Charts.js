import React from 'react';
import { Bar } from 'react-chartjs-2';

const Charts = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.category),
        datasets: [
            {
                label: 'Transactions',
                data: data.map(item => item.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
        ]
    };

    return <Bar data={chartData} />;
};

export default Charts;
