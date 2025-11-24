import React from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-dark-bg text-black selection:bg-neon-cyan/30 selection:text-neon-cyan">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
            <footer className="bg-dark-surface border-t border-black/5 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-black mb-4">CYBER<span className="text-neon-cyan">MART</span></h3>
                            <p className="text-black/60 text-sm">
                                The future of shopping is here. Experience the next generation of commerce.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-4">Shop</h4>
                            <ul className="space-y-2 text-sm text-black/60">
                                <li><a href="#" className="hover:text-neon-cyan transition-colors">New Arrivals</a></li>
                                <li><a href="#" className="hover:text-neon-cyan transition-colors">Best Sellers</a></li>
                                <li><a href="#" className="hover:text-neon-cyan transition-colors">Collections</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-4">Support</h4>
                            <ul className="space-y-2 text-sm text-black/60">
                                <li><a href="#" className="hover:text-neon-cyan transition-colors">FAQ</a></li>
                                <li><a href="#" className="hover:text-neon-cyan transition-colors">Shipping</a></li>
                                <li><a href="#" className="hover:text-neon-cyan transition-colors">Returns</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-black mb-4">Newsletter</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-dark-bg border border-black/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-neon-cyan w-full text-black placeholder-black/40"
                                />
                                <button className="bg-neon-cyan text-black px-3 py-2 rounded font-bold hover:bg-neon-cyan/80 transition-colors">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-black/5 mt-12 pt-8 text-center text-black/50 text-sm">
                        © 2025 CyberMart. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};
