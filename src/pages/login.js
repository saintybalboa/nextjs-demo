import Link from 'next/link';
import SingleColumn from '../layouts/SingleColumn';
import LoginForm from '../forms/LoginForm';
import config from '../config/config';
import { apiRequest } from '../helpers/api';
import { Card, CardBody, CardTitle } from 'reactstrap';

const onSubmit = async ({ email, password }, e) => {
    await apiRequest({
        route: 'login',
        params: { username: email, password }
    });

    return false;
};

const Login = () => (
  <SingleColumn colClass="col-sm-12 col-md-8 col-lg-5 col-xl-4 col">
      <div className="text-center mb-3">
        <Link data-testid="homepage-link" href="/">
            <img src={config.logo} className="h-6" alt={config.appName} width="64" />
        </Link>
      </div>
      <Card>
          <CardBody>
              <CardTitle>Login to your account</CardTitle>
              <LoginForm onSubmit={onSubmit} />
          </CardBody>
      </Card>
  </SingleColumn>
);

export default Login;
