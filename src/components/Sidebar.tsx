import { FC, memo, useContext } from 'react';
import { logout } from '../APIs/auth';
import AppContext from '../App.context';

interface Props {
}

const Sidebar: FC<Props> = (props) => {

    const { user } = useContext(AppContext);

    return <div className="bg-gray-400 w-1/12">
        This is a sidebar
        <div className="text-blue-800">{user!.first_name}</div>
        <button className="bg-primary-medium w-full ring-2 ring-primary-dark rounded-full mt-10" onClick={() => {
            logout();
            window.location.href = "/login";
        }}>Logout</button>
    </div>;
};

Sidebar.defaultProps = {};

export default memo(Sidebar);