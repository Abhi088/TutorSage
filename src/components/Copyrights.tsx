import { FC, memo } from 'react';
import LinkTo from '../components/LinkTo';

interface Props {
    className?: string
}

const Copyrights: FC<Props> = ({ className }) => {
    return (
        <p className={`${className}`}>&copy; 2020 All Rights Reserved. <LinkTo to="/">CODEBITS</LinkTo> is a product of Designreset. <LinkTo to="/cookiePreferences">Cookie Preferences</LinkTo>, <LinkTo to="/privacy">Privacy</LinkTo>, and <LinkTo to="/terms">Terms</LinkTo>.</p>
    );
};

Copyrights.defaultProps = {};

export default memo(Copyrights);