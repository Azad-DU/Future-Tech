import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, Shield, Zap } from 'lucide-react';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Product not found</h2>
                <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-black/50 hover:text-black mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative rounded-3xl overflow-hidden border border-black/5 bg-dark-card shadow-lg"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 shadow-sm">
                        <div className="flex items-center gap-1 text-yellow-400 font-bold">
                            <Star className="w-4 h-4 fill-current" />
                            {product.rating}
                        </div>
                    </div>
                </motion.div>

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <div className="text-neon-cyan font-mono mb-2">{product.category}</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">{product.name}</h1>
                        <p className="text-xl text-black/60 leading-relaxed">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-dark-card rounded-xl border border-black/5 shadow-sm">
                        <div className="text-3xl font-bold text-black">${product.price}</div>
                        <Button size="lg" glow onClick={() => addToCart(product)}>Add to Cart</Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(product.specs).map(([key, value]) => (
                            <div key={key} className="p-4 bg-dark-card rounded-lg border border-black/5 shadow-sm">
                                <div className="text-black/50 text-sm mb-1">{key}</div>
                                <div className="font-bold text-black">{value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 pt-8 border-t border-black/10">
                        <div className="flex items-center gap-4 text-black/60">
                            <Shield className="w-5 h-5 text-neon-cyan" />
                            <span>2 Year Warranty Included</span>
                        </div>
                        <div className="flex items-center gap-4 text-black/60">
                            <Zap className="w-5 h-5 text-neon-cyan" />
                            <span>Instant Digital Activation</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
