import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <div>Sidebar</div>
        </aside>
    );
};

export default Sidebar;
