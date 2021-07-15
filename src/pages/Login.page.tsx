import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props { }

const Login: FC<Props> = (props) => {
    return (
        <div>
            This is login page.
            Don't have an account, {" "}
            <Link to="/signup"><span className="underline text-blue-500">Click Here</span></Link>
            <Link to="/dashboard"><span className="underline text-blue-500">Go to Dashboard</span></Link>
        </div>
    );
};

Login.defaultProps = {};

export default memo(Login);