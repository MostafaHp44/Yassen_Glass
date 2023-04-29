import React from "react";
import './NavBar.css'
import { UilLocationPoint,UilClockTen,UilInfoCircle,UilAt,UilCog,UilGlobe,UilFacebookF} from '@iconscout/react-unicons'
import Button from 'react-bootstrap/Button';
import logo1 from './Logo/logo.png'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import BergurMen from "./BurgerMen/BergurMen";


const NavBar = () => {
    return (
    <React.Fragment>
        <div className="MainNav" name='MainNav'>
           
            <nav className="TopNav">

            <div className="motto">
                    <span>اللي اتكسر يتصلح....❤️</span>
                </div>

                <ul className="List-TopNav">
                    <li className="itemtopnav"> <a href="https://goo.gl/maps/rPgnwTEHpZtTZJE7A" style={{textDecoration:"none",color:'black'}}><UilLocationPoint/> المكان</a></li>
                    <li className="itemtopnav"> <UilClockTen/> دايما فاتحين من : 10:00 <span className="Timezone"> ص </span> لحد  5:00 <span className="Timezone">م</span></li>
                </ul>
              

            </nav>

            <nav className="DownNav">
                <div className="LogoSec"><Link to=""><img src={logo1} className="logoapp"></img></Link></div>



                <div className="ListSec">
                    <ul className="List-DownNav">
                        <li className="itemdownnav"><Link to="MainAboutUs" ><UilInfoCircle />  مين احنا </Link></li>
                        <li className="itemdownnav"><Link to="MainContactUs"><UilAt />اتصل بينا</Link></li>
                        <li className="itemdownnav"> <Link to='MainWork'><UilGlobe/>اعمالنا </Link></li>
                        <li className="itemdownnav"> <Link to="MainNewWork"><UilCog />الشغل ا لمميز </Link><span className="New">جديد</span></li>
                    </ul>
                </div>
               
                <div className="SearchSec" style={{marginRight:'1em'}}>
            
                <a href="https://www.facebook.com/yassenforglass"><Button variant="outline-primary"> <UilFacebookF/> FaceBook</Button></a>
      

                </div>

               


            </nav>
            <BergurMen/>
        </div>
    </React.Fragment>
    );
}
 
export default NavBar;