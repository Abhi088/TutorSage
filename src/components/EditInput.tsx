import React from 'react';
import { FC, memo, useState } from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
    className?: string;
    touched?: boolean;
    errorMessage?: string;
    label?: string;
}

const EditInput: FC<Props> = ({
    className,
    errorMessage,
    touched,
    label,
    ...rest
}) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div className={`${className}`}>
            <label htmlFor={rest.name} className="w-full">
                <span className={`text-xs text-gray-500`} >{label}</span>
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
                    className="outline-none w-full flex border border-gray-400 rounded-md h-10"
                />
            </label>
            {touched && (
                <div className="flex text-red-800">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

EditInput.defaultProps = {};

export default memo(EditInput);