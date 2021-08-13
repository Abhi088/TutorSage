import { FC, memo, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import DashboardPage from './Dashboard.page';
import RecordingsPage from './Recordings.page';
import GroupsPage from './Groups.page';
import LecturePage from './Lecture.page';
import Navbar from '../../components/Navbar';
import { lazy } from "react";
import { useAppSelector } from '../../store';

const UserLazy = lazy(() => import("./User/User.page"));

interface Props {
}

const AppContainer: FC<Props> = (props) => {

    const user = useAppSelector((state) => state.user.byId[state.auth.id!]);
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div>
            <Navbar profileImg={user.profile_pic_url} sidebarToggle={() => setShowSidebar(!showSidebar)}></Navbar>
            <div className="flex flex-row">
                <Sidebar isVisible={showSidebar}></Sidebar>
                <Switch>
                    <Route path='/dashboard'>
                        <DashboardPage></DashboardPage>
                    </Route>
                    <Route path='/recordings'>
                        <RecordingsPage></RecordingsPage>
                    </Route>
                    <Route path='/groups'>
                        <GroupsPage></GroupsPage>
                    </Route>
                    <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                        <LecturePage></LecturePage>
                    </Route>
                    <Route path="/profile">
                        <UserLazy></UserLazy>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);