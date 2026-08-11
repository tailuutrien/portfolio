import { NavLink } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const [open, setOpen] = useState(false);
  const navigation = navItems.map((item) => (
    <NavLink
      key={item.name}
      to={item.path}
      onClick={() => setOpen(false)} // Close the menu when a link is clicked
      className={({ isActive }) =>
        `text-sm font-medium transition-colors ${
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`
      }
    >
      {item.name}
    </NavLink>
  ));
  const desktopNavigation = (
    // Desktop navigation
    <div className="hidden md:flex items-center md:gap-8 gap-6">
      {navigation}
    </div>
  );

  const mobileNavigation = (
    // Desktop navigation
    <div className="absolute top-full left-0 w-full bg-background border-t md:hidden">
      <div className="flex flex-col gap-4 p-6">
        {navigation}
      </div>
    </div>
      
  );

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {desktopNavigation}

        {/* Mobile hamburger button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {open && mobileNavigation}

      </div>
    </nav>
  );
};

export default Navbar;