import React from "react";
import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Filter,
  Sort,
  Inject,
} from "@syncfusion/ej2-react-grids";

const Orders = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-[4vw] bg-white">
        <Header category="Page" title="Orders" />

        <div className="mt-10 bg-slate-600 flex w-full">
          <GridComponent
            dataSource={ordersData}
            allowPaging={true}
            allowSorting={true}
            pageSettings={{ pageSize: 10 }}
          >
            <ColumnsDirective>
              {
                ordersGrid.map((item, index) => (
                  <ColumnDirective
                    key={index} {...item}
                  />
                ))
              }
            </ColumnsDirective>

            <Inject services={[Page, Sort]} />
          </GridComponent>
        </div>
      </div>
    </div>
  );
};

export default Orders;
