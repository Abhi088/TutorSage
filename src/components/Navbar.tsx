import { useState } from 'react';
import { FC, memo } from 'react';
import { logout } from '../APIs/auth';
import Avatar from '../components/Avatar/Avatar';
import LinkTo from '../components/LinkTo';

interface Props {
    profileImg: string;
}

const Navbar: FC<Props> = ({ profileImg }) => {

    const [showProfileMenu, setShowProfileMenu] = useState(false);

    return (
        <div className="flex flex-row justify-between px-10 py-2 bg-gray-900 items-center">
            <h1 className="text-white text-xl font-semibold">CODEBITS</h1>
            <div onClick={() => { setShowProfileMenu(!showProfileMenu) }}>
                <Avatar imgSrc={profileImg} shape="square" showStatus={false} avatarSize="xs" ></Avatar>
                <div className={`${(showProfileMenu ? "visible" : "hidden")} absolute bg-white border border-black  right-5`}>
                    <ul>
                        <li><LinkTo to="/profile" text="Profile" className="border-b border-black" /></li>
                        <li><button className="" onClick={() => {
                            logout();
                            window.location.href = "/login";
                        }}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

Navbar.defaultProps = {};

export default memo(Navbar);