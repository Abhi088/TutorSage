import { FC, memo } from 'react';
import { meSelector } from '../selectors/user.selectors';
import { useAppSelector } from '../store';

interface Props {
}

const Sidebar: FC<Props> = (props) => {

    const user = useAppSelector(meSelector);

    return <div className="bg-gray-200 w-1/12 p-3 border-r border-gray-300">
        This is a sidebar
        <div className="text-blue-800">{user?.first_name}</div>
    </div>;
};

Sidebar.defaultProps = {};

export default memo(Sidebar);