import React from "react";
import {
  SparklineComponent,
  SparklineTooltip,
  Inject,
} from "@syncfusion/ej2-react-charts";

class SparkLine extends React.Component {
  render() {
    const { lineChartData, color, axis, height, width } = this.props;

    return (
      <div>
        <SparklineComponent
          id="sparkline"
          height={height}
          width={width}
          type="Line"
          valueType="Category"
          xName="x"
          yName="yval"
          dataSource={lineChartData}
          lineWidth={2}
          fill={color}
          border={{ color: color, width: 2 }}
          tooltipSettings={{
            visible: true,
            // eslint-disable-next-line no-template-curly-in-string
            format: "${x} : data ${yval}",
            trackLineSettings: {
              visible: true,
            },
          }}
          markerSettings={{ visible: ["All"], size: 2.5, fill: color }}
          axisSettings={{
            lineSettings: { visible: axis },
            valueLineSettings: { visible: axis },
          }}
        >
          <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
      </div>
    );
  }
}

export default SparkLine;
