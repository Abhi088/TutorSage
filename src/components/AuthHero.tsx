import { useEffect } from 'react';
import { FC, memo } from 'react';

interface Props {
    className?: string;
}

const AuthHero: FC<Props> = ({ className }) => {
    console.log("AuthHero rendering");
    useEffect(() => {
        console.log("AuthHero Rendering for the first time");
    }, []);
    return (
        <div className={`h-screen w-full bg-black text-white ${className}`}>Logo will go here</div>
    );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);