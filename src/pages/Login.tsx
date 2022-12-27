import React from "react";
import { Form, Row, Col, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//
import banner from "../asset/Banner.png";
import ButtonLogin from "../common/ButtonLogin";
import { schemaLogin } from "../common/Schema";
import { Link, useNavigate } from "react-router-dom";

//
import "./Login.css";

type FormValues = {
  email: string;
  password: string;
};
function Login() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = (data: FormValues) => {
    console.log("aaaaa", data);
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
              <Form
                onFinish={handleSubmit(onSubmit)}
  
              >
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter your email" />
                  )}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  )}
                />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
                <ButtonLogin/>
              </Form>
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
