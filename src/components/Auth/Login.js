import React, { Component } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Login.css";
import { handleLoginAPI } from "../../services/accountService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  handleOnChangeUsername = (event) => {
    // console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    // console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = async () => {
    await handleLoginAPI(this.state.username, this.state.password);
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow className="login-card d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-4 text-uppercase">Login</h2>

                <div className="panel-input">
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Username"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    onChange={(event) => this.handleOnChangeUsername(event)}
                  />
                  <div className="input-password">
                    <MDBInput
                      wrapperClass="mb-4"
                      labelClass="text-white"
                      label="Password"
                      id="formControlLg"
                      type={this.state.isShowPassword ? "text" : "password"}
                      size="lg"
                      onChange={(event) => this.handleOnChangePassword(event)}
                    />
                    <span
                      className="image-password-eye"
                      onClick={() => this.handleShowHidePassword()}
                    >
                      <i
                        class={
                          this.state.isShowPassword
                            ? "fa-solid fa-eye"
                            : "fa-sharp fa-solid fa-eye-slash"
                        }
                      ></i>
                    </span>
                  </div>
                </div>
                <MDBBtn
                  outline
                  className="mx-2 px-5"
                  size="lg"
                  onClick={() => this.handleLogin()}
                >
                  Login
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Login; // Don’t forget to use export default
