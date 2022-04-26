interface CardProps {
    address: string;
    showLink: boolean;
    hasCopied: boolean;
    onCopy: (value: string) => void;
}
export declare const Card: ({ address, showLink, hasCopied, onCopy }: CardProps) => JSX.Element;
interface WalletProps {
    showLink: boolean;
    address: string;
}
export declare const Wallet: ({ showLink, address }: WalletProps) => JSX.Element;
export default Wallet;
