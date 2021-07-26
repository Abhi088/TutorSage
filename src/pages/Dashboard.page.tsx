import { useEffect } from 'react';
import { useState } from 'react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Datum, fetchGroups } from '../api';

interface Props { }

const Dashboard: FC<Props> = (props) => {

    const [groupData, setGroupData] = useState<Datum[]>();

    useEffect(() => {
        fetchGroups({ status: "all-groups" })
            .then((response) => {
                setGroupData(response);
                console.log(groupData);
            })
            .catch((e) => { console.log(e) });
    }, []);

    return (
        <div>

            This is Dashboard page.
            <Link to="/recordings"><span className="underline text-blue-500">Go to Recordings</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);