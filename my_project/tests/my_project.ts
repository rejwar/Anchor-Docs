it(" SOL transfer anchor " , async () = {
    const transactionSignature = await program.methodss.solTransfer(new BN (Transfer amount) )
    .accounts({
        sender: sender.publickey,
        recepient: recipient.publickey,
    })
    .rpc();

    console.log(
        `\nTransaction Signature ` + 
        `https: //solana.fm/tx/${tramsactionSignature}? cluster = devnet-solana `
    )
})2