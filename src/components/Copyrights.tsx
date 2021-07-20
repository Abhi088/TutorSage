import { FC, memo } from 'react';
import LinkTo from '../components/LinkTo';

interface Props {
    className?: string
}

const Copyrights: FC<Props> = ({ className }) => {
    return (
        <p className={`${className}`}>&copy; 2020 All Rights Reserved. <LinkTo to="/" text="CODEBITS" /> is a product of Designreset. <LinkTo to="/cookiePreferences" text="Cookie Preferences" />, <LinkTo to="/privacy" text="Privacy" />, and <LinkTo to="/terms" text="Terms" />.</p>
    );
};

Copyrights.defaultProps = {};

export default memo(Copyrights);