# Writing Data to the Solana Network

This lesson demonstrates how to create and send transactions on the Solana network using the `@solana/web3.js` library, specifically focusing on transferring SOL between accounts.

## Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)
- Basic understanding of TypeScript/JavaScript
- A funded wallet with some devnet SOL (you can airdrop from a faucet)

## Setup

1. Navigate to this directory:
   ```bash
   cd lesson-03-writing-data
   ```

2. Install dependencies:
   ```bash
   npm install @solana/web3.js @solana-developers/helpers dotenv
   npm install -D typescript @types/node
   ```

## Project Structure

- `transfer.ts` - Script to transfer SOL between accounts
- `.env` - Stores your wallet's secret key (not committed to git)
- `tsonfig.json` - TypeScript configuration

## Usage

### Transfer SOL

1. Create a `.env` file with your wallet's secret key:
   ```
   SECRET_KEY=your_secret_key_here
   ```

2. Run the transfer script with a destination public key:
   ```bash
   npx esrun transfer.ts <destination_public_key>
   ```
   Example:
   ```bash
   npx esrun transfer.ts 5ZzgF7qQp5p5q5p5q5p5q5p5q5p5q5p5q5p5q5p5q5p5q5p5q5p5q5p5q5p
   ```

## Key Concepts

- Creating and sending transactions
- Transferring SOL between accounts
- Transaction confirmation
- Working with secret keys securely

## Security Notes

- Never commit your secret key to version control
- The `.gitignore` file is configured to exclude sensitive files
- Always use environment variables for sensitive data
- Be cautious when handling real funds on mainnet

## Resources

- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)
- [Solana Devnet Explorer](https://explorer.solana.com/?cluster=devnet)
- [Solana Cookbook - Sending SOL](https://solanacookbook.com/)
