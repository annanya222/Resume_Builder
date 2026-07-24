import React from 'react'
import logo from "../../assets/logo2.svg";
function Footer() {
  return (
    <>
      <style>{`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,800;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,800;1,700;1,800;1,900&display=swap');
            
         * {
         font-family: 'Poppins', sans-serif;
         }
            `}</style>


             <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-red-200/60 to-white mt-40">
             <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
                    <a href="#">

                        <img src={logo} alt="logo" className='h-26 w-auto' />
                    </a>
                    <div>
                        <p className="text-slate-800 font-semibold">Product</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-red-800 transition">Home</a></li>
                            <li><a href="/" className="hover:text-red-800 transition">Support</a></li>
                            <li><a href="/" className="hover:text-red-800 transition">Pricing</a></li>
                            <li><a href="/" className="hover:text-red-800 transition">Affiliate</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-800 font-semibold">Resources</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-red-800 transition">Company</a></li>
                            <li><a href="/" className="hover:text-red-800 transition">Blogs</a></li>
                            <li><a href="/" className="hover:text-red-800 transition">Community</a></li>
                            <li><a href="/" className="hover:text-red-800 transition">Careers<span className="text-xs text-white bg-red-800 rounded-md ml-2 px-2 py-1">We’re hiring!</span></a></li>
                            <li><a href="/" className="hover:text-red-800 transition">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-800 font-semibold">Legal</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-red-800 transition">Privacy</a></li>
                            <li><a href="/" className="hover:text-red-800 transition">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                    <div className="flex items-center gap-4 mt-3">
                      
                    </div>
                    <p className="mt-3 text-center">© 2026 <a href="">Resume Builder</a></p>
                </div>
            </footer>
    </>
  )
}

export default Footer
