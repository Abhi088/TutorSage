import { FC, memo } from 'react';
import LinkTo from '../components/LinkTo';

interface Props {
    className?: string
}

const Copyrights: FC<Props> = ({ className }) => {
    return (
        <div className={`${className}`}>&copy; 2020 All Rights Reserved. <LinkTo to="/" text="CORK" /> is a product of<br /> Designreset. <LinkTo to="/cookiePreferences" text="Cookie Preferences" />, <LinkTo to="/privacy" text="Privacy" />, and <LinkTo to="/terms" text="Terms" />.</div >
    );
};

Copyrights.defaultProps = {};

export default memo(Copyrights);