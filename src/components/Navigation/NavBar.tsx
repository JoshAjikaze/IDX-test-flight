import { NavLink } from "react-router-dom"
import NavMenu from "./NavMenu"
import { useState } from "react"

export type Tlinks = {
  name: string,
  path: string
}
const links: Tlinks[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

const NavBar = () => {

  const [showmenu, setshowmenu] = useState<boolean>(false)

  const handleMenu = () => {
    setshowmenu(!showmenu)
  }

  return (
    <header className="sticky top-0 flex items-center h-[10vh] bg-gray-500 z-[100]">
      <nav className="relative flex items-center justify-between w-full">
        <img src="" alt="logo" />
        <div className="hidden sm:flex items-center list-none gap-3">
          {
            links.map(({ name, path }, Idx) => (
              <NavLink
                key={Idx}
                to={path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? " navlinks navlinks-active bg-blue-700 text-white" : "navlinks"
                }
              >
                {name}
              </NavLink>
            ))
          }
        </div>

        <button onClick={handleMenu} onBlur={() => setshowmenu(false)} className="sm:hidden h-12 w-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
        <NavMenu isOpen={showmenu} links={links} />
    </header>
  )
}

export default NavBar