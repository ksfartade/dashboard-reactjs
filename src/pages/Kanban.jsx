import React from "react";
import { kanbanData, kanbanGrid } from "../data/dummy";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { Header } from "../components";

const Kanban = () => {
  return (
    <div className="bg-white flex-1 h-full p-[2vw]">
      <Header category="App" title="Kanban" />

      <div className="mt-5">
        <KanbanComponent
          id="kanban"
          keyField="Status"
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Id" }}
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) => {
              return <ColumnDirective {...item} />;
            })}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
};

export default Kanban;
