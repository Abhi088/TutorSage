import { useEffect } from 'react';
import { FC, memo } from 'react';

interface Props { }

const AuthHero: FC<Props> = (props) => {
    console.log("AuthHero rendering");
    useEffect(() => {
        console.log("AuthHero Rendering for the first time");
    }, []);
    return (
        <div className="h-screen w-1/2 bg-black text-white">Logo will go here</div>
    );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);