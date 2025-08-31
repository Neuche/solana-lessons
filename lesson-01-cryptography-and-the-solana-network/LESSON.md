# Cryptography and the Solana Network

## Lesson Overview
This lesson covers the fundamentals of cryptography as applied in the Solana ecosystem, focusing on keypairs, public/private keys, and their usage in Solana development.

## Key Concepts

### Symmetric and Asymmetric Cryptography
- **Symmetric Cryptography**: Uses the same key for encryption and decryption (e.g., AES, Chacha20)
- **Asymmetric Cryptography**: Uses keypairs (public/private keys) for:
  - Encryption/Decryption
  - Digital Signatures
  - Key Exchange

### Solana Keypairs
- **Public Key**: Acts as an address on the Solana network
- **Secret Key**: Proves ownership/authority (must be kept private)
- Addresses look like: `dDCQNnDmNbFVi8cQhKAgXhyhXeJ625tvwsunRyRc7c8`

## Code Examples

### 1. Generating a New Keypair
```typescript
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();
console.log(`Public Key: ${keypair.publicKey.toBase58()}`);
console.log(`Secret Key: [${keypair.secretKey}]`);
```

### 2. Loading an Existing Keypair
```typescript
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");
```

## Hands-on Lab: Generate a Keypair

### Setup
1. Create a new project directory:
```bash
mkdir generate-keypair
cd generate-keypair
npm init -y
npm install typescript @solana/web3.js@1 esrun @solana-developers/helpers@2 dotenv
```

2. Create `generate-keypair.ts`:
```typescript
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();
console.log(`Public Key: ${keypair.publicKey.toBase58()}`);
console.log(`Secret Key: [${keypair.secretKey}]`);
console.log('✅ Keypair generated!');
```

3. Run the script:
```bash
npx esrun generate-keypair.ts
```

## Security Best Practices
- 🔒 Never commit secret keys to version control
- 🔑 Store secret keys in `.env` files (add `.env` to `.gitignore`)
- 🔄 Use environment variables for sensitive data
- 🛡️ Be cautious with keypair generation and storage

## Resources
- [Solana Web3.js Documentation](https://solana-labs.github.io/solana-web3.js/)
- [Solana Developer Documentation](https://docs.solana.com/)
- [Public-key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography)
