import React from "react";

const CodeArea = React.forwardRef((props, ref) => {
  return <textarea ref={ref} onChange={props.onChange} placeholder="Type here" />;
});

export default CodeArea;
