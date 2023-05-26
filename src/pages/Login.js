
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from "antd";


const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

 
  // };
  return (
    <>
      {/* <Container>
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
      </Container> */}
      <div className='login-main-container'>
        <div className='login-container'>
            <h1 style={{textAlign:'center'}} >log In</h1>
            <div>
  <label className='label'>Username/Email</label>
        <Input className='input' placeholder='Enter your username' />
            </div>
        <div className='mt-15'>

  <label className='label'>Password</label>
        <Input className='input ' placeholder='Enter your passsword' />
        </div>
        <div className='login-button-container'>
        <Button >Login</Button>
        </div>
        <div>
           <p className='forget-password'>Forget Password?</p>
        </div>
       {/* <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"  className='input'/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form> */}
    
   
        </div>
      </div>
    </>
  );
};

export default Login;
