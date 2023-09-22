import React from "react";
import { generateDate } from "../../utils/calendar";
import cn from "../../utils/cn";
import convertDate from "../../utils/convertDate";
import dayjs from "dayjs";

const AgendaDate = (props) => {
  const { today, selectedDay, setSelectedDay, students } = props;
  const month = today;

  const daysOfWeek = {
    niedziela: 0,
    poniedziałek: 1,
    wtorek: 2,
    środa: 3,
    czwartek: 4,
    piątek: 5,
    sobota: 6,
  };

  return (
    <div className={"w-full h-full  grid grid-cols-7 "}>
      {generateDate(month).map(({ date, currentMonth, today }, index) => {
        return (
          <div
            className={
              "flex w-14 justify-between border-2 p-1 h-10  cursor-pointer"
            }
            key={index}
            onClick={() => setSelectedDay(date)}
          >
            <p
              className={cn("text-sm",
                currentMonth ? "" : "text-gray-400",
                today ? "text-red-600 font-semibold  rounded-full  flex-center": "",
                selectedDay.toDate().toDateString() ===
                  date.toDate().toDateString()
                  ? "font-semibold   flex-center"
                  : "",
              )}
            >
              {date.date()}
            </p>
            {/*<div className={"flex flex-col overflow-hidden"}>*/}
            {/*  {students*/}
            {/*    .filter((student) => {*/}
            {/*      if (*/}
            {/*        dayjs(student.nextMeeting).format("MMM D YYYY") ===*/}
            {/*        date.format("MMM D YYYY")*/}
            {/*      ) {*/}
            {/*        return student;*/}
            {/*      }*/}
            {/*    })*/}
            {/*    .map((student, index) => (*/}
            {/*      <div*/}
            {/*        key={index}*/}
            {/*        className={*/}
            {/*          "flex justify-start gap-2 border-b border-b px-2 py-1 min-h-2 overflow-hidden"*/}
            {/*        }*/}
            {/*      >*/}
            {/*        <span className={"text-xs  "}>{student.time}</span>*/}
            {/*        <span className={"text-xs"}>*/}
            {/*          {student.name.split(" ")[0]}*/}
            {/*        </span>*/}
            {/*      </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
          </div>
        );
      })}
    </div>
  );
};
export default AgendaDate;
