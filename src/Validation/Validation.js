import React from 'react';



const validation = (props) => {
    // can also use jsx for text long enough/short
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};






export default validation;