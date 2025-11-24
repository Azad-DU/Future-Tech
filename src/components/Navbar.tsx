import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { useCart } from '../context/CartContext';
import { useWallet } from '../context/WalletContext';
import { CartSidebar } from './CartSidebar';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const location = useLocation();
    const { itemCount } = useCart();
    const { isConnected, address, connect, disconnect } = useWallet();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Collections', path: '/collections' },
        { name: 'About', path: '/about' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-black/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-neon-cyan/10 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
                                <Zap className="w-6 h-6 text-neon-cyan" />
                            </div>
                            <span className="text-xl font-bold tracking-wider text-black">
                                CYBER<span className="text-neon-cyan">MART</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-neon-cyan ${location.pathname === link.path ? 'text-neon-cyan' : 'text-black/60'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-black/60 hover:text-black transition-colors"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                {itemCount > 0 && (
                                    <span className="absolute top-0 right-0 w-4 h-4 bg-neon-pink text-[10px] font-bold text-white flex items-center justify-center rounded-full">
                                        {itemCount}
                                    </span>
                                )}
                            </button>
                            <Button
                                variant="primary"
                                size="sm"
                                glow
                                onClick={isConnected ? disconnect : connect}
                                className={isConnected ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan" : ""}
                            >
                                {isConnected && address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-black/60 hover:text-black p-2"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-dark-surface border-b border-black/5 overflow-hidden"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                            ? 'bg-neon-cyan/10 text-neon-cyan'
                                            : 'text-black/60 hover:text-black hover:bg-black/5'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-4 flex items-center justify-between border-t border-black/5 mt-4">
                                    <span className="text-black/60">Cart ({itemCount})</span>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="w-full ml-4"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsCartOpen(true);
                                        }}
                                    >
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </nav>
        </>
    );
};
