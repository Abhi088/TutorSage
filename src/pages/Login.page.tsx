import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/form/InputField';
import Icon from '../components/form/Icon';

interface Props { }

const Login: FC<Props> = (props) => {
    return (
        <div>
            <h1>Log In to CORK</h1>
            <h5>New Here? <Link to="/signup">Create an account</Link></h5>
            <form>
                <InputField name="email" type="email" placeholder="Email" required>
                    <Icon>
                        <>
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </>
                    </Icon>
                </InputField>
                <InputField name="password" type="password" placeholder="Password" required>
                    <Icon>
                        <>
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2">
                            </rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4">
                            </path>
                        </>
                    </Icon>
                </InputField>
                <label htmlFor="showPassword">Show Password</label>
                <input type="checkbox" name="showPassword" />
                <button type="submit">Log In</button>
            </form>
            <Link to="/forgot-password">Forgot Password?</Link>
        </div >
    );
};

Login.defaultProps = {};

export default memo(Login);