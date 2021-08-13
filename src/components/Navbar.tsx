import { useState } from 'react';
import { FC, memo } from 'react';
import { logout } from '../APIs/auth';
import Avatar from '../components/Avatar/Avatar';
import LinkTo from '../components/LinkTo';
import Icons from './Icons/Icons';

interface Props {
    profileImg: string;
    sidebarToggle: () => void;
}

const Navbar: FC<Props> = ({ profileImg, sidebarToggle }) => {

    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const path = window.location.pathname.split("/").splice(1).map((item, index) => item.substr(0, 1).toUpperCase() + item.substring(1)).join(" / ");

    return (
        <div className={`flex flex-col w-full sticky top-0`}>
            <div className="flex flex-row justify-between px-5 py-2 bg-gray-900 items-center">
                <div className={`flex flex-row items-center space-x-3.5`}>
                    <Icons name="logo" />
                    <h1 className="text-white text-xl font-semibold">CODEBITS</h1>
                </div>
                <div onClick={() => { setShowProfileMenu(!showProfileMenu) }}>
                    <Avatar imgSrc={profileImg} shape="square" showStatus={false} avatarSize="xs" ></Avatar>
                    <div className={`${(showProfileMenu ? "visible" : "hidden")} absolute bg-white border border-black  right-5`}>
                        <ul>
                            <li><LinkTo to="/profile" className="border-b border-black">Profile</LinkTo></li>
                            <li><LinkTo to="" type="icon" onClick={() => {
                                logout();
                                window.location.href = "/login";
                            }}>
                                Logout
                            </LinkTo></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`flex flex-row items-center px-5 py-1.5 bg-white`}>
                <Icons name="list" onClick={sidebarToggle} />
                {path}
            </div>
        </div>
    );
};

Navbar.defaultProps = {};

export default memo(Navbar);