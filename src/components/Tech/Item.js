import React from 'react';

const TechItem = (props) => {
  return (
    <div>
      {props.title}
      <button onClick={() => props.onClick(props.id)}>Удалить</button>
    </div>
  )
}

export default TechItem;
