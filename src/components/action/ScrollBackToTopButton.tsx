import { ArrowUp } from 'lucide-react';
import React from 'react'

export const ScrollBackToTopButton = (): React.JSX.Element => {

    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-1 transform transition-all duration-300 
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}>
                <button
                    onClick={scrollToTop}
                    className="bg-blue-800 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
                <span className="text-sm text-blue-800 font-medium">BACK TO TOP</span>
            </div>
        </>
    )
}
