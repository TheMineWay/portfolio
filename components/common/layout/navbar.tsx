import { ThemeToggle } from "@/features/common/theme/components/theme-toggle";

export const Navbar: React.FC = () => {
    return <nav className="sticky top-0 w-full p-2 bg-background/80 backdrop-blur-sm z-50">
        <ThemeToggle/>
    </nav>;
}