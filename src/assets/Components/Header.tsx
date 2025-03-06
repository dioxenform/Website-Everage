import LogoEverage from "../Images/logo-perusahaan.png";
import HomeIcon from "@mui/icons-material/Home";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div>
      <div className="bg-blue-950 h-34 text-white grid justify-center items-center text-center font-montserrat">
        <div className="">
          <img
            src={LogoEverage}
            alt="Logo Everage"
            className="sm:w-8 md:w-24 lg:w-18 pt-4 mx-26"
          />
          <h1 className="pb-4 shadow-sm text-xl font-bold">
            PT EVERAGE VALVES METALS
          </h1>
        </div>
      </div>
      <div className="grid justify-center text-center font-open-sans items-center bg-black tracking-wide text-white">
        <div className="flex gap-10 pt-4 pb-2 text-sm font-semibold">
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
                  {({ active }: { active: boolean }) => (
                    <p className="block px-4 py-2 text-sm hover:bg-black -mt-2 hover:text-white ">
                      <Link to="/strukturorganisasi">Struktur Organisasi</Link>
                    </p>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <p className="block px-4 py-2 text-sm hover:text-white hover:bg-black ">
                      <Link to="/sejarah">Sejarah</Link>
                    </p>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <p className="block px-4 py-2 text-sm hover:text-white hover:bg-black -mb-1 hover:rounded-md ">
                      <Link to="/visimisi"> Visi & Misi</Link>
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
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      New Arrivals
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      Featured Products
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      Special Offers
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* MEDIA & INFORMASI Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center rounded-md hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              MEDIA & INFORMASI
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute left-0 rounded-md mt-2 w-48 origin-top-left bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      Press Releases
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      Industry News
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      Events & Exhibitions
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* GATE VALVES Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              GATE VALVES
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute rounded-md left-0 mt-2 w-48 rounded-md origin-top-left bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      GATE VALVES THREADED - GV 0 - GV 10
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      GATE VALVE SOLDER - GV 11 - GV 20
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      GATE & WASTE VALVES - GVD 2 - GVD 4
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      GATE & WATE VALVE - GVD 12 - GVD 14
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      GATE COMPRESSION VALVES - GVC 2 - GVC 4
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* GLOBE VALVES Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              GLOBE VALVES
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute rounded-md left-0 mt-2 rounded-md w-48 origin-top-left bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      Pressure Seal Globe Valves
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      Bronze Globe Valves
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      Y-Pattern Globe Valves
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* CHECK VALVES Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              CHECK VALVES
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute rounded-md left-0 mt-2 w-48 rounded-md origin-top-left bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      Swing Check Valves
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      Lift Check Valves
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      Dual Plate Check Valves
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="flex pt-2 pb-4 justify-center text-center gap-10 text-sm font-semibold">
          {/* ANGLE METER VALVES Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              ANGLE METER VALVES
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute rounded-md left-0 mt-2 w-48 origin-top-left rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      Lockable Angle Valves
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      Compression Angle Valves
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      Push-fit Angle Valves
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* RADIATOR VALVES Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              RADIATOR VALVES
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute rounded-md left-0 mt-2 w-48 origin-top-left rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      Thermostatic Radiator Valves
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      Manual Radiator Valves
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      Lockshield Valves
                    </a>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* HUBUNGI KAMI Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="flex items-center hover:text-black hover:bg-white p-1 rounded transition-colors duration-200">
              HUBUNGI KAMI
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
            <MenuItems className="absolute rounded-md left-0 mt-2 w-48 origin-top-left bg-white rounded-md text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="py-1">
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mt-2 hover:bg-black "
                    >
                      Kontak Sales
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white hover:bg-black "
                    >
                      Lokasi Kantor
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }: { active: boolean }) => (
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:text-white -mb-1 hover:rounded-md hover:bg-black "
                    >
                      Formulir Pertanyaan
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
