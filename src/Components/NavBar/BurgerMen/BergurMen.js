import React from "react";
import './Bergur.css'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-scroll";


const BergurMen = () => {
    return (
    <React.Fragment>
        <div className="MainBurger" >
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } height={ '25em' } >
                 <main style={{display:'grid'}}>
                    <Link to="MainNav" className="menu-item">Home</Link>
                    <Link to="MainAboutUs" className="menu-item">مين احنا </Link>
                    <Link to="MainContactUs" className="menu-item" >اتصل بينا</Link>
                    <Link to="MainWork" className="menu-item" >اعمالنا</Link>
                 </main>
            </Menu>
        </div>
    </React.Fragment>
    );
}
 
export default BergurMen;