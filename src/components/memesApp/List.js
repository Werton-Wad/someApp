import React from 'react';

import GenerateForm from './GenerateForm';

const List = (props) => {
    const { memes, getActiveMeme, idActiveMeme } = props;
    return (
        <div>
        <div className="memes__wrapper">
            {memes.map(mem => (
                <div key={mem.id} style={{ width: '200px', height: '200px' }}>
                    <img className="memes" src={mem.url} onClick={(e) => getActiveMeme(e, mem.id)} />
                </div>
            ))}
        </div>
        <GenerateForm idActiveMeme={idActiveMeme} />   
        </div>
    );
}

export default List;