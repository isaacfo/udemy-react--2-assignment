import React from 'react';


// 2.
const validation = (props) => {
    // can also use jsx for text long enough/short
    let validationMessage = 'Text long enough';
    // 3. determines when to display long enough or too short
    if (props.inputLength <= 5) {
        validationMessage = 'Text too short';
    }
    return (
        <div>
            {/* will dispaly the strings from above at set intervals */}
            <p>{validationMessage}</p>
        </div>
    );
};






export default validation;