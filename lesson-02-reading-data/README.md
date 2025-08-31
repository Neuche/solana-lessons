# Reading Data from the Solana Network

This lesson demonstrates how to connect to the Solana network and read account data using the `@solana/web3.js` library.

## Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)
- Basic understanding of TypeScript/JavaScript

## Setup

1. Navigate to this directory:
   ```bash
   cd lesson-02-reading-data
   ```

2. Install dependencies:
   ```bash
   npm install @solana/web3.js dotenv
   npm install -D typescript @types/node
   ```

## Project Structure

- `check-balance.ts` - Script to check SOL balance of a wallet
- `example.ts` - Basic example of reading account data
- `.env` - Stores your wallet's public key (not committed to git)
- `tsonfig.json` - TypeScript configuration

## Usage

### Checking Wallet Balance

1. Make sure you have a `.env` file with your wallet's public key:
   ```
   PUBLIC_KEY=your_public_key_here
   ```

2. Run the balance checker:
   ```bash
   npx esrun check-balance.ts
   ```

### Example Script

Run the example script to see basic network interaction:
```bash
npx esrun example.ts
```

## Key Concepts

- Connecting to the Solana network
- Working with public keys
- Reading account data
- Converting between lamports and SOL

## Security Notes

- Never commit your private keys to version control
- The `.gitignore` file is configured to exclude sensitive files
- Always use environment variables for sensitive data

## Resources

- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)
- [Solana Devnet Explorer](https://explorer.solana.com/?cluster=devnet)
- [Solana Cookbook](https://solanacookbook.com/)
