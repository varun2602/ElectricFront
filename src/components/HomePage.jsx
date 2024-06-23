import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Line } from "react-chartjs-2";
import LineChart from './LineChart';
import { useState } from 'react';
import Chart from 'chart.js/auto';
import { useBaseUrl } from '../context/BaseUrlContext';

const HomePage = () => {
  const [chartData, setChartData] = useState({})
  const baseUrl = useBaseUrl()
  const [xdata, setxdata] = useState([])
  const [ydata, setydata] = useState([])
  const [mounted, setMounted] = useState(1)
  const fetchData =  async function(){
    const response = await axios.get(`${baseUrl}/api/analytics`)
    console.log("analytics", response.data, typeof(response.data)) 
    setChartData(response.data)
    setxdata(Array.from(Object.keys(chartData)))
    setydata(Array.from(Object.values(chartData)))
  
  }
  useEffect(function(){
    console.log("x", xdata, typeof(xdata))
    console.log("y", ydata, typeof(ydata))
  }, [ydata])

  useEffect(function(){
    setMounted(mounted + 1)
    
  }, [])
  useEffect(function(){
    const access_token = localStorage.getItem("accessToken")
    if(access_token == null){
        window.location.href = "/login"
    }
    fetchData()
  })

  const data = {
    labels: xdata,
    datasets: [
      {
        label: 'Applications',
        data: ydata,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  
  return (
    <div>
    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '1.5rem 0', color: '#333' }}>ANALYTICS</h1>
    <div style={{ width: '70%', height: '70%', margin: '0 auto', textAlign: 'center' }}>
  <LineChart data={data} />
</div>

  
    </div>
  )
}

export default HomePage
