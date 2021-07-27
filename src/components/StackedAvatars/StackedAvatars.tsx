import React from "react";
import Avatar from "../Avatar/Avatar";


interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    avatarsSrc: string[];
    size?: "small" | "medium" | "large";
}

const StackedAvatars: React.FC<Props> = ({
    avatarsSrc,
    size
}) => {
    let stackedValueClass = "";
    let avatarShift = 3;

    if (size === "large") {
        stackedValueClass = " h-10 text-2xl tracking-tighter ";
        avatarShift = 5;
    } else if (size === "medium") {
        stackedValueClass = " h-7 tracking-tighter ";
        avatarShift = 4;
    } else {
        stackedValueClass = " h-5 text-xs tracking-tighter ";
    }

    let avatars = [];
    for (let i = 0; i < avatarsSrc.length && i < 4; i++) {
        avatars.push(<Avatar
            className="shadow-gray hover:shadow-none hover:translate-avatar"
            imgClass="border-3 border-white"
            imgSrc={avatarsSrc[i]}
            showStatus={false}
            avatarSize={size}
            name="Abhi"></Avatar>);
    }

    return (
        <div className={`flex flex-row -space-x-${avatarShift}`}>
            {avatars}
            <div
                className={`${(avatarsSrc.length > 4) ? "block" : "hidden"} text-primary-medium rounded-full px-1.5 bg-white ${stackedValueClass} self-center shadow-gray`}>
                +{avatarsSrc.length - 4} more
            </div>
        </div>
    );
};

StackedAvatars.defaultProps = {
    size: "medium"
};

export default React.memo(StackedAvatars);