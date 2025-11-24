import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWallet } from '../context/WalletContext';
import { Button } from '../components/ui/Button';
import { Wallet, Truck, CheckCircle } from 'lucide-react';

export const Checkout = () => {
    const navigate = useNavigate();
    const { items, total, clearCart } = useCart();
    const { isConnected, connect } = useWallet();
    const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
    const [paymentMethod, setPaymentMethod] = useState<'wallet' | 'cod'>('wallet');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        phone: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitDetails = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('payment');
    };

    const handlePlaceOrder = () => {
        // Simulate order processing
        setTimeout(() => {
            clearCart();
            setStep('success');
        }, 1500);
    };

    if (items.length === 0 && step !== 'success') {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-bold mb-4 text-black">Your cart is empty</h2>
                <Button onClick={() => navigate('/shop')} glow>Continue Shopping</Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            {step === 'success' ? (
                <div className="text-center py-12 bg-dark-card rounded-2xl border border-neon-cyan/20 shadow-lg shadow-neon-cyan/10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-cyan/10 text-neon-cyan mb-6">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-black">Order Confirmed!</h2>
                    <p className="text-black/60 mb-8">Thank you for your purchase. Your order has been placed successfully.</p>
                    <Button onClick={() => navigate('/')} glow>Return Home</Button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Forms */}
                    <div>
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'details' ? 'bg-neon-cyan text-black' : 'bg-black/10 text-black/40'}`}>1</div>
                                <h2 className={`text-xl font-bold ${step === 'details' ? 'text-black' : 'text-black/40'}`}>Shipping Details</h2>
                            </div>

                            {step === 'details' && (
                                <form onSubmit={handleSubmitDetails} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full bg-dark-bg border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-black placeholder-black/40"
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full bg-dark-bg border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-black placeholder-black/40"
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-dark-bg border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-black placeholder-black/40"
                                    />
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Street Address"
                                        required
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full bg-dark-bg border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-black placeholder-black/40"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            required
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className="w-full bg-dark-bg border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-black placeholder-black/40"
                                        />
                                        <input
                                            type="text"
                                            name="zip"
                                            placeholder="ZIP Code"
                                            required
                                            value={formData.zip}
                                            onChange={handleInputChange}
                                            className="w-full bg-dark-bg border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-black placeholder-black/40"
                                        />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full bg-dark-bg border border-black/10 rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan text-black placeholder-black/40"
                                    />
                                    <Button type="submit" className="w-full mt-4" glow>Continue to Payment</Button>
                                </form>
                            )}
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step === 'payment' ? 'bg-neon-cyan text-black' : 'bg-black/10 text-black/40'}`}>2</div>
                                <h2 className={`text-xl font-bold ${step === 'payment' ? 'text-black' : 'text-black/40'}`}>Payment Method</h2>
                            </div>

                            {step === 'payment' && (
                                <div className="space-y-4">
                                    <div
                                        className={`p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'wallet' ? 'border-neon-cyan bg-neon-cyan/5' : 'border-black/10 hover:border-black/30'}`}
                                        onClick={() => setPaymentMethod('wallet')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Wallet className={`w-6 h-6 ${paymentMethod === 'wallet' ? 'text-neon-cyan' : 'text-black/40'}`} />
                                            <div>
                                                <h3 className="font-bold text-black">Crypto Wallet</h3>
                                                <p className="text-sm text-black/60">Pay securely with your connected wallet</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-neon-cyan bg-neon-cyan/5' : 'border-black/10 hover:border-black/30'}`}
                                        onClick={() => setPaymentMethod('cod')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Truck className={`w-6 h-6 ${paymentMethod === 'cod' ? 'text-neon-cyan' : 'text-black/40'}`} />
                                            <div>
                                                <h3 className="font-bold text-black">Cash on Delivery</h3>
                                                <p className="text-sm text-black/60">Pay when your order arrives</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        {paymentMethod === 'wallet' && !isConnected ? (
                                            <Button onClick={connect} className="w-full" variant="secondary">
                                                Connect Wallet to Pay
                                            </Button>
                                        ) : (
                                            <Button onClick={handlePlaceOrder} className="w-full" glow>
                                                {paymentMethod === 'wallet' ? `Pay $${total.toFixed(2)}` : 'Place Order'}
                                            </Button>
                                        )}
                                        <button
                                            onClick={() => setStep('details')}
                                            className="w-full mt-4 text-sm text-black/50 hover:text-black"
                                        >
                                            Back to Shipping Details
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="bg-dark-card p-6 rounded-2xl border border-black/5 h-fit">
                        <h3 className="text-xl font-bold mb-6 text-black">Order Summary</h3>
                        <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-16 h-16 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-black line-clamp-1">{item.name}</h4>
                                        <div className="flex justify-between mt-1">
                                            <span className="text-sm text-black/60">Qty: {item.quantity}</span>
                                            <span className="text-sm font-bold text-black">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-black/10 pt-4 space-y-2">
                            <div className="flex justify-between text-black/60">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-black/60">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-black pt-2 border-t border-black/10 mt-2">
                                <span>Total</span>
                                <span className="text-neon-cyan">${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
