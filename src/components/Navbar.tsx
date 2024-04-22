import Link from "next/link";

export const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Graph Calculator", path: "/graph-calculator" },
  ];
  return (
    <nav className="-px-20 -py-4 -bg-accent-100 -flex -items-center -justify-between">
      <Link href="/">
        <div className="-italic -text-xl -font-bold -text-primary-700">
          Tooolio
        </div>
      </Link>
      <ul className="-flex -gap-6">
        {links.map((link) => (
          <li className="hover:-underline" key={link.path}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
