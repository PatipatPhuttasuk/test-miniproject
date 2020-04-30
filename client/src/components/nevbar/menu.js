import React from 'react';
import Search from './search'
import Icon from '../icon';
import './menu.scss'

const menu = () => {
    return (
        <div className='nevbar-container'>

            <div className='menu nevbar-left'>
                <img className='nevbar_logo' src='/images/logo02.png' alt='logo'  />
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'></a></li>
                    <li><a href='/'>{Date()}</a></li>
                    
                </ul>
            </div>
            <div className='nevbar-center'>
                <Search />
            </div>
            <div className='nevbar-right'>
                <Icon type='compass'    size="25" color='#fff'  style={{ marginLeft: 20 }} />
                <Icon type='heart'      size="25" color='#fff'  style={{ marginLeft: 20 }} />
                <Icon type='person'     size="25" color='#fff'  style={{ marginLeft: 20 }} />
            </div>

        </div>
        
    )
}

export default menu;