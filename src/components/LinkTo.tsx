import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    to: string
    className?: string
    type?: "primary" | "icon"
    children?: React.ReactNode
    onClick?: () => void
}

const LinkTo: FC<Props> = ({ to, className, type, children, onClick }) => {

    if (type === "primary")
        return (
            <Link to={to} className={`text-primary-medium ${className}`}>
                {children}
            </Link>
        );
    else return (
        <Link to={to} className={`flex flex-row font-semibold items-center space-x-5 ${className}`} onClick={onClick}>
            {children}
        </Link >
    );
};

LinkTo.defaultProps = {
    type: "primary"
};

export default memo(LinkTo);