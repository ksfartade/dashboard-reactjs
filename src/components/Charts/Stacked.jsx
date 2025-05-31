import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  StackingColumnSeries,
  Category,
  Legend,
  Tooltip
} from '@syncfusion/ej2-react-charts';

const Stacked = ({height, width, stackedChartData}) => {
  return (
    <div className='dark:bg-secondary-dark-bg'>
      <ChartComponent
      height={height}
      width={width}
      id="stacked-bar-chart"
      chartArea={{border: {width: 0}}}
      primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, }}
      primaryYAxis={{ interval:100, majorGridLines: {width: 1} }}
      tooltip={{ enable: true }}
      legendSettings={{ visible: true }}
      background="transparent"
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />

      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={stackedChartData[0]}
          xName="x"
          yName="y"
          name="Expense"
          type="StackingColumn"
        />
        <SeriesDirective
          dataSource={stackedChartData[1]}
          xName="x"
          yName="y"
          name="Budget"
          type="StackingColumn"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Stacked