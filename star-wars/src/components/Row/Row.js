import React from 'react';

const Row = ({left, right}) =>{

    return(
        <React.Fragment>
                <div className="col-md-6">
                    { left }
                </div>
                <div className="col-md-6">
                   { right }
                </div>
        </React.Fragment>
    )
}

export default Row