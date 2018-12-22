import React from "react";

const CodeAreaForward = React.forwardRef((props, ref) => {
  return <textarea ref={ref} onChange={props.onChange} placeholder="Type here" />;
});

export default CodeAreaForward;
