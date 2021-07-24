import React from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    buttonDisabled?: boolean;
    className?: string;
    buttonSize?: "large" | "medium" | "small";
    buttonType?: "primary" | "success" | "danger";
    buttonStyle?: "solid" | "outline";
    text: string;
}

const Button: React.FC<Props> = ({
    buttonDisabled,
    className,
    text,
    buttonSize,
    buttonType,
    buttonStyle,
    ...rest
}) => {
    let buttonClasses = "";

    if (buttonSize === "large") {
        buttonClasses = "px-8 py-4 text-xl ";
    } else if (buttonSize === "medium") {
        buttonClasses = "px-7 py-3 text-lg ";
    } else {
        buttonClasses = "px-6 py-2 ";
    }

    if (buttonType === "success") {
        if (buttonStyle === "solid") {
            buttonClasses += (buttonDisabled ? "bg-success-dark" : "bg-success-light shadow-success hover:shadow-none") + " text-white ";
        } else {
            buttonClasses += (buttonDisabled ? "border-2 border-success-dark text-success-dark" : "border-2 border-success-light hover:bg-success-light text-success-light hover:text-white hover:shadow-success");
        }
    } else if (buttonType === "danger") {
        if (buttonStyle === "solid") {
            buttonClasses += (buttonDisabled ? "bg-danger-dark" : "bg-danger-light shadow-danger hover:shadow-none") + " text-white ";
        } else {
            buttonClasses += (buttonDisabled ? "border-2 border-danger-dark text-danger-dark" : "border-2 border-danger-light hover:bg-danger-light text-danger-light hover:text-white hover:shadow-danger");
        }
    } else {
        if (buttonStyle === "solid") {
            buttonClasses += (buttonDisabled ? "bg-primary-dark" : "bg-primary-light shadow-primary hover:shadow-none") + " text-white ";
        } else {
            buttonClasses += (buttonDisabled ? "border-2 border-primary-dark text-primary-dark" : "border-2 border-primary-light hover:bg-primary-light text-primary-light hover:text-white hover:shadow-primary");
        }
    }

    return (
        <div>
            <button
                {...rest}
                disabled={buttonDisabled}
                type="submit"
                className={`rounded-4px ${buttonClasses} ${buttonClasses} ${className}`}
            >
                {text}
            </button>
        </div>
    );
};

Button.defaultProps = {
    buttonDisabled: false,
    buttonSize: "small",
    buttonStyle: "solid",
    buttonType: "primary"
};

export default React.memo(Button);