import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, FormFeedback, Label, Input } from 'reactstrap';

const LoginForm = ({ onSubmit }) => {
    const { register, handleSubmit, errors } = useForm();
    const isInvalidEmail = errors.email ? true : false;
    const isInvalidPassword = errors.password ? true : false;

    return (
        <Form className="login" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    innerRef={register({ required: 'Please enter a valid email address' })}
                    invalid={isInvalidEmail}
                />
                {isInvalidEmail && <FormFeedback>{errors.email && errors.email.message}</FormFeedback>}
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    innerRef={register({ required: 'Please enter a password' })}
                    invalid={isInvalidPassword}
                />
                {isInvalidPassword && <FormFeedback>{errors.password && errors.password.message}</FormFeedback>}
            </FormGroup>
            <Button type="submit" block={true} color="primary">Login</Button>
        </Form>
    );
};

export default LoginForm;
