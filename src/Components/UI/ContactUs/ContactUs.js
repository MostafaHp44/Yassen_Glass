import React from "react";
import './ContactUs.css'
import { UilFastMail,UilFacebookF} from '@iconscout/react-unicons'
import Button from 'react-bootstrap/Button';

const ContactUs = () => {
    return (
    <React.Fragment>

        <div className="MainContactUs" name='MainContactUs'>

            <div className="Contactus">

               <div className="Mail">
                <span> للبيزنس او اي موضوع :</span>
                <span style={{cursor:'pointer'}} className="MailGmail">yassenglass@gmail.com</span>
               </div>

               <div className="Social">
                <span> لو عايز تفاصيل اكتر شرفنا هنا : </span>
                <Button variant="outline-primary"> <UilFacebookF/> FaceBook</Button>{' '}

               </div>
            </div>

           
        </div>
    </React.Fragment>
    );
}
 
export default ContactUs;