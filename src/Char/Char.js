import React from 'react';

// 4. 
const char = (props) => {
    // inline styles
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'


    }
    
    return (
        // 4. was set by {style} to refer to inline above   
        // 5. props.character
        // 6. onClick 
        <div style={style} onCLick={props.clicked}>
            {props.character}
        </div>
    )

};



export default char;