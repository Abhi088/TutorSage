import { FC, memo } from 'react';
import { logout } from '../APIs/auth';

interface Props { }

const Sidebar: FC<Props> = (props) => {
    return <div className="h-screen fixed bg-gray-400 w-80">
        This is a sidebar
        <button onClick={() => {
            logout();
            window.location.href = "/login";
        }}>Logout</button>
    </div>;
};

Sidebar.defaultProps = {};

export default memo(Sidebar);