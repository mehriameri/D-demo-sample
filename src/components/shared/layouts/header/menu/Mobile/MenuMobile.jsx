import { useRef } from 'react';
import { useNavigate } from 'react-router';
import LogoPersion from '../../../../../../assets/img/LogoPersion.svg';
import NavbarMenuItem from '../../navbarMenu/NavbarMenuItem';
import navbarItem from '../../../../../../data/jsonFiles/header/navbarItem.json';
import MenuMobileItem from './MenuMobileItem';
import useFetch from '../../../../../../hooks/useFetch';

const MenuMobile = () => {
  const navigate = useNavigate();
  const modalRef = useRef();
  const { data: menuItem } = useFetch({ url: "http://localhost:8000/megaMenuList" });

  return (
    <div className='fixed top-0 bg-white border border-gray-200 overflow-y-scroll w-72 h-full z-30' ref={modalRef}>
      <div className='pr-2'>
        <img src={LogoPersion} alt="" className='w-16 h-16' />
        <div className='border-y border-y-gray-300'>
          {navbarItem?.map((item, index) =>
            <NavbarMenuItem
              key={index}
              id={index}
              icon={item.icon}
              text={item.text}
              clicked={() => navigate(item.path)}
              classes='border-none hover:border-none' />)}
        </div>
        <p className='font-bold text-sm py-4'>دسته بندی کالاها</p>
        <div className='relative'>
          {menuItem?.map((item, index) => <MenuMobileItem key={index} dataList={item} />)}
        </div>
      </div>
    </div>
  )
}

export default MenuMobile;