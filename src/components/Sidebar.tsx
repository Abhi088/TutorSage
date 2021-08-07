import { FC, memo } from 'react';
import { logout } from '../APIs/auth';
import { meSelector } from '../selectors/user.selectors';
import { useAppSelector } from '../store';

interface Props {
}

const Sidebar: FC<Props> = (props) => {

    const user = useAppSelector(meSelector);

    return <div className="bg-gray-200 w-1/12 p-3 border-r border-gray-300">
        This is a sidebar
        <div className="text-blue-800">{user?.first_name}</div>
        <button className="bg-primary-medium w-full ring-2 ring-primary-dark rounded-full mt-10" onClick={() => {
            logout();
            window.location.href = "/login";
        }}>Logout</button>
    </div>;
};

Sidebar.defaultProps = {};

export default memo(Sidebar);