import React from 'react';
import {withRouter} from 'react-router-dom';

const Home = (props) => {
    console.log(props);
    
    return (
        <div>
            <h2>Pagina Principal</h2>
        </div>
    );
}

export default withRouter(Home);
