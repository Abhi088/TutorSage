import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { pathActions } from "../../../actions/path.actions";
import { usersQueryAction } from "../../../actions/users.action";
import LinkTo from "../../../components/LinkTo";
import UserData from "../../../components/UserData";
import { usersFetchSelector } from "../../../selectors/users.selector";
import { useAppSelector } from "../../../store";

interface Props { }

const Users: FC<Props> = (props) => {

    useEffect(() => { pathActions.setPath(window.location.pathname.split("/").splice(1)); })

    const dispatch = useDispatch();

    const users = useAppSelector(usersFetchSelector);

    useEffect(() => {
        dispatch(usersQueryAction());
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {users.map((user, index) => {
                return (<div key={user.id}>
                    <LinkTo to={`/users/${user.id}`}>
                        <UserData
                            className={`${(index % 2 === 0) ? "bg-white" : "bg-gray-100"}`}
                            name={`${user.first_name} ${user.middle_name ? user.middle_name + " " : ""}${user.last_name ? user.last_name : ""}`}
                            desc={user.bio}
                            imgSrc={user.profile_pic_url}
                        ></UserData>
                    </LinkTo>
                </div>);
            })}
        </div>
    );
};

Users.defaultProps = {};

export default memo(Users);