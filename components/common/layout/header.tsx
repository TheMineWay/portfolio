import { ThemeToggle } from "@/features/common/theme/components/theme-toggle";
import Link from "next/link";
import { Navbar } from "./navbar";

export const Header: React.FC = () => {
    // TODO: read name from constant
    return <header className="sticky top-0 w-full p-2 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between xl:justify-center">
                <Link href="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
                    <span className="text-primary">Joel </span>
                    <span>Campos</span>
                </Link>
                <Navbar/>
                <ThemeToggle/>
            </div>
        </div>
    </header>;
}