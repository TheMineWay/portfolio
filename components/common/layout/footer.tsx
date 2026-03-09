import { formatDate } from "date-fns";

const CURRENT_YEAR = formatDate(new Date(), "yyyy");

export const Footer: React.FC = () => {
    return <footer className="py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        {/* MAIN FOOTER SPACE */}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* LINKS */}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>{CURRENT_YEAR}</p>
                </div>
            </div>
        </div>
    </footer>;
};