import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold"
        >
          Trien-Tai Luu
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
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
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;