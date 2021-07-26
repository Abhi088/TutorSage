import { useEffect } from 'react';
import { useState } from 'react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Datum, fetchGroups } from '../api';

interface Props { }

const Dashboard: FC<Props> = (props) => {

    const [groupData, setGroupData] = useState<Datum[]>();
    const [query, setQuery] = useState("");


    useEffect(() => {
        fetchGroups({ status: "all-groups", query: query })
            .then((response) => {
                setGroupData(response?.data.data);
                console.log(groupData);
            })
            .catch((e) => { console.log(e) });
    }, [query, groupData]);

    return (
        <div>
            <input type="text" onChange={() => {
                setQuery("a")
            }} />
            This is Dashboard page.
            <Link to="/recordings"><span className="underline text-blue-500">Go to Recordings</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);