import LogoEverage from "../Images/logo-perusahaan.png";
import HomeIcon from "@mui/icons-material/Home";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="">
      <div className="bg-blue-950 h-34 text-white grid justify-center items-center text-center font-montserrat">
        <div className="">
          <img
            src={LogoEverage}
            alt="Logo Everage"
            className="sm:w-8 md:w-24 lg:w-18 pt-4 mx-26"
          />
          <h1 className="pb-4 shadow-sm text-xl font-bold">
            PT EVER AGE VALVES METALS
          </h1>
        </div>
      </div>
      <div className="grid justify-center text-center font-open-sans items-center bg-black tracking-wide text-white">
        <div className="flex gap-10 pt-4 pb-4 text-sm font-semibold">
          <button className="flex -mt-[2px] items-center p-1 rounded  transition-colors duration-200">
            <HomeIcon className="text-xl mr-1" />
            <Link to="/">
              <span>HOME</span>
            </Link>
          </button>
          {/* PROFILE Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:bg-white hover:text-black p-1 rounded transition-colors duration-200">
              PROFILE
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute left-0 rounded-md w-48 origin-top-left ring-black bg-white text-black shadow-lg ring-1 ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {() => (
                    <p className="block px-4 py-2 text-sm hover:bg-black -mt-2 hover:text-white ">
                      <Link to="/strukturorganisasi">
                        Organizational structure
                      </Link>
                    </p>
                  )}
                </MenuItem>
                <MenuItem>
                  {() => (
                    <p className="block px-4 py-2 text-sm hover:text-white hover:bg-black ">
                      <Link to="/sejarah">History</Link>
                    </p>
                  )}
                </MenuItem>
                <MenuItem>
                  {() => (
                    <p className="block px-4 py-2 text-sm hover:text-white hover:bg-black -mb-1 hover:rounded-md ">
                      <Link to="/visimisi"> Vission & Mission</Link>
                    </p>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* ALL PRODUCT Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              ALL PRODUCT
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute left-0 rounded-md mt-2 w-48 origin-top-left bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {() => (
                    <p className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black -mb-1 ">
                      <Link to="/allproduct">All Product</Link>
                    </p>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* MEDIA & INFORMASI Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center rounded-md hover:text-black hover:bg-white p-1  transition-colors duration-200">
              MEDIA & INFORMASI
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute left-0 rounded-md mt-2 w-48 origin-top-left bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {() => (
                    <a
                      href="/gallery"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      GALLERY
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {() => (
                    <a
                      href="/videomenu"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      VIDEO
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {() => (
                    <a
                      href="agendamenu"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      ACTIVITY AGENDA
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* HUBUNGI KAMI Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              CONTACT US
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute rounded-md left-0 mt-2 w-48 origin-top-left bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {() => (
                    <a
                      href="/contact"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      Our Contact
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
