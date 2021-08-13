import React from "react";
import Spinner from "../Spinner/Spinner";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    buttonDisabled?: boolean;
    className?: string;
    buttonSize?: "lg" | "md" | "sm";
    theme?: "primary" | "success" | "danger";
    buttonStyle?: "solid" | "outline";
    text: string;
}

const Button: React.FC<Props> = ({
    buttonDisabled,
    className,
    text,
    buttonSize,
    theme,
    buttonStyle,
    ...rest
}) => {

    const sizeClasses = {
        lg: " px-8 py-4 text-xl ",
        md: " px-7 py-3 text-lg ",
        sm: " px-6 py-2 "
    }

    const themeClasses = {
        solid: {
            success: (buttonDisabled ? "bg-success-dark cursor-not-allowed" : "bg-success-light shadow-success hover:shadow-none") + " text-white ",
            danger: (buttonDisabled ? "bg-danger-dark cursor-not-allowed" : "bg-danger-light shadow-danger hover:shadow-none") + " text-white ",
            primary: (buttonDisabled ? "bg-primary-dark cursor-not-allowed" : "bg-primary-medium shadow-primary hover:shadow-none") + " text-white "
        },
        outline: {
            success: (buttonDisabled ? "border-2 border-success-dark text-success-dark cursor-not-allowed" : "border-2 border-success-light hover:bg-success-light text-success-light hover:text-white hover:shadow-success"),
            danger: (buttonDisabled ? "border-2 border-danger-dark text-danger-dark cursor-not-allowed" : "border-2 border-danger-light hover:bg-danger-light text-danger-light hover:text-white hover:shadow-danger"),
            primary: (buttonDisabled ? "border-2 border-primary-dark text-primary-dark cursor-not-allowed" : "border-2 border-primary-medium hover:bg-primary-medium text-primary-medium hover:text-white hover:shadow-primary")
        }
    }

    return (
        <div>
            <button
                {...rest}
                disabled={buttonDisabled}
                type="submit"
                className={`rounded-4px ${sizeClasses[buttonSize!]} ${themeClasses[buttonStyle!][theme!]} ${className}`}
            >
                {(buttonDisabled ? <Spinner type="button" /> : text)}
            </button>
        </div>
    );
};

Button.defaultProps = {
    buttonDisabled: false,
    buttonSize: "sm",
    buttonStyle: "solid",
    theme: "primary"
};

export default React.memo(Button);