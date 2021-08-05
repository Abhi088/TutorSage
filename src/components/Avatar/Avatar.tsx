import React from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    avatarSize?: "xl" | "lg" | "md" | "sm" | "xs";
    showStatus?: boolean;
    onlineStatus?: boolean;
    imgSrc: string | null;
    shape?: "circular" | "square";
    imgClass?: string;
    // name: string;
}

const Avatar: React.FC<Props> = ({
    avatarSize,
    showStatus,
    onlineStatus,
    imgSrc,
    shape,
    className,
    imgClass,
    // name
}) => {
    let avatarClass = "";
    let statusClass = "";
    // let noImageClass = "";
    if (avatarSize === "xl") {
        if (shape === "circular") {
            avatarClass = " h-28 w-28 rounded-full ";
            statusClass = " h-6 w-6 border-4 left-3/4 bottom-1/3 ";
        }
        else {
            avatarClass = " h-28 w-28 rounded-lg ";
            statusClass = " h-6 w-6 border-4 left-22 bottom-6";
        }
    }
    else if (avatarSize === "lg") {
        // noImageClass = " text-5xl pt-3 ";
        if (shape === "circular") {
            avatarClass = " h-20 w-20 rounded-full ";
            statusClass = " h-5 w-5 border-3 left-3/4 bottom-1/3 ";
        }
        else {
            avatarClass = " h-20 w-20 rounded-lg ";
            statusClass = " h-5 w-5 border-3 left-3/4 bottom-1/4 ";
        }
    }
    else if (avatarSize === "md") {
        // noImageClass = " text-3xl pt-2 ";
        if (shape === "circular") {
            avatarClass = " h-14 w-14 rounded-full ";
            statusClass = " h-4 w-4 border-3 left-3/4 bottom-1/3 ";
        }
        else {
            avatarClass = " h-14 w-14 rounded-lg ";
            statusClass = " h-4 w-4 border-3 left-3/4 bottom-1/4 ";
        }
    }
    else if (avatarSize === "sm") {
        // noImageClass = " text-xl pt-1 ";
        if (shape === "circular") {
            avatarClass = " h-10 w-10 rounded-full ";
            statusClass = " h-3 w-3 border-2 left-3/4 bottom-1/3 ";
        }
        else {
            avatarClass = " h-10 w-10 rounded-lg ";
            statusClass = " h-3 w-3 border-2 left-3/4 bottom-1/4 ";
        }
    }
    else {
        if (shape === "circular") {
            avatarClass = " h-7 w-7 rounded-full ";
            statusClass = " h-2 w-2 border left-3/4 bottom-1/3";
        } else {
            avatarClass = " h-7 w-7 rounded-md "
            statusClass = " h-2 w-2 border left-3/4 bottom-2";
        }
    }

    return (
        <div className={`${avatarClass} ${className}`}>
            <img src={(imgSrc ? imgSrc : "")} onError={(event: any) => { event.target.src = "https://designreset.com/cork/ltr/demo4/assets/img/profile-3.jpeg"; }} alt="avatar" className={` ${avatarClass} ${imgClass}`} />
            <div className={`${(showStatus ? 'block' : 'hidden')} rounded-full ${(onlineStatus ? 'bg-green-400' : 'bg-gray-800')} ${statusClass} relative  border-white`}></div>
        </div>
    );
};

Avatar.defaultProps = {
    avatarSize: "sm",
    showStatus: true,
    onlineStatus: false,
    shape: "circular"
};

export default React.memo(Avatar);