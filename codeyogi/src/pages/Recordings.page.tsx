import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props { }

const Recordings: FC<Props> = (props) => {
    return (
        <div>
            This is Recordings page.
            <Link to="/login"><span className="underline text-blue-500">Go to Dashboard</span></Link>
        </div>
    );
};

Recordings.defaultProps = {};

export default memo(Recordings);