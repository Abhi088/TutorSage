import React from 'react';
import { FC, memo, useState } from 'react';
import Icon from '../form/Icon';

interface Props extends React.HTMLProps<HTMLInputElement> {
    children?: React.ReactElement;
    className?: string;
}

const InputField: FC<Props> = ({
    children,
    className,
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
                    />
                </label>
            </div>
            <hr className={"w-full " + (isSelected ? "border-primary-dark" : "border-gray-200")} />
        </div>
    );
};

InputField.defaultProps = {};

export default memo(InputField);