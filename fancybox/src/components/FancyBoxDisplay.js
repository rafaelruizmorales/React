import React from 'react';

const FancyBoxDisplay = (props) => {
    return (
        <div className={'box box-' + props.color}>
            <p>{props.color}</p>
        </div>
    );
}

export default FancyBoxDisplay;