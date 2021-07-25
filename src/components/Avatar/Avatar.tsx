import React from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    avatarSize?: "large" | "medium" | "small";
    showStatus?: boolean;
    onlineStatus?: boolean;
    imgSrc: string;
    shape?: "circular" | "square";
}

const Avatar: React.FC<Props> = ({
    avatarSize,
    showStatus,
    onlineStatus,
    imgSrc,
    shape
}) => {
    let avatarClass = "";
    let statusClass = "";
    if (avatarSize === "large") {
        if (shape === "circular") {
            avatarClass = " h-20 w-20 rounded-full ";
            statusClass = " h-5 w-5 border-3 left-3/4 bottom-1/3 ";
        }
        else {
            avatarClass = " h-20 w-20 rounded-lg ";
            statusClass = " h-5 w-5 border-3 left-3/4 bottom-1/4 ";
        }
    }
    else if (avatarSize === "medium") {
        if (shape === "circular") {
            avatarClass = " h-14 w-14 rounded-full ";
            statusClass = " h-4 w-4 border-3 left-3/4 bottom-1/3 ";
        }
        else {
            avatarClass = " h-14 w-14 rounded-lg ";
            statusClass = " h-4 w-4 border-3 left-3/4 bottom-1/4 ";
        }
    }
    else {
        if (shape === "circular") {
            avatarClass = " h-10 w-10 rounded-full ";
            statusClass = " h-3 w-3 border-2 left-3/4 bottom-1/3 ";
        }
        else {
            avatarClass = " h-10 w-10 rounded-lg ";
            statusClass = " h-3 w-3 border-2 left-3/4 bottom-1/4 ";
        }
    }

    return (
        <div className={`${avatarClass} `}>
            <img src={imgSrc} alt="avatar" className={`${avatarClass} `} />
            <div className={`${(showStatus ? 'block' : 'hidden')} rounded-full ${(onlineStatus ? 'bg-green-400' : 'bg-gray-800')} ${statusClass} relative  border-white`}></div>
        </div>
    );
};

Avatar.defaultProps = {
    avatarSize: "small",
    showStatus: true,
    onlineStatus: false,
    shape: "circular"
};

export default React.memo(Avatar);