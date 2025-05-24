import React from "react";
import { employeesData, employeesGrid } from "../data/dummy";
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
} from "@syncfusion/ej2-react-grids";

const Employees = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-[4vw] bg-white">
        <Header category="Page" title="Employees" />

        <div className="mt-10 w-full">
          <GridComponent
            dataSource={employeesData}
            allowPaging={true}
            allowSorting={true}
            pageSettings={{ pageSize: 10 }}
            editSettings={{
              allowEditing: true,
              allowAdding: true,
              allowDeleting: true,
              mode: 'Normal', // or 'Normal' | 'Batch'
            }}
            toolbar={['Search']}
          >
            <ColumnsDirective>
              {
                employeesGrid.map((item, index) => (
                  <ColumnDirective
                    key={index} {...item}
                  />
                ))
              }
            </ColumnsDirective>

            <Inject services={[Page, Sort, Search, Edit, Toolbar]} />
          </GridComponent>
        </div>
      </div>
    </div>
  );
};

export default Employees;