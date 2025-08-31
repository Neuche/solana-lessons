# Using Custom Programs on Solana

This lesson demonstrates how to interact with custom programs (smart contracts) on the Solana network using the `@solana/web3.js` library and the Solana Program Framework.

## Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)
- Basic understanding of TypeScript/JavaScript
- Rust and Cargo (for building programs)
- Solana CLI tools
- Previous lessons completed (especially lesson-02 and lesson-03)

## Setup

1. Navigate to this directory:
   ```bash
   cd lesson-04-using-custom-programs
   ```

2. Install dependencies:
   ```bash
   npm install @solana/web3.js @solana-developers/helpers @project-serum/anchor @coral-xyz/anchor
   npm install -D typescript @types/node
   ```

3. Install Rust (if not already installed):
   ```bash
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

4. Install Solana CLI (if not already installed):
   ```bash
   sh -c "$(curl -sSfL https://release.solana.com/v1.14.18/install)"
   ```

## Project Structure

- `program/` - Contains the Solana program (smart contract) code
- `app/` - Client-side application to interact with the program
- `tests/` - Tests for the program
- `Anchor.toml` - Anchor framework configuration
- `package.json` - Project dependencies and scripts

## Key Concepts

- Solana Program Framework (SPF)
- Program Derived Addresses (PDAs)
- Cross-Program Invocations (CPIs)
- Account validation and security
- Program interfaces (IDLs)

## Getting Started

1. Build the program:
   ```bash
   cd program
   cargo build-bpf
   ```

2. Deploy the program to devnet:
   ```bash
   solana program deploy ./target/deploy/your_program.so --url devnet
   ```

3. Run the client application:
   ```bash
   cd app
   npm install
   npm start
   ```

## Security Notes

- Always validate accounts and instructions in your programs
- Use proper error handling and validation
- Be cautious with program upgrades
- Never hardcode private keys in your code

## Resources

- [Solana Program Library](https://spl.solana.com/)
- [Anchor Framework Documentation](https://www.anchor-lang.com/)
- [Solana Cookbook - Programs](https://solanacookbook.com/core-concepts/programs.html)
- [Solana Developer Resources](https://solana.com/developers)
