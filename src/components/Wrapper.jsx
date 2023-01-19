import React from 'react';
import main from './FunctionMain'

function Wrapper(props) {
    const style = {
        backgroundColor: 'skyblue',
    };

    return (
        <div style={style}>
            {props.children}
        </div>
    );

}

export default Wrapper;