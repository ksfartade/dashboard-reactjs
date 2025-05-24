import React from 'react';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData, medicalproBranding, stackedCustomSeries, lineChartData} from '../data/dummy';
import {useAppContext} from '../contexts/ContextProvider';
import welcomeImg from "../data/welcome-bg.svg";
import { BsDot } from 'react-icons/bs';
import { stackedChartData } from '../data/dummy';



const Ecommerce = () => {
  return (
    <div className=''>
      <div className='p-5'>
        <div
          className="relative bg-no-repeat bg-contain bg-center bg-white h-64 w-full rounded-xl overflow-hidden"
          style={{ backgroundImage: `url(${welcomeImg})` }}
          >
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 space-y-2">
            <h2 className="text-xl font-semibold">Earnings</h2>
            <p className="text-2xl text-black font-bold">$99.99</p>
            <Button 
            text={"Download"}
            color={"white"}
            bgColor={"#00D1D7"}
            hoverColor = {"#57a6a8"}
            px={"10px"}
            py={"5px"}
            radius={"5px"}
            size={"sm"}
            />
          </div>
        </div>

        <div className='mt-5 flex w-full flex-wrap gap-2'>
          {
            earningData.map((item, index) =>{
              return <div 
                key={index}
                className='flex-1 pt-8 p-5 md:w-80 bg-white rounded-xl'>
                  <div className='rounded-full p-4 text-3xl inline-block opacity-90 hover:drop-shadow-xl' style={{backgroundColor: item.iconBg, color: item.iconColor}}>
                    {item.icon}
                  </div>

                  <div>
                    <span className='font-semibold me-1'> {item.amount} </span>
                    <span className={`${item.pcColor}`}>{item.percentage}</span>
                  </div>

                  <p className='text-gray-400 font-medium'>{item.title}</p>
                </div>
            })
          }
        </div>

        <div className='m-auto mt-5 flex w-[90%] bg-white rounded-xl'>
          <div className='flex-1 p-3 text-1xl font-semibold'>
            <p className='ms-[25%]'> Revenue Update </p>

            <div className='mt-10 ms-[30%] flex gap-5 flex-col'>
              <div>
              <span className="text-2xl inline-block relative">
                $93,456
                <span className="absolute top-2 -right-10 p-1 text-white bg-green-400 rounded-2xl text-xs">
                  23%
                </span>
              </span>
                <p className='mt-1 text-gray-400 text-sm'> Budget </p>
              </div>

              <div>
                <p className='text-2xl inline-block'> $48,487 </p>
                <p className='mt-1 text-gray-400 text-sm'> Expense </p>
              </div>

              <div>
                <SparkLine lineChartData={SparklineAreaData} color={"#00C8AE"} axis={false} height='100px' width='200px'/>
              </div>

              <div className='mt-5'>
              <Button 
                text={"Download Report"}
                color={"white"}
                bgColor={"blue"}
                px={"8px"}
                py={"12px"}
                radius={"8px"}
                size={"sm"}
                />
              </div>
            </div>
          </div>
          
          <div className='mt-10 w-[1px] bg-gray-200'></div>
          <div className='flex-1'>
            <div className='flex items-center justify-end me-4'>
                <span><BsDot className="text-black text-4xl" /></span>
                <span className='text-red-400 text-sm'>Expense</span>

                <span className='ms-2'><BsDot className="text-green-400 text-4xl" /></span>
                <span className='text-green-400 text-sm'>Budget</span>
            </div>

            <div className='p-10'>
              <Stacked height="100%" width="100%" stackedChartData={stackedChartData}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ecommerce