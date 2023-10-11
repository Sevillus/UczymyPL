import React from 'react'
import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";


const Header = ({session}) => {
    const name = session?.user.name
    const img = session?.user.image
    return (
        <header className={"w-full  padding-x py-2 flex-between bg-slate-700  text-white "}z>
            <Logo />

            <div className={"flex-between gap-10"}>
                <Navbar />
                <Profile name={name} img={img}/>
            </div>
        </header>
    )
}
export default Header
