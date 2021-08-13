import { FC, memo, useEffect } from 'react';
import { pathActions } from '../../actions/path.actions';

interface Props {
}

const Recordings: FC<Props> = (props) => {

    useEffect(() => { pathActions.setPath(window.location.pathname.split("/").splice(1)); })

    return (
        <div className={`appContainer_min_height flex items-center mx-auto`}>
            This is Recordings page.
        </div>
    );
};

Recordings.defaultProps = {};

export default memo(Recordings);