import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User, LogIn, LogOut, ChevronDown, FunnelIcon } from "lucide-react";
import "./user-button.css";

const isLoggedIn = false; // Replace with your auth state

export default function UserButton() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="user-button">
                    <User size={18} />

                    <span className="user-button__username">{isLoggedIn ? "John Doe" : "Guest"}</span>

                    <ChevronDown size={16} />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="user-button__content" sideOffset={8} align="end">
                    <DropdownMenu.Label className="user-button__label">Account</DropdownMenu.Label>

                    <DropdownMenu.Item className="user-button__item">
                        <LogIn size={16} />
                        Login
                    </DropdownMenu.Item>

                    <DropdownMenu.Separator className="user-button__separator" />

                    <DropdownMenu.Item className="user-button__item">
                        <LogOut size={16} />
                        Sign Out
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
