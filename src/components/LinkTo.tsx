import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    to: string,
    className?: string,
    text: string
}

const LinkTo: FC<Props> = ({ to, className, text }) => {
    return (
        <Link to={to} className={`text-primary-dark ${className}`}>{text}</Link>
    );
};

LinkTo.defaultProps = {};

export default memo(LinkTo);