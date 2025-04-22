import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3],
        backgroundColor: ['#3498db', '#2ecc71', '#e74c3c']
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff'
        }
      },
      title: {
        display: true,
        text: 'Sales by Month',
        color: '#fff'
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#fff'
        }
      },
      y: {
        ticks: {
          color: '#fff'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
