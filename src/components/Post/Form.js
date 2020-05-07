import React from 'react';

import formHandler from './FormHandler';

const Form = ({labelTitle, labelContent, buttonName, handleChange, handleSubmit}) => {

    return (
        <form>
            <label htmlFor="title">{labelTitle}</label>
            <input type="text" id="title" onChange={handleChange} /> <br />
            <label htmlFor="content">{labelContent}</label>
            <input type="text" id="content" onChange={handleChange} />
            <button onClick={handleSubmit}>{buttonName}</button>
        </form>
    );
}

export default formHandler(Form);

// export const AddForm = formHandler(Form);
