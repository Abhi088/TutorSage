import { useEffect } from 'react';
import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

interface Props { }

const Lecture: FC<Props> = (props) => {
    const { lectureNumber, batchNumber } = useParams<any>();
    return (
        <div>This is a lecture page.<br />Lecture #{lectureNumber} of batch #{batchNumber}</div>
    );
};

Lecture.defaultProps = {};

export default memo(Lecture);