import React from 'react'
import {daysOfWeek} from "../constants/months";

const CalendarInfo = ({ selectedDay, userStudents }) => {
    return (
        <div
            className={
                "flex flex-col max-h-64 w-4/12 p-2 h-fit border-current"
            }
        >
            <div className={"border-b-2"}>
                <h1 className={"text-xl ml-2 font-medium"}>Spotkania</h1>
                <h2 className={"ml-2 text-slate-400"}>
                    {selectedDay.format("DD.MM.YYYY")}
                </h2>
            </div>
            <div className={"overflow-y-auto"}>
                {userStudents.map((student, index) => (
                    <div key={index}>
                        {daysOfWeek[student.day.toLowerCase()] === selectedDay.day() ? (
                            <div className={"p-2"}>
                                <p className={"font-medium"}>{student.name.split(' ')[0]}</p>
                                <p className={"text-sm text-slate-500"}>
                                    {student.time} - {student.duration}
                                </p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CalendarInfo
