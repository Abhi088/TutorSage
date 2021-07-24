import React, { ReactChild, ReactChildren } from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactElement;
    type?: "primary" | "success" | "warning" | "error";
}

const Alert: React.FC<Props> = ({
    children,
    type
}) => {
    const [isVisible, setIsVisible] = React.useState(true);
    let alertClass = "";
    let buttonClass = "";
    if (type === "success") {
        alertClass += " bg-green-200 text-green-800";
        buttonClass = " hover:text-green-400";
    }
    else if (type === "warning") {
        alertClass += " bg-yellow-100 text-yellow-700";
        buttonClass = " hover:text-yellow-300";
    }
    else if (type === "error") {
        alertClass += " bg-red-300 text-red-800";
        buttonClass = " hover:text-red-500";
    }
    else {
        alertClass += " bg-primary-light text-primary-dark";
        buttonClass = "hover:text-blue-700";
    }

    return (
        <div className={(isVisible ? " block" : " hidden")}>
            <div className={"flex flex-row justify-between rounded-md py-4 px-4 w-full" + alertClass}>
                <div>{children}</div>
                <button onClick={() => setIsVisible(false)} className={buttonClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 stroke-current stroke-2" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" data-dismiss="alert">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    );
};

Alert.defaultProps = {
    type: "primary"
};

export default React.memo(Alert);