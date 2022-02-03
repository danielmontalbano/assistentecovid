import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

export default function Dati() {
    const [data,setData]=useState([]);
    const [dataSet,setDataChart]=useState([]);
    const [terapia,setTerapia]=useState([]);
    const [terapiaSet,setTerapiaChart]=useState([]);
    const [label,setLabel]=useState([]);
    const [labelSet,setLabelChart]=useState([]);
    const [value,setValue]=useState("a");

    const dataChart = {
        labels: labelSet,
        datasets: [
          {
            label: 'Nuovi positivi',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 0.1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 1,
            data: dataSet
          }
        ]
      };
      const terapiaChart = {
        labels: labelSet,
        datasets: [
          {
            label: 'Ingressi terapia intensiva',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(30,30,192,0.4)',
            borderColor: 'rgba(30,30,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: terapiaSet
          }
        ]
      };

    useEffect(()=>{
        function fetchData(){
            axios.get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json').then((response)=>{
                
                let array=response.data.slice(-356)
                let arrayFinal=[]
                let arrayTerapia=[]
                let arrayLabel=[]
                array.forEach(element => {
                    arrayFinal.push(element.nuovi_positivi)
                    arrayTerapia.push(element.ingressi_terapia_intensiva)
                    arrayLabel.push(element.data.split('T')[0])
                });
                
                setTerapia(arrayTerapia)
                setTerapiaChart(arrayTerapia)
                setData(arrayFinal)
                setDataChart(arrayFinal)
                setLabel(arrayLabel)
                setLabelChart(arrayLabel)
            })
            .catch((error)=>{
                alert(error)
            })
        }
        fetchData();
    },[])

    useEffect(()=>{
        switch(value){
            case 'a':
                setDataChart(data);
                setLabelChart(label);
                setTerapiaChart(terapia);
                break;
            case 'b':
                setDataChart(data.slice(-30));
                setLabelChart(label.slice(-30));
                setTerapiaChart(terapia.slice(-30));
                break;
            case 'c':
                setDataChart(data.slice(-7));
                setLabelChart(label.slice(-7));
                setTerapiaChart(terapia.slice(-7));
                break;
        }
    },[value]);

  return <div className='h-[650px]'>
      <div className="container mx-auto  flex-col items-center">
            <div className="text-center m-2">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green1">Dati covid</h1>
            </div>
            <div className='mx-auto text-center' >
                <select
                    className='bg-green0 p-2 border-2 border-green1 rounded-full px-2'
                    value={value}
                    onChange={(e) => {
                    setValue(e.target.value);
                    }}
                >
                    <option value="a">Ultimo anno</option>
                    <option value="b">Ultimo mese</option>
                    <option value="c">Ultima settimana</option>
                </select>
                </div>
        </div>
        
        <div className='md:hidden '>
            <div className=' grid grid-cols-1'>
                <div className='max-h-[300px]'>
                    <Line
                    data={dataChart}
                    
                    />
                </div>
                <div className='max-h-[300px]'>
                    <Line
                    data={terapiaChart}
                    
                    />
                </div>
            </div>
        </div>
        <div className='hidden md:inline '>
            <div className=' grid grid-cols-2 '>
                <div className='max-h-[300px] '>
                    <Line
                    data={dataChart}
                    
                    />
                </div>
                <div className='max-h-[300px]'>
                    <Line
                    data={terapiaChart}
                    
                    />
                </div>
            </div>
        </div>
        
  </div>;
}
