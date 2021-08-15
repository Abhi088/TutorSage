import { useEffect } from "react";
import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { userQueryOneAction } from "../../../actions/users.action";
import Spinner from "../../../components/Spinner/Spinner";
import { usersByIdSelector } from "../../../selectors/users.selector";
import { useAppSelector } from "../../../store";

interface Props { }

const UserDetails: FC<Props> = (props) => {

    const userId = +useParams<{ userId: string }>().userId;

    const usersById = useAppSelector(usersByIdSelector);

    const dispatch = useDispatch();
    const user = usersById[userId];

    useEffect(() => {
        dispatch(userQueryOneAction(userId));
    }, [userId]); //eslint-disable-line react-hooks/exhaustive-deps

    if (!user) {
        return <Spinner />
    }

    return (
        <div className="mx-auto flex flex-col space-y-10 items-center appContainer_min_height">
            {user.first_name}
        </div>
    );
};

UserDetails.defaultProps = {};

export default memo(UserDetails);