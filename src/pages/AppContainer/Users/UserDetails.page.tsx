import { useEffect } from "react";
import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { userQueryOneAction } from "../../../actions/users.action";
import Avatar from "../../../components/Avatar/Avatar";
import LinkTo from "../../../components/LinkTo";
import Spinner from "../../../components/Spinner/Spinner";
import { selectedUserSelector, userLoadingOneErrorSelector, userLoadingOneSelector } from "../../../selectors/users.selector";
import { useAppSelector } from "../../../store";

interface Props { }

const UserDetails: FC<Props> = (props) => {

    const userId = +useParams<{ userId: string }>().userId;

    const user = useAppSelector(selectedUserSelector);
    const loading = useAppSelector(userLoadingOneSelector);
    const error = useAppSelector(userLoadingOneErrorSelector);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(userQueryOneAction(userId));
    }, [userId]); //eslint-disable-line react-hooks/exhaustive-deps

    if (!user && !loading) {
        return <div>
            {error}
            <LinkTo to={`/users/${userId + 1}`}>Next User</LinkTo>
        </div>
    }

    return (
        <div className="mx-auto flex flex-col space-y-10 items-center appContainer_min_height">
            {loading && <Spinner type="button" />}
            {user && <div>{user.first_name}
                <br /><br />Bio: {user.bio}<br /><br /><Avatar imgSrc={user.profile_pic_url}></Avatar></div>}
            <LinkTo to={`/users/${userId + 1}`}>Next User</LinkTo>
            <br /> i have yet not done the styling on website
        </div>
    );
};

UserDetails.defaultProps = {};

export default memo(UserDetails);