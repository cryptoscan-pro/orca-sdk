import type { Connection } from "@solana/web3.js";

export interface OrcaApiParams {
    buySlippage: number;
    bumpSlippage: number;
    sellSlippage: number;
    buyFee: number;
    sellFee: number;
    transferFee: number;
    connection?: Connection;
}
