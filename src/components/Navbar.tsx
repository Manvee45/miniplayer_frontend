import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
// import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] justify-center flex items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Create</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link to="/admin/playlist">
                <NavigationMenuLink>Playlist</NavigationMenuLink>
              </Link>

              <Link to="/admin/singer">
                <NavigationMenuLink>Singer</NavigationMenuLink>
              </Link>
              <Link to="/admin/song">
                <NavigationMenuLink>Song</NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">HOME</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/playlists">
              <NavigationMenuLink>PLAYLISTS</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/singers">
              <NavigationMenuLink href="/">SINGERS</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/songs">
              <NavigationMenuLink>SONGS</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <ModeToggle /> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
