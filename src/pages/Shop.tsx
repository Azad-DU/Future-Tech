import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

export const Shop = () => {
    const { addToCart } = useCart();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <h1 className="text-4xl font-bold">Shop <span className="text-neon-cyan">All</span></h1>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40">🔍</span>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-dark-card border border-black/10 rounded-lg pl-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:border-neon-cyan transition-colors text-black placeholder-black/40"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                    ? 'bg-neon-cyan text-black'
                                    : 'bg-dark-card border border-black/10 hover:border-neon-cyan/50 text-black/60'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to={`/product/${product.id}`} className="group block h-full">
                            <div className="bg-dark-card rounded-2xl overflow-hidden border border-black/5 hover:border-neon-cyan/50 transition-all hover:shadow-neon-cyan/20 hover:shadow-lg h-full flex flex-col">
                                <div className="aspect-square overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs text-neon-cyan mb-2 font-mono">{product.category}</div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-neon-cyan transition-colors text-black">{product.name}</h3>
                                    <div className="mt-auto flex items-center justify-between pt-4">
                                        <span className="text-xl font-bold text-black">${product.price}</span>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="hover:bg-neon-cyan hover:text-black border border-black/10 hover:border-neon-cyan text-black/60"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                addToCart(product);
                                            }}
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-black/40">
                    No products found matching your criteria.
                </div>
            )}
        </div>
    );
};
