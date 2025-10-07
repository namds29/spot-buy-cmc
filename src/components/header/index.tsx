import logo from "/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
const Header = () => {
  return (
    <>
      <header className="w-full pr-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-[100px] h-[80px]">
                <img src={logo} className="logo w-full h-full" alt="Vite logo" />
            </div>
            <div className="ml-[-15px] ">
              <div className="text-xl font-bold">SPOT BUY CENTER</div>
              <div className="text-sm font-bold text-right text-yellow-400">
                ADMIN PORTAL
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex gap-2">
                  <User />
                  Nam Doan
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
