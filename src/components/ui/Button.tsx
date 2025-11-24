import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    glow?: boolean;
}

export const Button = ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }: ButtonProps) => {
    const variants = {
        primary: 'bg-neon-cyan text-black hover:bg-neon-cyan/80 border-transparent',
        secondary: 'bg-neon-pink text-white hover:bg-neon-pink/80 border-transparent',
        outline: 'bg-transparent border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10',
        ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5 border-transparent',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 disabled:opacity-50 disabled:pointer-events-none border',
                variants[variant],
                sizes[size],
                glow && variant === 'primary' && 'shadow-neon-cyan',
                glow && variant === 'secondary' && 'shadow-neon-pink',
                className
            )}
            {...(props as any)}
        >
            {children}
        </motion.button>
    );
};

Button.displayName = 'Button';
