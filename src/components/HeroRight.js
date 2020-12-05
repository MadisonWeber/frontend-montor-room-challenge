import React, { useContext } from 'react'
import "../css/heroright.css"
import { GlobalContext } from '../context/context'
import InfoOne from './InfoOne';
import InfoTwo from './InfoTwo';
import InfoThree from './InfoThree';
import Slider from './Slider';


const HeroRight = () => {

    const { slideNum, currentlyMobile } = useContext(GlobalContext)

    return (
        <div className = 'HeroRight'>
            <div className="heroright__content__container">
                {slideNum === 1 && <InfoOne />}
                {slideNum === 2 && <InfoTwo />}
                {slideNum === 3 && <InfoThree />}
                <button className="heroright__shop-now">
                    <span>Shop Now</span>
                    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg>
                </button>
            </div>
            {!currentlyMobile && <Slider /> }
        </div>
    )
}

export default HeroRight
