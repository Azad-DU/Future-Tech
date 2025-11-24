export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: number;
    specs: Record<string, string>;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Neural Interface V2',
        price: 2999.99,
        description: 'Direct brain-computer interface with sub-millisecond latency. Experience the digital world like never before.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        category: 'Implants',
        rating: 4.9,
        specs: {
            'Bandwidth': '100 TB/s',
            'Latency': '< 1ms',
            'Battery Life': 'Indefinite (Bio-powered)',
            'Compatibility': 'Cortex OS 5.0+'
        }
    },
    {
        id: '2',
        name: 'Quantum Wristwatch',
        price: 14999.00,
        description: 'Keeps time in multiple dimensions simultaneously. Never be late in any timeline.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
        category: 'Wearables',
        rating: 5.0,
        specs: {
            'Accuracy': 'Planck Time',
            'Material': 'Neutron Star Alloy',
            'Water Resistance': 'Void-proof',
            'Dimensions': 'Variable'
        }
    },
    {
        id: '3',
        name: 'Holographic Projector X1',
        price: 899.50,
        description: 'Portable 8K volumetric display. Project anything, anywhere, in true 3D.',
        image: 'https://images.unsplash.com/photo-1535378437327-b7128d6e2d86?auto=format&fit=crop&q=80&w=800',
        category: 'Gadgets',
        rating: 4.7,
        specs: {
            'Resolution': '8K Volumetric',
            'Brightness': '5000 nits',
            'Battery': '48h Continuous',
            'Weight': '250g'
        }
    },
    {
        id: '4',
        name: 'Cyber-Katanas (Pair)',
        price: 450.00,
        description: 'High-frequency vibration blades. Cuts through composite armor like butter. Decorative use only.',
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800',
        category: 'Collectibles',
        rating: 4.8,
        specs: {
            'Blade Length': '75cm',
            'Frequency': '24.5 GHz',
            'Handle': 'Grip-synced Polymer',
            'RGB': 'Yes'
        }
    },
    {
        id: '5',
        name: 'Levitation Boots',
        price: 1200.00,
        description: 'Anti-gravity footwear for the urban explorer. Walk on air, literally.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
        category: 'Footwear',
        rating: 4.6,
        specs: {
            'Max Altitude': '5 meters',
            'Speed': '25 km/h',
            'Battery': 'Solar + Kinetic',
            'Size': 'Auto-adjusting'
        }
    },
    {
        id: '6',
        name: 'Smart Contact Lenses',
        price: 599.00,
        description: 'AR overlay directly on your retina. Navigation, notifications, and night vision.',
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
        category: 'Wearables',
        rating: 4.5,
        specs: {
            'Display': 'MicroLED Transparent',
            'Connectivity': '5G/6G',
            'Sensors': 'Biometric Suite',
            'Durability': 'Scratch-resistant'
        }
    }
];
