import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { MegaphoneIcon, PlusIcon, SparklesIcon, StarIcon, StoreCheckIcon, TruckIcon } from '../../shared/UI/Icons';
import { addToBasket, removeFromBasket, deleteFromBasket } from '../../../redux/shoppingInfo/ShoppingInfoIndex';
import SpecialSell from '../../../assets/img/imageIcon/SpecialSell.svg';
import IncredibleOffer from '../../../assets/img/imageIcon/IncredibleOffer.svg';
import ModalCounterBox from './ModalCounterBox';

const ProductCard = ({ dataList, classes }) => {
    const isAuth = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const shoppingBasketInfo = useSelector(state => state.shoppingBasketInfo);
    const shoppingBasketItem = shoppingBasketInfo.shoppingBasket.filter(item => item.id === dataList.id)[0];
    const increamentBtnHandler = () => {
        if (isAuth.user) {
            dispatch(addToBasket({ productInfo: dataList, id: dataList.id, quantity: 1 }));
        } else {
            navigate('/login')
        }
    }
    const decreamentBtnHandler = () => {
        dispatch(removeFromBasket({ productInfo: dataList, id: dataList.id }));
    }
    const deleteBtnHandler = () => {
        dispatch(deleteFromBasket({ productInfo: dataList, id: dataList.id }));
    }

    return (
        <div className={`border border-gray-200 bg-white cursor-pointer sm:p-4 px-2 py-4 ${classes}`}>
            <div className='flex justify-between items-center'>
                {dataList.specialInfo == "فروش ویژه"
                    ? <img src={SpecialSell} alt="" className='py-2' />
                    : dataList.specialInfo == "پیشنهاد شگفت‌انگیز"
                        ? <img src={IncredibleOffer} alt="" className='py-2' />
                        : <div className='py-4'></div>}
                {dataList.Advertisement && <div className='flex gap-1'>
                    <p className='text-xs text-gray-500'>Ad</p>
                    <MegaphoneIcon className='w-4 h-4 text-red-500' />
                </div>}
            </div>
            <div className='flex sm:flex-col flex-row sm:gap-3'>
                <div className='relative shrink-0'>
                    <Suspense fallback={<div className='sm:w-48 sm:h-48 w-20 h-20 bg-red-300'> loading</div>}>
                        <img src={dataList.img} alt="" className='flex xs:w-48 xs:h-48 w-24 h-24 mx-auto m-4' />
                    </Suspense>
                    <div className='h-8'>
                        {shoppingBasketItem
                            ? <div className='flex'>
                                <ModalCounterBox
                                    counter={shoppingBasketItem.quantity}
                                    increamentHandler={increamentBtnHandler}
                                    decreamentHandler={decreamentBtnHandler}
                                    deleteHandler={deleteBtnHandler}
                                />
                            </div>
                            : <div className='flex' onClick={increamentBtnHandler}>
                                <span className='rounded-full border-2 border-red-500 text-red-500 text-xs font-semibold p-1' >
                                    <PlusIcon className='bottom-0 w-4 h-4 text-red-500' />
                                </span>
                            </div>}
                    </div>
                </div>
                <div className='flex flex-col justify-center px-4 w-full'>
                    <p className='text-sm text-gray-700 py-4'>{dataList.title}</p>
                        <div className='flex justify-between items-center py-4'>
                            {dataList.deliveryInfo
                                ? <div className='flex gap-1'>
                                    <TruckIcon className='w-5 h-5 text-[#3daa16]' />
                                    <p className='text-xs text-gray-500'>{dataList.deliveryInfo}</p>
                                </div>
                                : <div className='flex gap-1'>
                                    <StoreCheckIcon className='w-4 h-4 text-[#589fda]' />
                                    <p className='text-xs text-gray-500'>{dataList.storeInfo}</p>
                                </div>}
                            <div className='flex gap-1'>
                                <p className='text-xs text-gray-600'>{dataList.rate}</p>
                                <StarIcon className='w-4 h-4' />
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            {dataList.offPercent
                                ? <span className='bg-red-500 text-white rounded-full text-[10px] px-2 py-1 '>{dataList.offPercent}%</span>
                                : null}
                            <p className='text-xs font-semibold text-gray-700 mr-auto'>{dataList.price} تومان</p>
                        </div>
                        <div className='flex justify-between py-4'>
                            <div className='flex items-center gap-1 text-[#ad349d] font-semibold'>
                                <SparklesIcon className='w-3 h-3' />
                                <p className=' text-xs'>{dataList.starPrice} تومان</p>
                            </div>
                            <p className='text-xs line-through text-gray-400 px-8'>{dataList.oldPrice}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProductCard;