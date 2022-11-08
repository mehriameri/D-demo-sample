import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSearch from './InputSearch';
import LastSearchItems from './SearchItem/LastSearchItems';
import PopularSearchItems from '././SearchItem/PopularSearchItems';
import searchBoxImg from '../../../../../../assets/img/watch.jpg';
import { hiddenDropDown } from '../../../../../../redux/searchDropDown/DropDownIndex';

export const SearchValueContext = React.createContext();
const SearchDropDown = () => {
  const [showLastsearches, setShowLastsearches] = useState(true);
  const [searchItemBoxText, setSearchItemBoxText] = useState('هودی دخترانه');
  const toggleDropDown = useSelector(state => state.toggleDropDown);
  const dispatch = useDispatch()
  const SearchDropDownRef = useRef();
  const checkIfClickedOutside = (event) => {
    if (toggleDropDown.dropDownState && SearchDropDownRef.current && !SearchDropDownRef.current.contains(event.target)) {
      dispatch(hiddenDropDown())
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    }
  }, [toggleDropDown.dropDownState]);
  return (
    <SearchValueContext.Provider value={{ searchItemBoxText, setSearchItemBoxText }}>
      <div className='absolute bg-white border border-gray-200 rounded-lg shadow-md w-full z-10' ref={SearchDropDownRef}>
        <InputSearch classes='rounded-b-none bg-white border-none' />
        <div className='mx-4'>
          <div className='border-t border-t-blue-400 py-4'>
            <img src={searchBoxImg} alt="" className='rounded-lg w-full' />
          </div>
          {showLastsearches && <LastSearchItems textvalue={searchItemBoxText} setShowLastsearches={setShowLastsearches} />}
          <PopularSearchItems setShowLastsearches={setShowLastsearches} />
        </div>
      </div>
    </SearchValueContext.Provider>
  )
}

export default SearchDropDown;