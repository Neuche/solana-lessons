import { sendAndConfirmTransaction, Transaction, TransactionInstruction, PublicKey, Connection, Keypair } from '@solana/web3.js';
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import dotenv from 'dotenv';
dotenv.config(); // This loads the .env file into process.env

// Example connection (replace with your actual connection)
const connection = new Connection('https://api.devnet.solana.com');
const payer = getKeypairFromEnvironment("SECRET_KEY");

const PING_PROGRAM_ADDRESS = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
const PING_PROGRAM_DATA_ADDRESS =
  "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";
// Example program ID (replace with your actual program ID)
const programId = new PublicKey(PING_PROGRAM_ADDRESS);

// Example account keys (replace with your actual account public keys)
const pingProgramDataId = new PublicKey(PING_PROGRAM_DATA_ADDRESS);

const instruction = new TransactionInstruction({
  programId,
  keys: [
    {
      pubkey: pingProgramDataId,
      isSigner: false, // Set to true if this account needs to sign
      isWritable: true, // Set to true if this account will be modified
    },
  ],
});

const transaction = new Transaction().add(instruction);

const signature = await sendAndConfirmTransaction(
  connection,
  transaction,
  [payer]
);

console.log(`✅ Success! Transaction signature is: ${signature}`);
