import { HiMenuAlt1} from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai'
import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/contact", name: "Contact", id: "contact" },
    {
      path: "/products/:productId",
      name: "ProductDetails",
      id: "product-details",
    },
    { path: "/users/:userId", name: "UserProfile", id: "user-profile" },
  ];
  return (
    <div>
      <nav>
        <div className="md:hidden " onClick={() => setOpen(!open)}>
          {
            open === true? <HiMenuAlt1 className="text-2xl"></HiMenuAlt1> :  <AiOutlineClose className="text-2xl"></AiOutlineClose>
          }
          
        </div>

        <ul className={`md:flex gap-4 bg-purple-400 p-4
        ${ open ? 'hidden': ''}
        `}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
