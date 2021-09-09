import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
    {
     title: 'Home',
     path: '/',
     icon: <AiIcons.AiFillHome />,
     cName: 'nav-text'   
    },    
    {
     title: 'Work',
     path: '/work',
     icon: <MdIcons.MdWork />,
     cName: 'nav-text'   
    },
    {
     title: 'About Me',
     path: '/about',
     icon: <MdIcons.MdPersonOutline/>,
     cName: 'nav-text'   
    },
    {
     title: 'Contact',
     path: '/contact',
     icon: <AiIcons.AiFillMail />,
     cName: 'nav-text'   
    }
]
