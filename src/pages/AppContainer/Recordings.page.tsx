import { FC, memo } from 'react';

interface Props { }

const Recordings: FC<Props> = (props) => {
    return (
        <div className={`appContainer_min_height flex items-center mx-auto`}>
            This is Recordings page.
        </div>
    );
};

Recordings.defaultProps = {};

export default memo(Recordings);