import React from 'react';


//image type
//contains info like width and height
//also url of the image

export interface imgType {

	src:string;
	
	style:string;
	
	containerStyle:string;
	
}
//header type 

export interface headerType {
	
	style:string;
	
	info:string;

}
//body type

export interface bodyType{

	style:string;
	
	info:string
}
//description type
//container info 
//it has header,body

export interface descriptionType{

	header:headerType;
	
	body:bodyType;
	
	style:string;
	
}

//props of the section component
export interface sectionType{
	
	img:imgType;
	
	description:descriptionType,
	
	sectionStyle:string;

}

//section component

const Section = ({img,description,sectionStyle}:sectionType):React.Element => {

	return (
		
		<div className={`${sectionStyle}`}>
			
			<div className={`${img.containerStyle}`}>
			
				<img src={`${img.src}`} className={`${img.style}`} />
			
			</div>
			
			<div className={`${description.style}`}>
			
				<div className={`${description.header.style}`}>
					{`${description.header.info}`}
				</div>
				<div className={`${description.body.style}`}>
					{`${description.body.info}`}
				</div>
			</div>
		
		</div>
	
	)

}
export default Section;
