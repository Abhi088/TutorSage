import React from 'react';
import { FC, memo, useState } from 'react';
import { IoWarningOutline } from 'react-icons/io5';

interface Props extends React.HTMLProps<HTMLInputElement> {
    children?: React.ReactElement;
    className?: string;
    touched?: boolean;
    errorMessage?: string;
}

const InputField: FC<Props> = ({
    children,
    className,
    errorMessage,
    touched,
    ...rest
}) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div>
            <div className="flex">
                {children}
                <label htmlFor={rest.name}>
                    <input
                        {...rest}
                        onFocus={() => {
                            setIsSelected(true);
                        }}
                        type={rest.type}
                        name={rest.name}
                        placeholder={rest.placeholder}
                        className="outline-none"
                    />
                </label>
            </div>
            <hr className={"w-full " + (isSelected ? "border-primary-dark" : "border-gray-200")} />
            {touched && (
                <div className="flex text-red-800">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

InputField.defaultProps = {};

export default memo(InputField);