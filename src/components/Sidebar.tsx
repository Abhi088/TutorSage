import { FC, memo } from 'react';

interface Props { }

const Sidebar: FC<Props> = (props) => {
    return <div className="h-screen bg-gray-400 w-80">
        This is a sidebar
    </div>;
};

Sidebar.defaultProps = {};

export default memo(Sidebar);