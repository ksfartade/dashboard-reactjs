import React from "react";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Sort,
  Inject,
  Edit,
  Toolbar,
  Selection,
} from "@syncfusion/ej2-react-grids";

const Customers = () => {
  return (
    <div className="w-full box-border  min-h-[calc(100vh-100px)] p-[4vw] flex">
      <div className="flex-1 p-[4vw] bg-white">
        <Header category="Page" title="Employees" />

        <div className="mt-10 w-full">
          <GridComponent
            dataSource={customersData}
            allowPaging={true}
            allowSorting={true}
            allowSelection={true}
            pageSettings={{ pageSize: 10 }}
            editSettings={{
              allowEditing: true,
              allowAdding: true,
              allowDeleting: true,
              mode: 'Normal', // or 'Normal' | 'Batch'
            }}
            toolbar={['Search', "Delete"]}
          >
            <ColumnsDirective>
              {
                customersGrid.map((item, index) => (
                  <ColumnDirective
                    key={index} {...item}
                  />
                ))
              }
            </ColumnsDirective>

            <Inject services={[Page, Sort, Search, Edit, Toolbar, Selection]} />
          </GridComponent>
        </div>
      </div>
    </div>
  );
};

export default Customers;