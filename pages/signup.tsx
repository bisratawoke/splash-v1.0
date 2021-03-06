import React,{useRef,useEffect,useContext,useState} from 'react';
import {Context} from '../components/state/state';
import Link from 'next/link';

import NavBar,{navItemType,positionType} from '../components/indexComponents/NavBar';

//nav items

const navItems:Array<navItemType> = [
	
	{
		name:'documentation',
		
		bgcolor:'white',
		
		path:'',
		
		hoverBg:'gray',
		
		textColor:'gray'
	
	},
	
	{
	
		name:'terms and policy',
		
		bgcolor:'white',
		
		path:'',
		
		hoverBg:'gray',
		
		textColor:'gray'
		
		
	},
	
	{
	
		name:'about us',
		
		bgcolor:'white',
		
		path:'',
		
		hoverBg:'gray',
		
		textColor:'gray'
	
	},
	
	{
		
		name:'signin',
		
		bgcolor:'blue',
		
		path:'/signin',
		
		hoverBg:'blue',
		
		textColor:'white'
		
		
	
	}


]

//size and no of cols of the grid in the nav bar holding the abover nav items
const position:positionType = {
	
	colStart:8,
	
	colCount:4
	
}
const signup = ()=> {

	const formRef = useRef(null);
	
	const state = useContext(Context);
	
	const [mssg,setMssg] = useState(null);
	
	useEffect(() => {
	
		formRef.current.addEventListener('submit',async(e:any) => {
				
			e.preventDefault();
			
			try{
				
				const userInfo = {
				
					email:e.target.email.value,
					
					password:e.target.password.value
				
				}
				
				const opt = {
					
					headers:{
					
						'Content-Type':'application/json'
					},
					
					method:'POST',
					
					body:JSON.stringify(userInfo)
				
				}
				
				
				const response = await fetch(`${state.apiUrl}/register`,opt);
				
				console.log(response.status);
				
				if(response.status == 200) {
				
					setMssg('registerd succesfully ');
				}
				
				else {
				
					setMssg('registration failed please tryp again later');
				}
			
			}catch(err) {
			
			
				console.log(err);
			
			}
		
		
		})
	
	} ,[])
    return (
        <div className="h-screen w-screen">
        	
        	<NavBar navItems={navItems} position={position} />

            <div className="grid grid-cols-12 h-services-section bg-gray-100 grid-rows-6 pt-20">

                <div className="col-start-5 col-end-9 row-start-1 row-span-5 bg-white border-2 grid grid-cols-12 grid-rows-6">
                    <div className="col-start-1 col-end-13 flex row-start-1 row-span-1 justify-center items-center">
                        <span className="font-mono font-bold text-lg">Swiftbase</span>
                    </div>

                    
                    <div className="col-start-2 col-end-12  row-start-2 row-span-4 flex">

                        <form className="flex flex-col flex-grow" ref={formRef}>

                            <div className="flex-grow  flex flex-col justify-center">
                                <span className="text-md font-serif font-bold mb-1  text-gray-400">Email</span>
                                <input type="text" placeholder="enter email address" className="h-10 border-2" required name="email"/>
                            </div>
                            <div className="flex-grow  flex flex-col justify-start">
                                <span className="text-md font-serif font-bold mb-1 text-gray-400">Password</span>
                                <input type="text" placeholder="enter password" className="h-10 border-2" required name="password"/>
                                
                            </div>

                            <div className="flex-grow flex flex-col justify-start">

                                <span className="text-md font-serif font-bold mb-1 text-gray-400">Organization name</span>
                                <input type="text" placeholder="enter organization name ps not required" className="h-10 border-2" name="org"/>
                                
                            </div>

                            <div className="flex-grow flex flex-col justify-start">

                                <span className="text-md font-serif font-bold mb-1 text-gray-400">Country</span>
                                <input type="text" placeholder="enter country name ps not required" className="h-10 border-2" name="country"/>
								
								{
								
									mssg ? (
									
										<span className="text-sm font-mono font-bold text-blue-400 mt-1">{mssg}</span>
									):(<></>)
								}
                            </div>


                            <div className="flex-grow mb-10 flex justify-center flex-col">

                                <button className=" h-10 bg-green-400 font-serif font-bold text-white hover:bg-green-300">register</button>
                            </div>
                            

                                

                            
                        </form>


                    </div>

                    
                </div>
                <div className="col-start-5 col-end-9 row-start-5 row-span-1 bg-white border-2 flex justify-center items-center">

                    <span className="text-lg font-mono font-bold hover:bg-blue-400 ">
                        <Link href="/signin" >Have you registerd? if so follow this link to login</Link>
                    
                    </span>
                </div>
            </div>
        </div>
    )
}

export default signup
