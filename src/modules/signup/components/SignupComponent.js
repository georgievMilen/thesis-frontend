import React from "react";
import { Error, SubmitButton, Label, Input } from "../../../components/common";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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

const SignupComponent = ({
  handleEmail,
  handleFirstName,
  handleLastName,
  handlePassword,
  handleSubmit,
  handleUsername,
  errors
}) => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="First name"
                      autoComplete="firstname"
                      onChange={handleFirstName}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Last name"
                      autoComplete="lastname"
                      onChange={handleLastName}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={handleEmail}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      onChange={handleUsername}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={handlePassword}
                    />
                  </CInputGroup>

                  <CButton color="success" onClick={handleSubmit} block>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    // <form>
    //   <h3>Sign Up</h3>

    //   <div className="form-group">
    //     <Label>First name</Label>
    //     <Input
    //       type="text"
    //       placeholder="First name"
    //       onChange={handleFirstName}
    //     />
    //   </div>

    //   <div className="form-group">
    //     <Label>Last name</Label>
    //     <Input type="text" placeholder="Last name" onChange={handleLastName} />
    //   </div>

    //   <div className="form-group">
    //     <Label>Username</Label>
    //     <Input type="text" placeholder="Username" onChange={handleUsername} />
    //   </div>
    //   <div className="form-group">
    //     <Label>Email address</Label>
    //     <Input type="email" placeholder="Enter email" onChange={handleEmail} />
    //   </div>

    //   <div className="form-group">
    //     <Label>Password</Label>
    //     <Input
    //       type="password"
    //       placeholder="********"
    //       onChange={handlePassword}
    //     />
    //   </div>
    //   {errors && <Error>{errors}</Error>}
    //   <SubmitButton onClick={handleSubmit}>Sign Up</SubmitButton>
    //   <p className="forgot-password text-right">
    //     Already registered <a href="/login">Login in?</a>
    //   </p>
    // </form>
  );
};
export { SignupComponent };
