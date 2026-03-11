import { ThemeToggle } from "@/features/common/theme/components/theme-toggle";
import { Link } from "@/i18n/navigation";
import { Navbar } from "./navbar";
import { MY_DETAILS } from "@/constants/my-details";

export const Header: React.FC = () => {
    const { name, lastName } = MY_DETAILS;

    return <header className="sticky top-0 w-full p-2 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <Link href="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
                    <span className="text-primary">{name} </span>
                    <span>{lastName}</span>
                </Link>
                <Navbar/>
                <ThemeToggle/>
            </div>
        </div>
    </header>;
}