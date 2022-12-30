import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './SuggestedAccount.module.scss';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountReview from './AccountReview';

const cx=classNames.bind(styles);

function AccountItem({data}) {

    const renderPreview=(props)=>{
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountReview data={data} />
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800,0]}
                offset={[-20,0]}
                placement='bottom'
                render={renderPreview}
            >

                <div className={cx('account-item')}>
                    <img className={cx('avatar')}src={data.avatar} alt={data.nickname}/>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                        </p>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
        
        
    );
}

AccountItem.propTypes={};

export default AccountItem;