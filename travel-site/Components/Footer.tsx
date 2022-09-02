<div className="h-full w-full overflow-hidden ">
             <div className="flex Japan  overflow-hidden w-full h-full hover:scale-105 transition-transform duration-600 ease-in-out  ">
               <h2 className='flex justify-end p-6 items-start flex-col'>Japan</h2>
             </div>
           </div>
           <div className="h-full w-full  overflow-hidden">
             <div className="flex Hawaii animate__animated animate__fadeInRight duration-500 overflow-hidden w-full h-full hover:scale-105 transition-transform duration-600 ease-in-out">
               <h2 className='flex justify-end p-6 items-start flex-col'>Hawaii</h2>
             </div>
           </div>
           <div className="h-full w-full overflow-hidden">
             <div className="flex Paris overflow-hidden w-full h-full hover:scale-105 transition-transform duration-600 ease-in-out">
               <h2 className='flex justify-end p-6 items-start flex-col'>Paris</h2>
             </div>
           </div>
           <div className="h-full w-full  overflow-hidden">
             <div className="flex Norway overflow-hidden w-full h-full hover:scale-105 transition-transform duration-600 ease-in-out">
               <h2 className='flex justify-end p-6 items-start flex-col'>Norway</h2>
             </div>
           </div>




<img src="/japan.jpg" alt="" className={`${!toggle && 'hidden'} overflow-hidden animate-in slide-in-from-right  duration-1000 w-full`}/>
          <img src="/hawaii.jpg" alt="" className={`${!toggle && 'hidden'} overflow-hidden animate-in slide-in-from-right  duration-3000`}/>
          <img src="/paris.jpg" alt="" className={`${!toggle && 'hidden'} overflow-hidden animate-in slide-in-from-right  duration-4000`}/>
          <img src="/norway.jpg" alt="" className={`${!toggle && 'hidden'} overflow-hidden animate-in slide-in-from-right  duration-5000`}/>











          <div className=' grid xl:grid-cols-3 grid-col-1 '>
          <Nav />
        <div className="flex flex-col xl:h-screen    duration-1000  z-20">
          <div data-aos="slide-right"   data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className=" flex flex-col "> 
              <h1   className=" xl:text-6xl uppercase pt-4 px-4 font-extrabold items-center animate-in text-3xl slide-in-from-left justify-center ">Popular Destinations</h1>
              <div className="flex">
                  <h2 className="uppercase px-6 font-medium ">Scroll Right For More</h2>
                  <ArrowRightIcon className='h-6 w-9'/>
              </div>
          </div>
          
        </div> 
        <div ref={scrollRef}  className=" scroll-smooth overflow-y-scroll overflow-x-scroll flex flex-col  scrollbar-hide w-full scroll col-span-2 ">
            <div data-aos="fade-up"   data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" className=" md:grid-col-2 animate-in slide-in-from-bottom duration-1000  flex flex-row w-[10000px]  ">
              {posts.map((post) => (
                <Link key={post.id} className='' href={`/post/${post.slug.current}`}>
                  <div className= {` h-screen relative transition-transform  overflow-hidden`} >
                      <h1 className='absolute text-white opacity-100 z-50 p-8 text-3xl font-bold xl:top-[1100px]'>{post.title}</h1>
                    <img className={`${expand ? "h-full text-white " : " h-20  text-white x" } duration-3000 h-full  ease opacity-60 hover:opacity-100  object-cover transition-transform   ease-in cursor-pointer`} src={urlFor(post.mainImage).url()!} alt="" onMouseLeave={() => setExpand(!true)} />
                  </div>
                </Link>
              ))}
            </div>
          </div>