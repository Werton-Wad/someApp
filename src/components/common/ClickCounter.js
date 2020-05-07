import React from 'react';

import WidthDocumentClicks from './WithDocumentClicks';

const ClickCounter = ({ count }) => {
    return(
        <div style={{width: '200px', height: '100px', position: 'fixed', right: 0, backgroundColor: 'lightblue'}}>
            Кликов по странице: {count}
        </div>
    )
}

export default WidthDocumentClicks(ClickCounter);