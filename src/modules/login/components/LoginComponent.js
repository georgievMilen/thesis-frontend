import React from "react";
import { Link } from "react-router-dom";
import { Error } from "../../../components/common";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const LoginComponent = ({
  handleSubmit,
  email,
  handleEmailInput,
  password,
  hanglePasswordInput,
  error
}) => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Email address"
                        autoComplete="email"
                        onChange={handleEmailInput}
                        value={email}
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter password"
                        value={password}
                        onChange={hanglePasswordInput}
                      />
                    </CInputGroup>
                    {error && <Error>{error}</Error>}
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={handleSubmit}
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Don't have an account?</p>
                    <Link to="/signup">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    // <form>
    //   <h3>Login</h3>

    //   <div className="form-group">
    //     <label>Email address</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       placeholder="Enter email"
    //       onChange={handleEmailInput}
    //       value={email}
    //     />
    //   </div>

    //   <div className="form-group">
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       placeholder="Enter password"
    //       value={password}
    //       onChange={hanglePasswordInput}
    //     />
    //   </div>
    //   {error && <p className="error">{error.msg}</p>}
    //   <button
    //     type="submit"
    //     className="btn btn-primary btn-block"
    //     onClick={handleSubmit}
    //   >
    //     Submit
    //   </button>
    //   <p className="forgot-password text-right">
    //     Forgot
    //     {/* <a href="#">password?</a> */}
    //   </p>
    //   <p className="forgot-password text-right">
    //     Don't have an account? <a href="/signup">Sign up!</a>
    //   </p>
    // </form>
  );
};

export { LoginComponent };
