//

// #[error_code]

// pub enum MyError {
//     #[msg("Your age is under 18")]
//     underage,
//     #[msg("There  is no balance in your account ")]
//     insufficientFunds,
// }

// pub fn custom_instruction(ctx: Context<CustomInstruction>) -> Result<()> {
//     Ok(())
// }

// pub type Result<T> = std::result::Result<T, error::Error>;


use other_program::cpi::accounts::Increments;
use other_program::cpi::increment;

let cpi_ctx = CpiContext::new(
    ctx.accounts.other_program.to_account_info(),
    Increment {
        counter: ctx.accounts.counter.to_account_info(),
        authority: ctx.accounts.user.to_account_info(),
    },

);

increment(cpi_ctx)?;