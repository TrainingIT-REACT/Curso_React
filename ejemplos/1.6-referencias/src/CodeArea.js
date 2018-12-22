import React from "react";

class CodeArea extends React.Component {
  constructor(props) {
    super(props);
    // Guardamos la referencia al nodo input
    this.textarea = React.createRef();
  }

  focusTextArea() {
    this.textarea.current.focus();
  }

  render() {
    return <textarea ref={this.textarea} onChange={this.props.onChange}
      placeholder="Type here" />;
  }
}

export default CodeArea;
