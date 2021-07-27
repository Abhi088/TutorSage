import { useEffect } from 'react';
import { useState } from 'react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { fetchGroups } from '../APIs/groups';
import GroupData from '../components/GroupData';
import { Groups } from "../Models/Groups";

interface Props { }

const Dashboard: FC<Props> = (props) => {

    const [groupData, setGroupData] = useState<Groups[]>();
    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        fetchGroups({ status: "all-groups", query: query, limit: limit })
            .then((response) => {
                if (response?.status === 200) {
                    console.log(response?.data.data);
                    setGroupData(response?.data.data);
                } else {
                    console.log("Error while fetching data", response?.status);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [query, limit]);

    return (
        <div className="m-auto mt-20">
            This is Dashboard page.
            <form className="flex flex-row space-x-3 mb-10">
                <input
                    type="text"
                    placeholder="Search Groups"
                    className="w-2/3 border-2 border-black"
                    onChange={(event) => {
                        setQuery(event?.target.value);
                    }}
                />
                <input
                    type="number"
                    placeholder="Groups per page"
                    value={limit}
                    className="w-1/3 border-2 border-black"
                    onChange={
                        (event) => {
                            setLimit(parseInt(event?.target.value));
                        }
                    } />
            </form>

            {/* <button className="w-20 h-10 bg-danger-dark">Click me</button> */}
            {groupData?.map((item, index) => {
                return (<div
                    key={index}
                    className="">
                    <GroupData className={`${(index % 2 === 0) ? "bg-white" : "bg-gray-100"}`} name={item.name} desc={item.description} imgSrc={item.group_image_url}></GroupData>
                </div>);
            })}
            <Link to="/recordings"><span className="underline text-blue-500">Go to Recordings</span></Link>
        </div>
    );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);