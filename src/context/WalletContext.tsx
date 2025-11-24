import { createContext, useContext, useState } from 'react';

interface WalletContextType {
    isConnected: boolean;
    address: string | null;
    balance: string | null;
    connect: () => Promise<void>;
    disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};

interface WalletProviderProps {
    children: React.ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
    const [isConnected, setIsConnected] = useState(false);
    const [address, setAddress] = useState<string | null>(null);
    const [balance, setBalance] = useState<string | null>(null);

    const connect = async () => {
        console.log('Connecting wallet...');
        setTimeout(() => {
            const mockAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';
            setAddress(mockAddress);
            setIsConnected(true);
            setBalance('2.5 ETH');
        }, 500);
    };

    const disconnect = () => {
        setAddress(null);
        setIsConnected(false);
        setBalance(null);
    };

    const value = { isConnected, address, balance, connect, disconnect };

    return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};