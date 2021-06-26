import {ReactElement} from 'react';
import Link from 'next/link';

//navitem props

interface navItemProps {


	navItems:Array<navItemType>;
	
	position:positionType;
}

//nav item type 

export interface navItemType{
	name:string;
	bgcolor:string;
	path:string;
	hoverBg:string;
	textColor:string;
	
}

//position inteface 

export interface positionType{

	colStart:number;
	
	colCount:number;
	
}
const NavBar = ({navItems,position}:navItemProps):ReactElement => {


	return (
	
			<div className="h-10 grid grid-cols-12 bg-white-200">

                    <div className="logo col-start-1 col-end-3 grid grid-cols-12">
                        <div className="col-start-1 col-end-6 flex items-center justify-center">

                            <img src="/fwind.png" className="flex-noflows" style={{'width':'40px','height':'40px'}}/>
                        </div>
                        <div className="col-start-6 col-end-13  items-center justify-start font-serif flex">

                            <span className="text-xlg font-bold text-gray-400">SwiftBase</span>


                        </div>

                    </div>

                    <div className="col-start-3 col-end-7"></div>
                   <div className={`col-start-${position.colStart} col-end-13  grid grid-cols-${position.colCount}`}>
						
						
						
						
						{navItems.map(item => (
							
						<span className={` font-sans font-medium flex items-center justify-center hover:bg-${item.hoverBg}-300 hover:text-gray-400  text-${item.textColor} bg-${item.bgcolor}-400 cursor-pointer`}>

                            <Link href={`${item.path}`}>{`${item.name}`}</Link>

                        </span>
						
						))}
                        

                    </div>

              </div>
	
	
	
	
	)


}






export default NavBar;
