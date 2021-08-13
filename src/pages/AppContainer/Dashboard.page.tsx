import { useEffect } from 'react';
import { FC, memo } from 'react';
import { pathActions } from '../../actions/path.actions';
import { meSelector } from '../../selectors/user.selectors';
import { useAppSelector } from '../../store';

interface Props { }

const Dashboard: FC<Props> = (props) => {

    const user = useAppSelector(meSelector);

    useEffect(() => { pathActions.setPath(window.location.pathname.split("/").splice(1)); })

    return (
        <div className="ml-64 flex items-center appContainer_min_height">
            <div className="m-auto">Welcome {user?.first_name}</div>
        </div>
    );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);