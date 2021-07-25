import { FC, memo } from 'react';

interface Props {
    children?: React.ReactElement;
    className?: string;
}

const Icon: FC<Props> = ({ children, className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 stroke-primary-dark fill-primary-medium ${className}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {children}
        </svg>
    );
};

Icon.defaultProps = {};

export default memo(Icon);