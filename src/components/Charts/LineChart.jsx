import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import {lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis} from "../../data/dummy";


const LineChart = () => {
  return (
    <div>
      <ChartComponent
        id='line-chart'
        // height='400px'
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background="transparent"
        legendSettings={{ visible: true }}
      >

        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {
            lineCustomSeries.map((item, index) => (
              <SeriesDirective
              key = {index}
                {...item}
              />
            ))
          }
        </SeriesCollectionDirective>

      </ChartComponent>
    </div>
  )
}

export default LineChart