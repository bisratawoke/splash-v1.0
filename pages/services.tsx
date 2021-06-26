import {ReactElement} from 'react';
import NavBar,{navItemtype,positionType} from '../components/indexComponents/NavBar';
import Link from 'next/link';
import Section,{imgType,descriptionType} from '../components/servicesComponents/Section';

//nav items
const navItems:Array<navItemType> = [
	{
	
		name:'signin',
		
		bgcolor:'blue',
		
		path:'/signin',
		
		hoverBg:'blue',
		
		textColor:'white'
		
	},
	
	{
	
		name:'signup',
		
		bgcolor:'yellow',
		
		path:'/signup',
		
		hoverBg:'blue',
		
		textColor:'white'
	}
]

//postion prop
const position:positionType = {
	
	colStart:10,
	
	colCount:2

}

//img item

const imgItem:imgType = {
	
	src:"/documentation.svg",
	
	containerStyle:"col-start-1 col-end-7 flex",
	
	style:"flex-grow"

}

//description

const description:descriptionType = {
	
	header:{
	
		style:"",
		
		info:""
		
	},
	
	body:{
	
		style:"",
		
		info:""
		
	},
	
	style:"col-start-8 col-end-11"


}


//services component

const services = ()=> {

	
	
	return (
		
		
		<div className="h-screen w-screen">
			<NavBar navItems={navItems} position={position}/>
			<Section img={imgItem} description={description} sectionStyle="h-services-section bg-gray-400 grid grid-cols-12"/>
		</div>
	
	)

}

export default services
