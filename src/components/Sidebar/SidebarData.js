import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Food Log',
    path: '/foodlog',
    // icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Personal Info',
    path: '/personal',
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Veterinary Info',
    path: '/venn',
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Community',
    path: '/community',
    // icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Adoption',
    path: '/adopt',
    // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Adoption Application',
    path: '/adoptinfo',
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
    },
  {
    title: 'Location Tracker',
    path: '/location',
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];