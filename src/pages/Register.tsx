//
import { Formik } from "formik";
import { Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input } from "formik-antd";
//
import banner from "../asset/Banner.png";
import ButtonRes from "../common/ButtonRes";
import { schemaRegister } from "../common/Schema";
import { postData } from "../service/PostData";
//
import "./Register.css";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (data: FormValues) => {
    const { name, email, password } = data;
    await postData("users", { name, email, password });
    navigate("/login");
  };
  return (
    <div>
      <div className="main-res">
        <div className="banner-res">
          <img src={banner} alt="Banner" />
        </div>
        <div className="title-res">
          <h2>Get’s things done with TODO</h2>
          <p>Let’s help you meet up your tasks</p>
        </div>
        <div className="form-res">
          <Row>
            <Col span={20} offset={2}>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={schemaRegister}
                onSubmit={(data) => {
                  handleSubmit(data);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Input name="name" placeholder="Enter Your Name" />
                    {errors.name && touched.name ? (
                      <div className="errors-message">{errors.name}</div>
                    ) : null}
                    <Input name="email" placeholder="Enter Your Email" />
                    {errors.email && touched.email ? (
                      <div className="errors-message">{errors.email}</div>
                    ) : null}
                    <Input
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="errors-message">{errors.password}</div>
                    ) : null}
                    <Input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Your Password"
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div className="errors-message">
                        {errors.confirmPassword}
                      </div>
                    ) : null}
                    <ButtonRes />
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </div>
        <div className="signIn-res">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="signIn-link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
