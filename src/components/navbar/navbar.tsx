import { HashLink } from 'react-router-hash-link'
import { PiPuzzlePieceBold } from "react-icons/pi";
import { motion } from "framer-motion"


const Navbar = () => {

  return (
    <div className='fixed w-full z-20 '>
      {/* <Banner /> */}
      <div className="navbar bg-white dark:bg-neutral-950
      text-neutral-600 dark:text-neutral-300 z-999 shadow-md ">

        <div className='navbar-start lg:hidden '>
          <div className="drawer dropdown ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}

              <motion.label htmlFor="my-drawer" className=" btn btn-square btn-ghost dark:hover:bg-neutral-800 hover:bg-neutral-200 " whileTap={{ scale: 0.95 }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </motion.label>

            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-2 w-fit min-h-full bg-white dark:bg-neutral-950">
                {/* Sidebar content here */}
                <li className=" dark:hover:bg-neutral-800 hover:bg-neutral-200  rounded-md p-1"><HashLink smooth to="/#" scroll={(el) => { const yOffset = -100; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-home-smile bx-sm' ></i> Home</HashLink></li>
                <li className=" dark:hover:bg-neutral-800 hover:bg-neutral-200  rounded-md p-1"><HashLink smooth to="/#about" scroll={(el) => { const yOffset = -100; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-smile bx-sm' ></i> About</HashLink></li>
                <li className=" dark:hover:bg-neutral-800 hover:bg-neutral-200  rounded-md p-1"><HashLink smooth to="/#skills" scroll={(el) => { const yOffset = -100; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-code-block bx-sm'></i> Skills</HashLink></li>
                <li className=" dark:hover:bg-neutral-800 hover:bg-neutral-200  rounded-md p-1"><HashLink smooth to="/#projects" scroll={(el) => { const yOffset = -100; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-folder-open bx-sm'></i> Projects</HashLink></li>
                <li className=" dark:hover:bg-neutral-800 hover:bg-neutral-200  rounded-md p-1"><HashLink smooth to="/#experience" scroll={(el) => { const yOffset = -100; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx bx-sm'><PiPuzzlePieceBold /></i> <p className='pl-[6px]'>Experience</p></HashLink></li>
                <li className=" dark:hover:bg-neutral-800 hover:bg-neutral-200  rounded-md p-1"><HashLink smooth to="/#contact" scroll={(el) => { const yOffset = -100; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }}><i className='bx-fw bx bx-message-dots bx-sm'></i> Contact</HashLink></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='lg:navbar-start flex justify-center items-center'><HashLink smooth to="/#" scroll={(el) => { const yOffset = -100; const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset; window.scrollTo({ top: y, behavior: 'smooth' }); }} className="btn btn-ghost text-xl dark:hover:bg-neutral-800 hover:bg-neutral-200 font-bold"> My Portfolio</HashLink></div>

        <nav className="navbar-center hidden lg:flex h-1">

          <ul className="menu menu-horizontal gap-0 place-items-center ">

            <li className="dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded-lg">
              <HashLink smooth to="/#"
                scroll={(el) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="Home">
                <i className='bx-fw bx bx-home-smile bx-sm' ></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded-lg">
              <HashLink smooth to="/#about"
                scroll={(el) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="About">
                <i className='bx bx-smile bx-sm' ></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded-lg">
              <HashLink smooth to="/#skills"
                scroll={(el) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="Skills">
                <i className='bx bx-code-block bx-sm'></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded-lg">
              <HashLink smooth to="/#projects"
                scroll={(el) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="Projects">
                <i className='bx bx-folder-open bx-sm'></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded-lg">
              <HashLink smooth to="/#experience"
                scroll={(el) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
                className="tooltip tooltip-bottom" data-tip="Experience">
                <i className='bx bx-sm'><PiPuzzlePieceBold /></i>
              </HashLink>
            </li>

            <li className="dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded-lg">
              <HashLink smooth to="/#contact"
                scroll={(el) => {
                  const yOffset = -100; // Adjust the offset to your liking
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}

                className="tooltip tooltip-bottom" data-tip="Contact">
                <i className='bx bx-message-dots bx-sm'></i>
              </HashLink>
            </li>

          </ul>
        </nav>

        <div className="navbar-end">
          <div></div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
