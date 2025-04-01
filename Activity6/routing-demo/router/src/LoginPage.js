import React from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

const LoginPage = (props) => {
  let navigate = useNavigate();
  let location = useLocation();

  let state = location.state;
  let from = state?.from?.pathname ? state.from.pathname : '/';
  let text = '';

  const handleLogin = () => {
    console.log('handleLogin from ', from);
    console.log('handleLogin navigate ', navigate);
    props.onClick(from, navigate);
  };

  console.log('in LoginPage', props);

  if (from !== '/') text = <h3>You must login to visit "{from}"</h3>;

  return (
    <div>
      {text}
      <button onClick={() => handleLogin()}>Login Here</button>
    </div>
  );
};

export default LoginPage;
