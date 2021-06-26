import ServiceCard,{params} from '../components/indexComponents/ServiceCard';
import React,{ReactElement, ReactEventHandler} from 'react';
import  {FaFacebook,FaTelegram,FaDiscord,FaTwitter} from 'react-icons/fa';
import Link from 'next/link';

function index() {
    return (
        <div className="h-screen w-screen">
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
                    <div className="col-start-7 col-end-13  grid grid-cols-5">

                        <span className=" font-sans font-medium flex items-center justify-center hover:bg-gray-100 hover:text-gray-400 text-gray-700 cursor-pointer">Documentation</span>
                        <span className=" font-sans font-medium flex items-center justify-center hover:bg-gray-100 hover:text-gray-400  text-gray-700 cursor-pointer">Pricing</span>
                        <span className=" font-sans font-medium flex items-center justify-center hover:bg-gray-100 hover:text-gray-400  text-gray-700 cursor-pointer">
                			<Link href="/services">Services</Link>        
                        </span>
                        <span className=" font-sans font-medium flex items-center justify-center hover:bg-blue-300 hover:text-gray-400  text-gray-100 bg-blue-400 cursor-pointer">

                            <Link href="/signin">Signin</Link>

                        </span>
                        <span  className=" font-sans font-medium flex items-center  justify-center hover:bg-yellow-300 hover:text-gray-400  text-gray-100 bg-yellow-400 cursor-pointer" >
                            
                            <Link href="/signup">Signup</Link>
                        
                        </span>

                    </div>

                </div>

                <div className="h-section  grid grid-cols-12 border-t-2 border-b-2">
                    <div className="col-start-1 col-end-6 grid grid-cols-12">

                       
                        <div className="col-start-1 col-end-5 "></div>
                        <div className="col-start-5 col-end-13 flex flex-col">
                            <div className=" flex-grow flex items-end justify-center">

                                <span className="font-serif font-bold text-6xl" >Get started</span>
                            </div>
                            <div className=" flex-grow flex justify-center items-start">
                                <div className="font-sans font-bold text-2xl">
                                    <span>Build your dream app <br></br>with swiftbase</span>
                                    <br></br>
                                    <button className="bg-green-400 py-3 px-2 rounded-sm text-gray-100 hover:bg-green-200">Get Started</button>
                                </div>
                            </div>

                        </div>
                        


                    </div>
                    <div className="col-start-7 col-end-13 flex py-5 ">

                        <img src="/female-developer-vector.jpg" className="h-section" style={{'borderRadius':'50%','height':'570px'}}/>
                    </div>



                </div>
                


                <div className="h-section  grid grid-cols-12 border-t-2 border-b-2">
                    
                    <div className="col-start-2 col-end-6 flex pb-10 ">

                        <img src="/money.png" className="h-section rounded-lg" style={{}}/>
                    
                    </div>

                    <div className="col-start-7 col-end-13 grid grid-cols-12">

                       
                        
                        <div className="col-start-2 col-end-10 flex flex-col">
                            <div className=" flex-grow flex items-end justify-center">

                                <span className="font-mono font-bold text-6xl" >Flexable price plan</span>
                            </div>
                            <div className="flex-grow  font-mono font-bold text-2xl">Giving you and your bussiness help were you really need it!<br></br><button className="bg-red-400 py-3 px-2 rounded-sm text-gray-100 hover:bg-red-200">pricing</button></div>
                            <div className="flex-grow"></div>

                        </div>
                        


                    </div>
                    
                </div>

                <div className="h-services-section m-b-10 py-2 p-b-10  border-t-2 border-b-2">
                    <div className="flex items-center justify-center mb-1" style={{'height':'70px'}}>
                        <span className="text-2xl font-sans font-bold ">Services</span>

                    </div>
                        
                    <div className="grid grid-cols-12 border-t-2" style={{'height':'600px'}}>

                        <div className="grid grid-cols-4 gap-5 col-start-2 col-end-12 bg-white-400">
                            {
                                [
                                    {title:'Frontend deploment',imgSrc:"/frontend.png",footer:"You give us your static files ie html , css, javascript files and we deploy them with free tls encryption ",bgColor:"blue"},
                                    
                                    {title:'backend-deployment',imgSrc:"/backend.jpg",footer:"Deploy your api and servers using popular languges and frameworks such as node js , python-flask and php ",bgColor:"red"},
                                    
                                    {title:'Sql database deployment',imgSrc:"/sql.jpg",footer:"Use our sql servers to store data that can later be used by your api using swiftbase",bgColor:"yellow"},
                                    
                                    {title:'no sql database deployment',imgSrc:"/no-sql-3.png",footer:"If your less tradition we also offer a no sql database which you can use to store your data",bgColor:"green"}
                                
                                ].map((item:params):ReactElement => (

                                    <ServiceCard title={`${item.title}`} key={item.title} imgSrc={`${item.imgSrc}`} footer={`${item.footer}`} bgColor={`${item.bgColor}`}/>
                            
                                    )
                                )
                            }
                            


                        </div>
                  
                    </div>

                       



                </div>


                <div className="h-section  grid grid-cols-12 border-t-2 border-b-2">
                    <div className="col-start-1 col-end-6 grid grid-cols-12">

                       
                        <div className="col-start-1 col-end-5 "></div>
                        <div className="col-start-5 col-end-13 flex flex-col">
                            <div className=" flex-grow flex items-end justify-center">

                                <span className="font-serif font-bold text-6xl pr-20">Documentation</span>
                            </div>
                            <div className=" flex-grow flex justify-center items-start">
                                <div className="font-sans font-bold text-2xl">
                                    <span>  Read our documentation to get up and running  with swiftbase</span>
                                    <br></br> 
                                    <button className="bg-green-400 py-3 px-2 rounded-sm text-gray-100 hover:bg-green-200">Documentation</button>
                                </div>
                            </div>

                        </div>
                        


                    </div>
                    <div className="col-start-7 col-end-13 flex py-5 ">

                        <img src="/documentation.svg" className="h-section" style={{'borderRadius':'1%','height':'570px'}}/>
                    </div>



                </div>

                
                <div className="h-footer-section bg-gray-700 flex flex-col ">

                    <div className="flex-grow grid grid-cols-4 pt-2">
                        
                        <div className=" col-start-2 col-end-4 grid  grid-cols-12">

                            <div className="col-start-4 col-end-9  row-start-1 row-end-2  grid grid-cols-4">
                                <div className="flex items-center justify-center">

                                        <FaFacebook className="h-5 w-5" />
                                    
                                </div>

                                <div className="flex items-center justify-center">
                                    <FaTelegram className="h-5 w-5" />
                                </div>

                                <div className="flex items-center justify-center">
                                    <FaDiscord className="h-5 w-5"/>
                                </div>
                                <div className="flex items-center justify-center">
                                    <FaTwitter className="h-5 w-5"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex-grow grid grid-cols-12 py-2 ">
                        <div className="col-start-5 col-end-9 grid grid-cols-4">
                            <span className=" border-x-2 border-white-100 flex justify-center font-serif font-bold text-lg text-white">Documentation</span>
                            <span className=" border-x-2 border-white-100 flex justify-center font-serif font-bold text-lg text-white">pricings</span>
                            <span className=" border-x-2 border-white-100 flex justify-center font-serif font-bold text-lg text-white">services</span>
                            <span className=" border-x-2 border-white-100 flex justify-center font-serif font-bold text-lg text-white">about us</span>
                         </div>


                    </div>
                
                   
                            
                </div>
        </div>
    )
}

export default index
