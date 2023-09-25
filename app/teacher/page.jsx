"use client"
import Agenda from "../../components/Agenda/Agenda";
import ProgressBar from "../../components/ProgressBar";
import MeetingsHistory from "../../components/MeetingsHistory";
import React, {useState} from "react";
import AgendaHeader from "../../components/Agenda/Agenda__header";
import AgendaDays from "../../components/Agenda/AgendaDays";
import AgendaDate from "../../components/Agenda/AgendaDate";
import dayjs from "dayjs";
import Calendar from "../../components/Calendar";




const Page = () => {

    const [meetingHistory, setMeetingHistory] = useState([])
    const [earnedThisMonth, setEarnedThisMonth] = useState(0)
    const [userTarget, setUserTarget] = useState(0)
    const [userStudents, setUserStudents] = useState([]);

    return (
        <div className={"flex justify-between"}>
            <Agenda setMeetingHistory={setMeetingHistory} setUserTarget={setUserTarget} userStudents={userStudents} setUserStudents={setUserStudents}/>
            <Calendar userStudents={userStudents}/>
            <div className={"h-full"}>
                <ProgressBar earnedThisMonth={earnedThisMonth} userTarget={userTarget}/>
                <MeetingsHistory meetingHistory={meetingHistory} setEarnedThisMonth={setEarnedThisMonth}/>
            </div>
        </div>
    )
}
export default Page
