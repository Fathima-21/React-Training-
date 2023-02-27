import React,{useState,useEffect} from 'react'
import { Bar } from "react-chartjs-2";

function Dashboard() {
    const [chartData, setChartData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
          // sample data for the chart
          const data = {
            labels: ["ReactJs", "Java", "Html", "Angular"],
            averageScore: [75, 80, 85, 70],
            totalPoints: [300, 320, 340, 280],
          };
    
          const chartData = {
            labels: data.labels,
            datasets: [
              {
                label: "Average Score",
                data: data.averageScore,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderWidth: 1,
              },
              {
                label: "Total Points",
                data: data.totalPoints,
                backgroundColor: "rgba(255,99,132,0.4)",
                borderWidth: 1,
              },
            ],
          };
    
          setChartData(chartData);
        };
    
        fetchData();
      }, []);

  return (
    <div className='dashboard'>
        <h1>Home Dashboard</h1>
        <button>Profile</button>
        <button>Education</button>
        <Bar data={chartData} />
    </div>
  )
}

export default Dashboard