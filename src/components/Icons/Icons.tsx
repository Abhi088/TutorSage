import { FC, memo } from 'react';

interface Props {
    name: string;
    className?: string;
    onClick?: () => void;
}

const Icon: FC<Props> = ({ className, name, onClick }) => {
    switch (name) {

        // Whenever adding a new icon to project, add a case statement here with name of icon and return the icon
        // Then in the Icon.stories.tsx FILE in the current directory, ADD the name of the icon in the names array

        case "username": return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 stroke-primary-dark fill-primary-light ${className}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={onClick}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        );
        case "email": return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 text-primary-dark fill-primary-light ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={onClick}>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                <circle cx="12" cy="12" r="4"></circle>
            </svg>
        );
        case "password": return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 stroke-primary-dark fill-primary-light ${className}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={onClick}>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            </svg>
        );
        case "cross": return (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 stroke-current stroke-2 ${className}`} viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" data-dismiss="alert" onClick={onClick}>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        );
        case "list": return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`rounded-full cursor-pointer hover:bg-gray-200 h-10 w-10 px-2.5 ${className}`} onClick={onClick}>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        );
        case "logo": return (
            <svg className={`h-9 w-9 ${className}`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 672 723" onClick={onClick}>
                <g>
                    <g>
                        <path fill="#eaf1ff" d="M213.9,584.4c-47.4-25.5-84.7-60.8-111.8-106.1C75,433.1,61.4,382,61.4,324.9c0-57,13.6-108.1,40.7-153.3 S166.5,91,213.9,65.5s100.7-38.2,159.9-38.2c49.9,0,95,8.8,135.3,26.3s74.1,42.8,101.5,75.7l-85.5,78.9 c-38.9-44.9-87.2-67.4-144.7-67.4c-35.6,0-67.4,7.8-95.4,23.4s-49.7,37.4-65.4,65.4c-15.6,28-23.4,59.8-23.4,95.4 s7.8,67.4,23.4,95.4s37.4,49.7,65.4,65.4c28,15.6,59.7,23.4,95.4,23.4c57.6,0,105.8-22.7,144.7-68.2l85.5,78.9 c-27.4,33.4-61.4,58.9-102,76.5c-40.6,17.5-85.8,26.3-135.7,26.3C314.3,622.7,261.3,809.9,213.9,584.4z"></path>
                    </g>
                    <circle fill="#FFBB44" cx="375.4" cy="322.9" r="100"></circle>
                </g>
            </svg>
        );
        case "recording": return (
            <svg className={`h-7 w-7 ${className}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
                <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z"></path>
            </svg>
        );
        case "dashboard": return (
            <svg className={`h-7 w-7 ${className}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
            </svg>
        );
        case "groups": return (
            <svg className={`h-7 w-7 ${className}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
        );
        case "user": return (
            <svg className={`${className}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.75em" width="1.75em" xmlns="http://www.w3.org/2000/svg">
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
        );
        // case "graph": return (
        //     <svg className={`h-7 w-7 ${className}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        //         <path fillRule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path>
        //     </svg>
        // );
        case "logout": return (
            <svg className={`${className}`} stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1.75em" width="1.75em" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                </path>
            </svg>
        );
        default: return (<></>);
    }
};

Icon.defaultProps = {};

export default memo(Icon);