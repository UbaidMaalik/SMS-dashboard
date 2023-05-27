import { Button, Input } from "antd";

const Login = () => {
  return (
    <>
      <div className="login-main-container">
        <div className="login-container">
          <h1 style={{ textAlign: "center" }}>LOG IN</h1>
          <div>
            <label className="label">Username/Email</label>
            <Input
              className="input"
              placeholder="Enter your username"
              prefix={<i className="ri-mail-send-fill"></i>}
            />
          </div>
          <div className="mt-15">
            <label className="label">Password</label>
            <Input
              className="input "
              placeholder="Enter your passsword"
              prefix={<i className="ri-lock-unlock-fill"></i>}
            />
          </div>
          <div className="login-button-container">
            <Button>Login</Button>
          </div>
          <div>
            <p className="forget-password">Forget Password?</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
