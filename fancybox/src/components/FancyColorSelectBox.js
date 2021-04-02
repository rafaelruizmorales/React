import React from 'react'

const FancyColorSelectBox = (props) => {
    return (
        <div className={'mini-box box-' + props.color} onClick={() => props.onColorChange(props.color)} />
    );
}

export default FancyColorSelectBox