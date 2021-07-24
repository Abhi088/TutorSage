import React from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    progressType?: "primary" | "success" | "danger";
    progress: number;
}

const ProgressBar: React.FC<Props> = ({
    progress,
    progressType
}) => {
    let progressBarClass = "";

    if (progressType === "success") {
        progressBarClass += "bg-success-light ";
    } else if (progressType === "danger") {
        progressBarClass += "bg-danger-light ";
    } else {
        progressBarClass += "bg-primary-light ";
    }

    return (
        <div className="w-full h-5 bg-gray-100 rounded-full">
            <div style={{ width: `${progress}%` }} className={`${progressBarClass} h-5 rounded-full`}></div>
        </div>
    );
};

ProgressBar.defaultProps = {
    progressType: "primary"
};

export default React.memo(ProgressBar);