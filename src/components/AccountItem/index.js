import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t1.15752-9/406893143_1402840967328982_1932118346348521546_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=Qf8HxfKBAawAX8Pn-NJ&_nc_ht=scontent.fhan20-1.fna&oh=03_AdTSBs2GTBS1sT59nHcdB0umq3MYDVjlb3HmFTlAZFQCOA&oe=65B297DB"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
