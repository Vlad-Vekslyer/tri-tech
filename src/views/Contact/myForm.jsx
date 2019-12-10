import React from "react";
import "./style.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mrgbyelz"
        method="POST"
      >
        <div className="formarea">
          <p id="name">Name:</p>
          <input type="text" name="name" id="info1" required />
          <p id="email">Email:</p>
          <input type="email" name="email" id="info2" required />
          <div id="messageArea">
            <p id="messages">Message:</p>
            <textarea
              type="text"
              name="message"
              cols="60"
              rows="7"
              id="messagetext"
              required
            />
          </div>
          <button id="submit">Submit Form</button>
          {status === "SUCCESS" ? <p id="thanks">Thanks!</p> : <p />}
          {status === "ERROR" && <p id="error">Ooops! There was an error.</p>}
        </div>
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
