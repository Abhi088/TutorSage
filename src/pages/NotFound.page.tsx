import { FC, memo } from 'react';

interface Props { }

const NotFound: FC<Props> = (props) => {
    return (
        <div>Sorry the page not found</div>
    );
};

NotFound.defaultProps = {};

export default memo(NotFound);