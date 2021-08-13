import { FC, memo } from 'react';
import { logout } from '../APIs/auth';
import Icons from './Icons/Icons';
import LinkTo from './LinkTo';
// import { meSelector } from '../selectors/user.selectors';
// import { useAppSelector } from '../store';

interface Props {
    isVisible: boolean;
}

const Sidebar: FC<Props> = ({ isVisible }) => {

    // const user = useAppSelector(meSelector);

    const linkClasses = "hover:bg-gray-300 rounded-lg  px-2 py-2";

    return (
        <div className={`bg-gray-100 w-64 ${(isVisible) ? "" : "hidden"} fixed appContainer_min_height`}>
            <ul className={`space-y-3.5 mt-5`} >
                <li className={`${linkClasses}`}>
                    <LinkTo to="/dashboard" type="icon">
                        <Icons name="dashboard" className={`mr-3`} />
                        Dashboard
                    </LinkTo>
                </li>
                <li className={`${linkClasses}`}>
                    <LinkTo to="/recordings" type="icon">
                        <Icons name="recording" className={`mr-3`} />
                        Recordings
                    </LinkTo>
                </li>
                <li className={`${linkClasses}`}>
                    <LinkTo to="/groups" type="icon">
                        <Icons name="groups" className={`mr-3`} />
                        Groups
                    </LinkTo>
                </li>
                <li className={`${linkClasses}`}>
                    <LinkTo to="/student/report" type="icon" >
                        <Icons name="graph" className={`mr-3`} />
                        Student Report
                    </LinkTo>
                </li>
                <li className={`${linkClasses}`}>
                    <LinkTo to="" type="icon" onClick={() => {
                        logout();
                        window.location.href = "/login";
                    }}>
                        <Icons name="logout" className={`mr-3`} />
                        Logout
                    </LinkTo>
                </li>
            </ul>
        </div >
    );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);