import React from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import Divider from './Divider';
import SideBarIcon from './SideBarIcon';

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 flex flex-col bg-white dark:bg-gray-900 shadow-lg'>
      <SideBarIcon icon={<FaFire size='28' />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size='32' />} />
      <SideBarIcon icon={<BsFillLightningFill size='20' />} />
      <SideBarIcon icon={<FaPoo size='20' />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size='22' />} />
    </div>
  );
};

export default SideBar;
