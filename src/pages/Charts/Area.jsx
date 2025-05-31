import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";

const Area = () => {
  return (
    <div className="flex-1 bg-white dark:bg-secondary-dark-bg dark:text-white p-[4vw]">
      <Header category="Area" title="Inflation Rate" />
      <div className="mt-10">
        <ChartComponent
          id="line-chart"
          // height='400px'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background="transparent"
          legendSettings={{ visible: true }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;
