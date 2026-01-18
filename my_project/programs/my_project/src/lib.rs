use anchor_lang::prelude::*;

declare_id!("alkgfjsfhdgfkjahsfd854q23957243");

#[program]
pub mod example {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &ctx.accounts.counter;
        msg!("Counter account created ! Current count {}", counter.count);
        Ok(())
    }

    pub fn increment(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        msg!("Previous counter is {}", counter.count);

        counter.count += 1;
        msg!("Counter incremented current count is {}", counter.count);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account (
        init,
        payer = payer,
        space = 8 + 8
    )]
    pub counter: Account<'info, Counter>,
    pub system_program: Program<'info, System>,
}

#[derive(Account)]

pub struct Increment<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
}

#[account]
pub struct Counter {
    pub count: u64,
}
