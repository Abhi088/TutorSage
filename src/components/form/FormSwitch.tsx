import { FC, memo } from 'react';
import { Switch } from '@headlessui/react'

interface Props {
    className?: string,
    forSetting?: string,
    enabled: boolean,
    setEnabled: () => void
}

const FormSwitch: FC<Props> = ({
    className,
    forSetting,
    enabled,
    setEnabled
}) => {

    return (
        <Switch.Group>
            <div className="flex items-center">
                <Switch.Label className="mr-4">{forSetting}</Switch.Label>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'}
                    relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
                >
                    <span className="sr-only">{forSetting}</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled ? 'translate-x-6 bg-white' : 'translate-x-1 bg-primary-dark'}
                        inline-block w-4 h-4 transform rounded-full transition-transform`}
                    />
                </Switch>
            </div>
        </Switch.Group>
    )
};

FormSwitch.defaultProps = {};

export default memo(FormSwitch);