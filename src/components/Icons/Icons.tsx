import { FC, memo } from 'react';

interface Props {
    name: string;
    className?: string;
}

const Icon: FC<Props> = ({ className, name }) => {
    switch (name) {

        // Whenever adding a new icon to project, add a case statement here with name of icon and return the icon
        // Then in the Icon.stories.tsx FILE in the current directory, ADD the name of the icon in the names array

        case "username": return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 stroke-primary-dark fill-primary-light ${className}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        );
        case "email": return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 text-primary-dark fill-primary-light ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                <circle cx="12" cy="12" r="4"></circle>
            </svg>
        );
        case "password": return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 stroke-primary-dark fill-primary-light ${className}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            </svg>
        );
        case "cross": return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 stroke-current stroke-2`} viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" data-dismiss="alert">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        );
        default: return (<></>);
    }
};

Icon.defaultProps = {};

export default memo(Icon);