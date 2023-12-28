import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, herf, primary, outline, small, children, large, onClick, ...passProps }) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
    });

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (herf) {
        props.herf = herf;
        Comp = 'a';
    }

    return (
        <Comp classNames={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
