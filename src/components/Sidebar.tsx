import { FC, memo } from 'react';
import { logout } from '../APIs/auth';

interface Props { }

const Sidebar: FC<Props> = (props) => {
    return <div className="bg-gray-400 w-1/12">
        This is a sidebar
        <button className="bg-primary-medium w-full ring-2 ring-primary-dark rounded-full mt-10" onClick={() => {
            logout();
            window.location.href = "/login";
        }}>Logout</button>
    </div>;
};

Sidebar.defaultProps = {};

export default memo(Sidebar);