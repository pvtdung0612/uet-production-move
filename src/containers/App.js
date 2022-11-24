import React from "react";
import Login from "../components/Auth/Login";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Login></Login>
      </div>
    );
  }
}

export default App; // Don’t forget to use export default!
