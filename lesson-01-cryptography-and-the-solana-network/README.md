# Cryptography and the Solana Network

This directory contains materials and exercises for the first lesson of the Solana course, focusing on cryptography fundamentals and the Solana network architecture.

## Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)
- Basic understanding of TypeScript/JavaScript

## Setup

1. Clone this repository
2. Navigate to this directory:
   ```bash
   cd lesson-01-cryptography-and-the-solana-network
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Keypair Generation

This project includes a script to generate and manage Solana keypairs.

### First-time Setup

Run the keypair generator:
```bash
npx esrun generate-keypair.ts
```

This will:
- Generate a new Solana keypair
- Save the keys to a `.env` file
- Display the public key

### Using an Existing Keypair

If a `.env` file with `SECRET_KEY` exists, the script will load the existing keypair instead of generating a new one.

## Security Notes

- The `.env` file contains sensitive information and is included in `.gitignore`
- Never commit your secret keys to version control
- Keep your secret keys secure and never share them

## Project Structure

- `generate-keypair.ts` - Script to generate and manage Solana keypairs
- `.env` - Stores your keypair (automatically created, do not commit)
- `package.json` - Project dependencies and scripts

## Resources

- [Solana Documentation](https://docs.solana.com/)
- [Solana Cookbook](https://solanacookbook.com/)
- [Solana Developer Resources](https://solana.com/developers)
