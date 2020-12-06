import React, { useContext } from 'react'
import '../css/slider.css'
import { GlobalContext } from '../context/context'



const Slider = () => {

    const { decreaseSlideNum,  increaseSlideNum, currentlyMobile} = useContext(GlobalContext)

    return (
        <div className = {currentlyMobile ? 'slider__mobile' : 'slider'}>
            <button className = 'slider__left' aria-label = {'change slide'} onClick = {decreaseSlideNum} ><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></button>
            <button className = 'slider__right' onClick = {increaseSlideNum} aria-label = {'change slide'}><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></button>
        </div>
    )
}

export default Slider
