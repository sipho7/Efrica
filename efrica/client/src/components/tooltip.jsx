import React from 'react';
import Tooltip from 'react-tooltip';

function Tooltip() {
  const customRender = (props) => {
    return <div>Custom content: {props.text}</div>;
  };

  return (
    <div>
      <button data-tip="Tooltip content">Hover over me</button>
      <Tooltip 
        place="top" 
        type="light" 
        effect="float" 
        children={customRender}
      />
    </div>
  );
}
export default Tooltip;