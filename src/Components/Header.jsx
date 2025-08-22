import Logo from "./Logo"
import NavBar from "./NavBar"
const Header = () => {
  return (
    <header>
        <Logo/>
        <h1 className="bg-orange-950 sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
            Header
        </h1>
        <NavBar/>

    </header>
  )
}

export default Header