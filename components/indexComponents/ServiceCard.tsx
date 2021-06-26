import React, { ReactElement } from 'react'

export interface params{

    title:string;
    imgSrc:string;
    footer:string;
    bgColor:string;

}

function ServiceCard({title,imgSrc,footer,bgColor}:params):ReactElement {
    return (
        <div className={`bg-${bgColor}-500 flex flex-col border-l-2 border-r-2 cursor-pointer hover:bg-gray-500`}>

            <div className="h-20  flex items-center justify-center">
                
                <span className="font-sans font-bold text-lg text-white"> {title} </span>
                
            </div> 
            <div className="flex-grow flex ">

                <img src={`${imgSrc}`} alt="" className="flex-grow"/>
            </div>
            <div className="h-20 bg-white-100 pl-5 ">
                
                <span className="text-white font-sans font-bold text-md">{footer}</span>
            
            </div>
        
        </div>
    )
}

export default ServiceCard
