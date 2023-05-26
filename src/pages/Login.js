// import { useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { Button, Checkbox, Form, Input } from "antd";
// import { useState } from "react";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <Container>
        <Row className="main-login">
          <Col className="login-left" md={7} sm={7} lg={7}>
            <Row className="justify-content-center form">
              <Col md={5} sm={5} lg={5}>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Email!",
                      },
                    ]}
                  >
                    <Input
                      className="input"
                      prefix={<i className="ri-mail-send-fill"></i>}
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Password!",
                      },
                    ]}
                  >
                    <Input
                      className="input"
                      prefix={<i className="ri-lock-unlock-fill"></i>}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                      Create Account
                    </a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login login-form-button"
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col md={5} sm={5} lg={5}>
            <Image src="./images/Logo.png" className="d-block mx-auto logo" />
            <Image src="./images/Ellipse 5.png" className="ellipse1" />
            <Image src="./images/Ellipse 6.png" className="ellipse2" />
            <Image src="./images/Ellipse 7.png" className="ellipse3" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
