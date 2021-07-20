import React from 'react';
import { FC, memo, useState } from 'react';

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
            <div className="flex pb-4">
                {children}
                <label htmlFor={rest.name} className="w-full">
                    <input
                        {...rest}
                        onFocus={() => {
                            setIsSelected(true);
                        }}
                        onBlur={() => {
                            setIsSelected(false);
                        }}
                        type={rest.type}
                        name={rest.name}
                        placeholder={rest.placeholder}
                        className="outline-none w-full"
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