import { useEffect } from 'react';
import { FC, memo } from 'react';
import AuthHeroImg from '../images/AuthHeroImg.webp';

interface Props {
    className?: string;
}

const AuthHero: FC<Props> = ({ className }) => {
    console.log("AuthHero rendering");
    useEffect(() => {
        console.log("AuthHero Rendering for the first time");
    }, []);
    return (
        <div className={`h-screen w-full bg-black text-white ${className}`} style={{ backgroundColor: "#060818" }}>
            <img className="m-auto h-full w-full" src={AuthHeroImg} alt="Logo is here"></img>
        </div>
    );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);