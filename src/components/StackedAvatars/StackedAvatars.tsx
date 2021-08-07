import React from "react";
import Avatar from "../Avatar/Avatar";


interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    avatarsSrc: string[];
    size?: "sm" | "md" | "lg";
}

const StackedAvatars: React.FC<Props> = ({
    avatarsSrc,
    size
}) => {
    const avatarShift = {
        lg: 5,
        md: 4,
        sm: 3
    }

    const stackedValueClass = {
        lg: " h-10 text-2xl tracking-tighter ",
        md: " h-7 tracking-tighter ",
        sm: " h-5 text-xs tracking-tighter "
    }

    let avatars = [];
    for (let i = 0; i < avatarsSrc.length && i < 4; i++) {
        avatars.push(<Avatar
            className="shadow-gray hover:shadow-none hover:translate-avatar"
            imgClass="border-3 border-white"
            imgSrc={avatarsSrc[i]}
            showStatus={false}
            avatarSize={size}>
        </Avatar>);
    }

    return (
        <div className={`flex flex-row -space-x-${avatarShift[size!]}`}>
            {avatars}
            <div
                className={`${(avatarsSrc.length > 4) ? "block" : "hidden"} text-primary-medium rounded-full px-1.5 bg-white ${stackedValueClass[size!]} self-center shadow-gray`}>
                +{avatarsSrc.length - 4} more
            </div>
        </div>
    );
};

StackedAvatars.defaultProps = {
    size: "md"
};

export default React.memo(StackedAvatars);