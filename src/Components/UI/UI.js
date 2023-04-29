import React from "react";
import Intro from "./Intro/Intro";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import Work from "./Works/Work";
import NewWork from "./NewWork/NewWork";

const UI = () => {
    return (
    <React.Fragment>
        <Intro/>
        <AboutUs/>
        <ContactUs/>
        <Work/>
        <NewWork/>
    </React.Fragment>
    );
}
 
export default UI;