import React from "react";
import './NewWork.css'
import Tool from "./picofnewwork/Tool";
const  NewWork = () => {
    return (
    <React.Fragment>
        <div className="MainNewWork">

            <div className="sn">
<span className="spacfic"> الشغل المميز </span>

<span className="New">جديد</span>

            </div>
          
            <div className="BigCard">
                <Tool/>
            </div>
        </div>
    </React.Fragment>
    );
}
 
export default  NewWork;