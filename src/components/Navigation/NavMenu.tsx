import { Link } from "react-router-dom"
import { Tlinks } from "./NavBar"

type TComponentProps = {
    isOpen: boolean
    links: Tlinks[]
}
const NavMenu = ({ isOpen, links }: TComponentProps) => {
    return (
        <div className={` ${isOpen ? 'right-0' : '-right-full'} sm:hidden absolute top-16 w-full h-72 bg-blue-600 border border-blue-600 z-[50] transition-all duration-300`}>
            <div className="w-full h-full bg-black flex flex-col items-center justify-center">
                {
                    links.map(({ name, path }, Idx) => (
                        <Link key={Idx} to={path} className={"navlinks hover:bg-blue-700 text-white"}>
                            {name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default NavMenu