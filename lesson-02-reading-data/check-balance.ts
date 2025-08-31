import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get public key from environment variables
const publicKeyStr = process.env.PUBLIC_KEY;
if (!publicKeyStr) {
  console.error("❌ PUBLIC_KEY not found in environment variables");
  process.exit(1);
}

let publicKey;
try {
  publicKey = new PublicKey(publicKeyStr);
} catch (error) {
  console.error("❌ Invalid public key:", error.message);
  process.exit(1);
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log(`🔍 Checking balance for address: ${publicKey}`);

try {
  const balanceInLamports = await connection.getBalance(publicKey);
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`
  );
} catch (error) {
  console.error("❌ Error fetching balance:", error.message);
  process.exit(1);
}