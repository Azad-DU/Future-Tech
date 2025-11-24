import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
    const { items, removeFromCart, addToCart, total } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-dark-surface border-l border-black/5 shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-black/5">
                            <h2 className="text-xl font-bold flex items-center gap-2 text-black">
                                <ShoppingBag className="w-5 h-5 text-neon-cyan" />
                                Your Cart
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-black/50 hover:text-black hover:bg-black/5 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-black/40 space-y-4">
                                    <ShoppingBag className="w-16 h-16 opacity-20" />
                                    <p>Your cart is empty</p>
                                    <Button variant="ghost" onClick={onClose}>
                                        Start Shopping
                                    </Button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex gap-4 bg-dark-card p-4 rounded-xl border border-black/5 shadow-sm"
                                    >
                                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-medium text-black line-clamp-1">{item.name}</h3>
                                                <p className="text-sm text-neon-cyan">${item.price}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                                                    <button
                                                        onClick={() => removeFromCart(item.id)} // Note: This removes the item entirely in current context, ideally should decrease quantity
                                                        className="p-1 hover:text-neon-pink transition-colors text-black/60"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="text-sm font-medium w-4 text-center text-black">{item.quantity}</span>
                                                    <button
                                                        onClick={() => addToCart(item)}
                                                        className="p-1 hover:text-neon-cyan transition-colors text-black/60"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-black/40 hover:text-neon-pink transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-black/5 bg-dark-surface space-y-4">
                                <div className="flex items-center justify-between text-lg font-bold">
                                    <span className="text-black">Total</span>
                                    <span className="text-neon-cyan">${total.toFixed(2)}</span>
                                </div>
                                <Link to="/checkout" onClick={onClose}>
                                    <Button size="lg" glow className="w-full">
                                        Proceed to Checkout
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
