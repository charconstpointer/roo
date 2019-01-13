import React, { Component } from "react";

import Message from "./message";

export default class Board extends Component {
  state = {
    messages: []
  };
  componentDidMount() {
    this.connection = new WebSocket("ws://localhost:8080");
    this.connection.onmessage = event => {
      console.log(JSON.parse(event.data));

      this.setState(state => ({
        messages: [...state.messages, JSON.parse(event.data)]
      }));
    };
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div>
          <h4>Currently there are no messages</h4>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.messages.map(message => {
            return (
              <Message
                key={Math.random()}
                body={message.body}
                sender={message.sender}
              />
            );
          })}
        </div>
      );
    }
  }
}
