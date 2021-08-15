import { FC, memo } from 'react';
import { logout } from '../APIs/auth';
import SidebarButton from './SidebarButton';
// import { meSelector } from '../selectors/user.selectors';
// import { useAppSelector } from '../store';

interface Props {
    isVisible: boolean;
}

const Sidebar: FC<Props> = ({ isVisible }) => {

    // const user = useAppSelector(meSelector);

    return (
        <div className={`bg-gray-100 w-72 ${(isVisible) ? "" : "hidden"} p-3`}>
            <ul className={`space-y-3.5 mt-5`} >
                <SidebarButton name="dashboard" iconName="dashboard" link="/dashboard" />
                <SidebarButton name="recordings" iconName="recording" link="/recordings" />
                <SidebarButton name="groups" iconName="groups" link="/groups" />
                <SidebarButton name="users" iconName="graph" link="/users" />
                <SidebarButton name="logout" iconName="logout" link="" onClick={() => {
                    logout();
                    window.location.href = "/login";
                }} />
            </ul>
        </div >
    );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);