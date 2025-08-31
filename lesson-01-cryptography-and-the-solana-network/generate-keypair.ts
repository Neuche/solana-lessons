import * as fs from 'fs';
import * as path from 'path';
import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';

const envPath = path.join(__dirname, '.env');

// Check if .env file exists
if (fs.existsSync(envPath)) {
  console.log("📁 Found existing .env file");
  
  // Read the .env file content
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  // Check if SECRET_KEY is in array format [1,2,3,...]
  const arrayFormatMatch = envContent.match(/SECRET_KEY=\[([\d,\s]+)\]/);
  
  if (arrayFormatMatch) {
    console.log("🔄 Converting array format to base58 format...");
    
    try {
      // Parse the array format
      const secretKeyArray = arrayFormatMatch[1].split(',').map(num => parseInt(num.trim()));
      const secretKeyUint8Array = new Uint8Array(secretKeyArray);
      
      // Create keypair from the secret key
      const keypair = Keypair.fromSecretKey(secretKeyUint8Array);
      
      // Convert to base58 format
      const base58SecretKey = bs58.encode(secretKeyUint8Array);
      
      // Get public key
      const publicKey = keypair.publicKey.toString();
      
      // Update .env file with base58 format
      const newEnvContent = `SECRET_KEY=${base58SecretKey}
PUBLIC_KEY=${publicKey}`;
      
      fs.writeFileSync(envPath, newEnvContent);
      
      console.log("✅ Successfully converted and loaded keypair!");
      console.log(`Public Key: ${publicKey}`);
      
    } catch (error) {
      console.error("❌ Error converting secret key:", error);
      process.exit(1);
    }
  } else {
    // Check if SECRET_KEY is already in base58 format
    const base58FormatMatch = envContent.match(/SECRET_KEY=([A-Za-z0-9]+)/);
    
    if (base58FormatMatch) {
      try {
        const base58SecretKey = base58FormatMatch[1];
        const secretKeyUint8Array = bs58.decode(base58SecretKey);
        const keypair = Keypair.fromSecretKey(secretKeyUint8Array);
        
        console.log("✅ Loaded existing keypair from .env file!");
        console.log(`Public Key: ${keypair.publicKey.toString()}`);
        
      } catch (error) {
        console.error("❌ Error loading keypair:", error);
        process.exit(1);
      }
    } else {
      console.error("❌ Could not find SECRET_KEY in .env file");
      process.exit(1);
    }
  }
} else {
  // Generate new keypair and save to .env
  console.log("🆕 Generating new keypair...");
  
  const keypair = Keypair.generate();
  
  // Convert secret key to base58 format
  const base58SecretKey = bs58.encode(keypair.secretKey);
  
  // Prepare .env content with base58 format
  const envContent = `SECRET_KEY=${base58SecretKey}
PUBLIC_KEY=${keypair.publicKey.toString()}`;
  
  // Write to .env file
  fs.writeFileSync(envPath, envContent);
  
  console.log("✅ Generated new keypair and saved to .env file!");
  console.log(`Public Key: ${keypair.publicKey.toString()}`);
}