import React,{useContext,useRef,useEffect,useState} from 'react';
import {Context} from '../components/state/state';
import Link from 'next/link'
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
		
		name:'signup',
		
		bgcolor:'black',
		
		path:'/signup',
		
		hoverBg:'yellow',
		
		textColor:'gray'
		
		
	
	}


]

//size and no of cols of the grid in the nav bar holding the abover nav items
const position:positionType = {
	
	colStart:8,
	
	colCount:4
	
}

//main component
const signin = ()=> {
	
	const [emailEmpty,setEmailEmpty] = useState< boolean >(false);
	
	const [passwordEmpty,setPasswordEmpty] = useState< boolean >(false);
	
    const formRef = useRef< HTMLFormElement | null >(null);

    const state = useContext(Context);

    useEffect(() => {
        
        formRef.current.addEventListener('submit',(async(e:any)=> {
			
			
			try{

		        e.preventDefault();

		        console.log(state.apiUrl);
		        
		        if(e.target.email.value === "" ) {
					
					setEmailEmpty(true);
					
					throw {id:1 ,message:'email field not filled'}
					
					
				};
		        
		        if(e.target.password.value === "") {
		        
		        	setPasswordEmpty(true)
		        	
		        	throw {id:2 ,message:'password field not filled'}
					
		        };
		        
		     
		        
		        const userInfo = {
		        
		        	email:e.target.email.value,
		        	
		        	password:e.target.password.value
		        	
		        }
		        //request options
		        const opt = {
		        
		        	headers:{
		        		
		        		'Content-Type':'application/json'
		        		
		        	},
		        	body:JSON.stringify(userInfo),
		        	
		        	method:'POST'
		        } 
		        
		        //making api call
		        
		        const response = await fetch(`${state.apiUrl}/login`,opt);
		        
		        console.log(response.status);
		       
		      }catch(err) {
		      
		      	console.log(err)
		      
		      }
            

        }))

    } , [])

    return (
        <div className="h-screen w-screen">
           <NavBar navItems={navItems} position={position} />

            <div className="grid grid-cols-12 h-services-section bg-gray-100 grid-rows-6 pt-20">

                <div className="col-start-5 col-end-9 row-start-1 row-span-5 bg-white border-2 grid grid-cols-12 grid-rows-6">
                    <div className="col-start-1 col-end-13 flex row-start-1 row-span-1 justify-center items-center">
                        <span className="font-mono font-bold text-lg">Swiftbase</span>
                    </div>

                    
                    <div className="col-start-2 col-end-12  row-start-2 row-span-4 flex">

                        <form className="flex flex-col flex-grow" ref={formRef} >

                            <div className="flex-grow  flex flex-col justify-center">
                                <span className="text-md font-serif font-bold mb-5 text-gray-400">Email</span>
                                <input type="text" placeholder="enter email address" className="h-10 border-2" required name="email"/>
                                {emailEmpty === true ? 
                                	(<span className="text-sm font-mono font-bold text-red-400 mt-1">email field must be filled</span>):
                                	(<span className="hidden"></span>)
                                }
                               
                            </div>
                            <div className="flex-grow  flex flex-col justify-start">
                                <span className="text-md font-serif font-bold mb-5 text-gray-400">Password</span>
                                <input type="text" placeholder="enter password" className="h-10 border-2" required name="password"/>
                                 {passwordEmpty === true ? 
                                 	(<span className="text-sm font-mono font-bold text-red-400 mt-1">password field must be filled</span> ): 
                                 	(<span className="hidden"></span>)
                                 
                                  }
                            </div>

                            <div className="flex-grow mb-10 flex justify-start flex-col">

                                <button className=" h-10 bg-green-400 font-serif font-bold text-white hover:bg-green-300">login</button>
                            </div>
                            

                                
                            
                        </form>



                    </div>

                    
                </div>
                <div className="col-start-5 col-end-9 row-start-5 row-span-1 bg-white border-2 flex justify-center items-center">

                    <span className="text-lg font-mono font-bold hover:bg-blue-400 ">
                        <Link href="/signup" >Have you registerd? if not follow this link</Link>
                    
                    </span>
                </div>
            </div>
        </div>
    )
}

export default signin

