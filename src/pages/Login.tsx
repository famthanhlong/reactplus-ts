import React from "react";
import { Row, Col } from "antd";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input } from "formik-antd";
//
import banner from "../asset/Banner.png";
import ButtonLogin from "../common/ButtonLogin";
import { schemaLogin } from "../common/Schema";
//
import "../styles/Login.css";

type FormValues = {
  email: string;
  password: string;
};
function Login() {
  const navigate = useNavigate();

  const handleSubmit = (data: FormValues) => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="main-login">
        <div className="banner-login">
          <img src={banner} alt="Banner" />
        </div>
        <div className="title-login">
          <p>Welcome back to</p>
          <h2>Our reminder</h2>
        </div>
        <div className="form-login">
          <Row>
            <Col span={20} offset={2}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={schemaLogin}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                    {errors.email && touched.email && (
                      <div className="errors-message">{errors.email}</div>
                    )}
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                    {errors.password && touched.password && (
                      <div className="errors-message">{errors.password}</div>
                    )}
                    <ButtonLogin />
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </div>
        <div className="res-login">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="res-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
