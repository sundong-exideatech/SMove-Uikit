import React from "react";
import { ChainId } from "@smove/sdk";
interface Props {
    account: string;
    chainId: ChainId;
    logout: () => void;
    onDismiss?: () => void;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
