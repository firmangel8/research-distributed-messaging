import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001",
      increment: 0,
      errInc : 0,
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data, increment: this.state.increment+1 }));
    
  }

  render() {
    const { response } = this.state;
    console.log(this.state.increment);
    localStorage.setItem("RECORDS",this.state.increment);
    response
      ? localStorage.setItem("SUCCESS", this.state.increment)
      : localStorage.setItem("LOSS", this.state.errInc++);
    return (
      <div className="container-fluid h-100 justify-content-center">
        <div className="row justify-content-center align-middle h-100">
          <div className="col-4" />
          <div className="col-2">
            <div className="container-custom">
              <div className="loader">
                <span className="top" />
                <span className="bottom" />
              </div>
            </div>
          </div>
          <div className="col-4 align-self-center">
            {response ? <p>Consume : {response}</p> : <p>Loading...</p>}
          </div>
          <div className="col-4" />
        </div>
        <footer>
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <span className="text-muted">&copy; 2019 Distributed Messaging with SocketIO - Teguh Dermawan</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
