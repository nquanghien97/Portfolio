import { Link } from "react-scroll"

interface SideMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideMenu(props: SideMenuProps){

  const { setIsOpen } = props
  const hideSideMenu = () => {
    setIsOpen(false)
  }

  return(
    <div className="max-w-screen-lg fixed h-screen w-full right-0 bg-zinc-200 -z-50 pt-4 px-4 md:w-1/4 md:hidden top-[72px]">
      <ul className="menu-list flex flex-col text-xs font-bold">
        <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
          <Link 
            onClick={hideSideMenu}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
          <Link
            onClick={hideSideMenu}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
          <Link 
            onClick={hideSideMenu}
            activeClass="active"
            to="tech-stack"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Tech Stack
          </Link>
        </li>
        <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
          <Link
            onClick={hideSideMenu}
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="menu-list-item py-2 my-4 text-xl border-black border-b-2 cursor-pointer">
          <Link
            onClick={hideSideMenu}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
};


