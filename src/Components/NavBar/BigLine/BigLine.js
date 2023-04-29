import React from "react";
import './BigLine.css'
import  { useState, useEffect,useCallback} from 'react';


const BigLine = () => {
    const [Text, setText] = useState('');
    const names = [
        'سبحان الله ', 
        'الحمدالله', 
        'لا اله الا الله ',
        "الله اكبر ",
        "لا حول ولا قوة الا بالله ",
        "صلي علي محمد"
    ]
    
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setText(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
    <React.Fragment>
        <div className="MainBigLine">
        <div className="news-container">

        <div className="news">
        <a href="#" className="news-single active"> {Text}</a>

      

      </div>

      <div className="news-heading">
        <span>قول</span>
      </div>

    
    </div>


    <script src="https://cdn.jsdelivr.net/gh/livebloggerofficial/News-Ticker@main/main.js"></script>
        </div>
    </React.Fragment>
    );
}
 
export default BigLine;