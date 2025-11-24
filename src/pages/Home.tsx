// // import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export const Home = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/0 via-dark-bg/50 to-dark-bg" />

                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-black">
                            FUTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink">TECH</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 mb-8 max-w-2xl mx-auto">
                            Upgrade your reality with the latest cyber-enhancements and quantum gadgets.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/shop">
                                <Button size="lg" glow className="w-full sm:w-auto">
                                    Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                View Collections
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Zap, title: 'Instant Delivery', desc: 'Quantum teleportation to your doorstep.' },
                        { icon: Shield, title: 'Secure Tech', desc: 'Military-grade encryption on all devices.' },
                        { icon: Truck, title: 'Global Shipping', desc: 'We ship to all 7 continents and Moon Base Alpha.' },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-6 rounded-2xl bg-dark-card border border-black/5 hover:border-neon-cyan/50 transition-colors group shadow-sm"
                        >
                            <feature.icon className="w-10 h-10 text-neon-cyan mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                            <p className="text-black/60">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold">Trending <span className="text-neon-pink">Now</span></h2>
                    <Link to="/shop" className="text-neon-cyan hover:text-neon-pink transition-colors flex items-center gap-2">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <Link key={product.id} to={`/product/${product.id}`} className="group">
                            <div className="bg-dark-card rounded-2xl overflow-hidden border border-black/5 hover:border-neon-cyan/50 transition-all hover:shadow-neon-cyan/20 hover:shadow-lg">
                                <div className="aspect-square overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-black/10 text-black shadow-sm">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors text-black">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-black">${product.price}</span>
                                        <Button size="sm" variant="ghost" className="hover:bg-neon-cyan hover:text-black border border-black/10 hover:border-neon-cyan text-black/60">
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};
