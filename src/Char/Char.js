import React from 'react';


const char = (props) => {
    // inline styles
    const style = {
        display: 'inline-block',
        padiing: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'


    }
    
    return (
        // 6.
        <div style={style} onCLick={props.clicked}>
            {props.character}
        </div>
    )

};



export default char;