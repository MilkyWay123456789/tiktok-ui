import { useState,useEffect } from 'react';
import classNames from 'classnames/bind';

import config from '~/config';
import {HomeIcon,HomeActiveIcon,UserGroupIcon,UserGroupActiveIcon,LiveIcon,LiveActiveIcon} from '~/components/Icons';
import Menu,{MenuItem} from './Menu';
import styles from './Sidebar.module.scss';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userServices';

const cx=classNames.bind(styles);

const PER_PAGE=5;

function Sidebar() {
    const[suggestedUsers,setSuggestedUsers]=useState([]);

    //(prevUsers)=>[...prevUsers, ...data]
    useEffect(()=>{
        userService
            .getSuggested({page:1,perPage:PER_PAGE})
            .then(data=>{
                setSuggestedUsers(data);
            })
            .catch(error=>console.log(error));
    }, []);

    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
        </Menu>

        <SuggestedAccounts label='Suggested accounts' data={suggestedUsers} />
        <SuggestedAccounts label='Following accounts'/>
    </aside>
}

export default Sidebar;