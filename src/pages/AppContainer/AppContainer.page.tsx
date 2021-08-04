import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import DashboardPage from './Dashboard.page';
import RecordingsPage from './Recordings.page';
import LecturePage from './Lecture.page';
import Navbar from '../../components/Navbar';

interface Props {
}

const AppContainer: FC<Props> = (props) => {
    return (
        <div>
            <Navbar profileImg="https://designreset.com/cork/ltr/demo4/assets/img/profile-1.jpeg"></Navbar>
            <div className="flex flex-row">
                <Sidebar></Sidebar>
                <Switch>
                    <Route path='/dashboard'>
                        <DashboardPage></DashboardPage>
                    </Route>
                    <Route path='/recordings'>
                        <RecordingsPage></RecordingsPage>
                    </Route>
                    <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                        <LecturePage></LecturePage>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);