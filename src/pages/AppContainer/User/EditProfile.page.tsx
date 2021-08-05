import { FC, memo } from 'react';

interface Props { }

const EditProfile: FC<Props> = (props) => {
    return (
        <div className="text-4xl text-success-light border-success-dark bg-gray-400 px-10 py-3">This is edit Profile Page</div>
    );
};

EditProfile.defaultProps = {};

export default memo(EditProfile);