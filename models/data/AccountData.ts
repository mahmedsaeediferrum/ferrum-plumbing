import {Network} from "../types/AccountTypes";

export interface AddressWithSecretKeys {
    network: Network;
    address: string;
    privateKeyHex: string;
}
