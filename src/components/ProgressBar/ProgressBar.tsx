import React from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    theme: "primary" | "success" | "danger" | "custom";
    customThemeClass?: string;
    progress: number;
}

const ProgressBar: React.FC<Props> = ({
    progress,
    customThemeClass,
    theme
}) => {

    const themeClass = {
        primary: "bg-primary-medium",
        success: "bg-success-light",
        danger: "bg-danger-light",
        custom: customThemeClass
    };

    return (
        <div className="w-full h-5 bg-gray-100 rounded-full">
            <div style={{ width: `${progress}%` }} className={`${themeClass[theme]} h-5 rounded-full`}></div>
        </div>
    );
};

ProgressBar.defaultProps = {};

export default React.memo(ProgressBar);