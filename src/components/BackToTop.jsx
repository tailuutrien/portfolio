import { Button } from '@base-ui/react';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react'

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        }

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    
    return (
        <Button
            onClick={scrollToTop}
            className={`
                fixed bottom-6 right-6 z-50
                flex h-12 w-12 items-center justify-center
                rounded-full
                bg-primary text-primary-foreground
                shadow-lg
                transition-all duration-300
                hover:scale-110
                ${
                visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-4 opacity-0"
                }
            `}
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </Button>
    )
}

export default BackToTop