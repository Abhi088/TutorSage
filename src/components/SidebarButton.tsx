import React, { FC, memo } from 'react';
import { pathSelector } from '../selectors/path.selectors';
import { useAppSelector } from '../store';
import Icons from './Icons/Icons';
import LinkTo from './LinkTo';

interface Props {
    name: string;
    link: string;
    iconName: string;
    onClick?: (event: any) => void;
}

const SidebarButton: FC<Props> = ({ name, link, iconName, onClick }) => {

    const path = useAppSelector(pathSelector)[0];

    return (
        <li className={`rounded-lg  px-2 py-2 ${(path === name) ? "bg-white" : "hover:bg-gray-300"}`} onClick={onClick}>
            <LinkTo to={link} type="icon" className={`justify-between`}>
                <div className={`flex flex-row items-center`}>
                    <Icons name={iconName} className={`mr-3`} />
                    {name[0].toUpperCase() + name.substring(1)}
                </div>
                <span className={`${(path === name) ? "" : "hidden"} text-bold`}>&gt;</span>
            </LinkTo>
        </li>
    );
};

SidebarButton.defaultProps = {};

export default memo(SidebarButton);