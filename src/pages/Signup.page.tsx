import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import AuthHero from '../components/AuthHero';

interface Props { }

const Signup: FC<Props> = (props) => {
    return (
        <div className="flex flex-row">
            <div>
                This is Signup page.
                Already have an account. {" "}
                <Link to="/login"><span className="underline text-blue-500">Click Here</span></Link>
            </div>
        </div>
    );
};

Signup.defaultProps = {};

export default memo(Signup);