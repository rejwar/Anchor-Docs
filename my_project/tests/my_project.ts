// import * as anchor from "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";
// import { MyProject } from "../target/types/my_project";
// import { expect } from "chai";

// describe("lending Drill" , () => {
//   anchor.setProvider(provider);

//   const program = anchor.workspace.AnchorBoilerplate as Program < AnchorBoilerplate>;

//   it("Deposit  collateral into a PDA vault " , async() => {
//     const amount = new anchor.BN(500000);

    
//     const [VaultPDA ] = anchor.web3.PublicKey.findProgramAddressSync(
//       [Buffer.from("Vault ") , provider . wallet.publickey.toBuffer()],
//       program.programId
//     );

//     await program.methods.deposit(amount).accounts({
//       valutAccount: VaultPDA,
//       user: provider.wallet.publickey,
//       systemProgram: anchor.web3.SystemProgram.programId,
//     })
//     .rpc();

//     const valutData = await program.account.userVault.fetch(VaultPDA);
//     expect(valutData .collateral.toString ()).to.equal(amount.toString());
//     console.log("Vault successfully updated with amount " , valutData.collateral.toString());
//   });
// });



// import * as anchor from "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";

// import { AnchorBoilerplate} from "../target/types/anchor_boilerplate";
// import { expect } from "chai";

// describe ("Landing Drill" , () => {
//   const provider = anchor.AnchoProvider.env();
//   anchor.setProvider(provider);

//   // RULE: Force the cast to fix the "Property does not exist" error
//   const program = anchor.workspace.AnchorBoilerplate as Program<AnchorBoilerplate>;

//   it (" Deposits dollateral into a PDA valut " , async () => {
//     const amount = new anchor.BN(5000000);

//     // Find the PDA (mental ম্map of SOlana)

//     const [valutPDA ] = anchor.web3.PublicKey.findProgramAddressSync(
//       [Buffer . from ("vault") , provider. wallet . publickey.toBuffer()],
//       program.programId
//     );

//     await program.methods.desposit(amount).accounts({
//       vaultAccount: valutPDA,
//       user: provider.wallet.publicKey,
//       systemProgram: anchor .web3.SystemProgram.programId,
//     })
//     .rpc();


//     const valueData = await program.account.userVault.fetch(valutPDA);
//     expect(valueData . collateral.toString()).to.equal(amount . toString());
//     console.log("Vault successfully updated with amount :", valueData.collateral.toString());
//   });
// });



// import * as anchor from "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";


// // This file is generated AFTER you run 'anchor build '
// import {AnchorBoilerplate} from "../target/types/anchor_boilerplate";
// import { expect } from "chai";

// describe ("Lending Drill  ",()=> {
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);

//   // RULE: Force the type cast to fix the "Property does not exist" error

//   const program = anchor.workspace.AnchorBoilerplate as Program<AnchorBoilerplate>;

//   it ("Deposit collateral into a PDA vault " , async() => {
//     const amount  = new anchor.BN(500000);

//     // find the PDA (Mental Map of Solana )

//     const [vaultPDA ] = anchor.web3.PublicKey.findProgramAddressSync(
//       [Buffer.from("Vault"), provider.wallet.publicKey.toBuffer()],
//       program.programId
//     );

//     await program.methods.deposit(amount).accounts({
//       vaultAccount: vaultPDA,
//       user: provider.wallet.publicKey,
//       systemProgram: anchor.web3.SystemProgram.programId,
//     })
//     .rpc();

//     const vaultData = await program.account.userVault,fetch(vaultPDA);
//     expect(vaultData.collateral.toString()).to.equal(amount.toString());
//     console.log("Vault  successfully updated with amount : ", vaultData.collateral.toString());
//   });
// });


// import * as anchor from "@coral-xyz/anchor"
// import { Program } from "@coral-xyz/anchor"


// // This file is generated AFTER you run 'anchor build'
// import {AnchorBoilerplate} from "../target/types/ anchor_boilerplate";
// import { expect } from "chai";



// describe ("Lending Drill " , () => {
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);

//   const program = anchor.workspace.AnchorBoilerplate as Program<AnchorBoilerplate>;

//   it ("Deposits collaterals inot PDA vaults " , async() => {
//     //RULE: Precision Rule - Never use JS number for u64
//     const amount = new anchor.BN(5000000);


//     // Find the PDA (Mental map of solana)
//     const [vaultPDA] = anchor.web3.PublicKey.findProgramAddressSync(
//       [Buffer.from("Vault" ) , provider .wallet.publicKey.toBuffer()],
//       program.programId
//     );

//     await program.methods.deposit(amount).accounts({
//       validateAccounts: vaultPDA,
//       user: provider.wallet.publicKey,
//       systemProgram: anchor.web3.SystemProgram.programId,
//     })
//     .rpc();

//     const vaultData = await program.account.userValut.fetch(vaultPDA);
//     expect(vaultData.collateral.toString()).to.equal(amount. toString());
//     console.log("Vault successfully updated with  amount : " , vaultData.collateral.toStirng());
//   });
// });



// import * as anchor from "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";

// // This file is generated AFTER you run 'anchor build'
// import {AnchorBoilerplate} from "../target/types/anchor_boilerplate";
// import { expect } from "chai";

// describe("Lending Dril" , () => {
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);

//   // RULE: Force the type cast to fix the "Property does not exist" error

//   const program = anchor.workspace.AnchorBoilerplate as program <AnchorBoilerplate>;

//   it ("Deposits collaterals into a PDA vault " , async() => {
//     // RULE Precision Rule - Never use JS numbers for u64
//     const amount = new anchor.BN(500000);

//     // Find the pda (Mental map of Solana)
//     const [vaultPda] = anchor.web3.PublicKey.findProgramAddressSync(
//       [Buffer.from("vault") , provider. wallet.publicKey.toBuffer()],
//       program.programId
//     );


//     await program.methods.deposit(amount).account({
//       vaultAccount: vaultPda,
//       user: provider.wallet.publicKey,
//       systemProgram: anchor.web3.SystemProgram.programId,
//     })
//     .rpc();


//     // verification 

//     const vaultData = await program.account.userVault.fetch(vaultPda);
//     expect(vaultData: collateral.toString()).to.equal(amount.toString());
//     console.log("Vault successfully updated with amount ", vaultData.collateral.toString());
//   });
// });




// import * as anchor "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";
// import {AnchorBoilerplate} from "../target/types/anchor..boilerplate";
// import { expect } from "chai";

// describe("Lending Drill "() => {
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);

//   //RULE: Force the type cast to fix the " Property does not exist" error
//   const program = anchor.workspace.AnchorBoilerplate as Program<AnchorBoilerplate>;

//   it("Deposits collateral into PDA vault " , async ()=> {
//     const amount = new anchor.BN(5000000);

//     //
//     const [vaultPDA] = anchor.web3.PublicKey.findProgramAddressSync(
//       [Buffer.from("vault") , getProvider. wallet . publicKey.toBuffer()],
//       program.ProgramID
//     );

//     //ACTION the handshake

//     await program.methods.desposit(amount).accounts({
//       vaultAccount: vaultPDA,
//       user: getProvider.wallet.PublicKey,
//       systemProgram: anchor.web3.SystemProgram.programId,
//     })

//     .rpc();

//     const vaultData = await program.account.userVault.fetch(vaultPDA);
//     expect(vaultData.collateral.toString()).to.equal(amount.toString());
//     console.log("valult successfully updated with amount " , valutData.collateral.toString());
//   })
// })

// import * as anchor from "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";
// import {AnchorBoilerplate } from "../target/debug/build";
// import { expect } from "chai";

// describe("Lending Drill" , () => {
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);

//   const program = anchor.workspace.AnchorBoilerplate as Program< AnchorBoilerplate>;

//   it("Deposits collateral into a PDA vault " , async () =>{
//     const amount = new anchor.BN(5000000);

//     const [vaultPDA] = anchor.web3.PublicKey.findProgramAddressSync(
//       [Buffer.from("vault"), provider.wallet.publicKey.toBuffer()],
//       program.programId
//     );

//     await program.methods .deposit(amount).accounts({
//       vaultAccount: vaultPDA,
//       user: provider.wallet.publicKey,
//       systemProgram: anchor.web3.SystemProgram.programId,
//     })

//     .rpc();

//     const vaultData = await program.account.userVault.fetch(vaultPDA);
//     expect(vaultData.collateral.toString()).to.equal(amount.toString());
//     console.log("Vault successfully updated with amount ", vaultData.collateral.toString();)
//   };
// });





// import * as anchor from "@coral-xyz/anchor";
// import { Program } from "@coral-xyz/anchor";
// import {AnchorBoilerplate} from "../target/types/anchor_boiler";
// import { expect } from "chai";

// describe ("Lending Drill " , () => {
//   const provider = anchor.AnchorProvider.env();
//   anchor.setProvider(provider);

//   const program = anchor.workspace.AnchorBoilerplate as Progarm<AnchorBoilerplate>;

//   it ("Deposits Collateral into a pda vault " , async () => {
//     const amount = new anchor.BN(5000000);
//     const [vaultPDA] = anchor.web3.PublicKey.findProgramAddressSync(
//       [Buffer.from("vault") , provider .wallet.publicKey.toBuffer()],
//       program.programId
//     );

//     await program.methods.deposit(amount).accounts({
//       vaultAccount: vaultPDA,
//       user: provider
//       systemProgra: anchor.web3.SystemProgram.programId,
//     })
//     .rpc();

//     const vaultData = await program.account.userVault.fetch(vaultPDA);
//     expect(vaultData . collatreal .toString()).to.equal(amount.toString)
//     console.log("Vault successfully updated with amount =" , vaultData.collateral.toString());
//   });
// });


import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import {MyProject}  from "../target/types/my_project";

describe("my-project" , () => {
    anchor.setProvider(anchor.AnchorProvider.env());

    const program = anchor.workspace.MyProject as Program<MyProject>;

    it("Is initialized " , async () => {
        const tx = await program.methods.initialize().rpc();
        console.log("Your transaction signature " , tx);
    });
});