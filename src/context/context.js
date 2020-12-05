import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {


    const [ slideNum, setSlideNum ] = useState(1);
    const [ currentlyMobile , setCurrentlyMobile ] = useState(false);

    useEffect(()=> {
        window.addEventListener('keyup', trialKeyUp)
        return ()=> window.removeEventListener('keyup', trialKeyUp)
    }, [])

    useEffect(()=> {
        if(window.innerWidth < 450){
            setCurrentlyMobile(true)
        }
        window.addEventListener('resize' , checkWindowWidth);

        return () => window.removeEventListener('resize', checkWindowWidth)
    },[])

    const checkWindowWidth = () => {
        const currentWidth = window.innerWidth
        if(currentWidth > 450){
            setCurrentlyMobile(false)
        } else{
            setCurrentlyMobile(true)
        }
    }


    const trialKeyUp = (e) => {
        if(e.key === 'ArrowLeft') decreaseSlideNum();
        if(e.key === 'ArrowRight') increaseSlideNum();
    }

    const increaseSlideNum = () => {
        setSlideNum( (prev) => {
            if(prev < 3){
                setSlideNum(prev + 1)
            }else{
                setSlideNum(1)
            }
        })
    }

    const decreaseSlideNum = () => {
        setSlideNum( (prev) => {
            if(prev === 1){
                setSlideNum(3)
            }else{
                setSlideNum(prev - 1)
            }
        })
    }


    return (
        <GlobalContext.Provider value = {{slideNum, setSlideNum, increaseSlideNum, decreaseSlideNum, currentlyMobile}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
