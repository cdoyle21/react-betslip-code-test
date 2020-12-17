import React from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';

const layout = props  => {
    return (
        <Aux>
            <main className="content">
                {props.children}
            </main>
        </Aux>
    )
};

export default layout;