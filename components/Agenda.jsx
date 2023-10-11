"use client";
import React, { useState, useEffect } from "react";
import AgendaUser from "./AgendaUser";
import AgendaCalendar from "./AgendaCalendar";
import axios from "axios";
import meetingInfo from "../utils/meetingDay";
import AddStudent from "./AddStudent";
import MeetingPopUp from "./MeetingPopUp";
import dayjs from "dayjs";

const Agenda = ({
  setMeetingHistory,
  setUserTarget,
  setUserStudents,
  userStudents,
}) => {
  const [userMenu, setUserMenu] = useState(false);
  const [user, setUser] = useState(null);

  const fetchStudent = async () => {
    try {
      const res = await axios.get("/api/getUserData");
      setUserStudents(res.data.students);
      setUser(res.data);
      setUserTarget(res.data.target);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []); // Uruchamiamy tylko raz po zamontowaniu komponentu

  return (
    <div className={"lg:w-4/12 w-full  flex flex-col   "}>
      <div className={"flex-between"}>
        <h1 className={"title p-2"}>Harmonogram spotkań</h1>
        <button className={"btn "} onClick={() => setUserMenu(true)}>
          {" "}
          Dodaj
        </button>
      </div>
      <div className={"  bg-slate-50"} style={{height:"70vh"}}>
        <div className={"overflow-y-scroll h-full flex flex-col gap-4 p-4 "} >
          {userStudents.map((student) => (
            <AgendaUser
              fetchStudent={fetchStudent}
              student={student}
              key={student._id}
            />
          ))}
        </div>

        {userMenu && (
          <div className={"addStudent"}>
            <AddStudent
              fetchStudent={fetchStudent}
              apiUrl={"/api/add-student"}
              closeMenu={setUserMenu}
            />
          </div>
        )}
        <MeetingPopUp user={user} setMeetingHistory={setMeetingHistory} />
      </div>
    </div>
  );
};

export default Agenda;
