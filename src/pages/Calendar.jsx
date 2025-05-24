import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  WorkWeek,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-[4vw] bg-white">
        <Header category="Page" title="Calender" />

        <div className="mt-10 w-full">
          <ScheduleComponent
            height={"650px"}
            eventSettings={{ dataSource: scheduleData }}
            selectedDate={new Date("2021-01-10")}
          >
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                Resize,
                DragAndDrop,
              ]}
            >
              {" "}
            </Inject>
          </ScheduleComponent>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
