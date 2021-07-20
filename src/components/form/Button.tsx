import React from "react";

interface Props extends React.HTMLProps<HTMLButtonElement> {
    submitProgress?: boolean;
    className?: string;
    text: string;
}

const Button: React.FC<Props> = ({
    submitProgress,
    className,
    text,
    ...rest
}) => {
    return (
        <div>
            <button
                {...rest}
                disabled={submitProgress}
                type="submit"
                className={`rounded-4px shadow hover:shadow-none ${className} ${submitProgress ? "bg-blue-500" : "bg-primary-dark"
                    }`}
            >{text}
            </button>
        </div>
    );
};

Button.defaultProps = {
    submitProgress: false,
};

export default React.memo(Button);