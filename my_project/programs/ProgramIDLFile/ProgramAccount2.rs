use anchor_lang::predude::*;

declare_id!("afsdjkhfaweirhfankdsmnfakjewq324");

#[program]

pub mod hello_anchor{
    use super::*;

    pub fn initialize(ctx: Context<initialize> , u64) -> Result <()> {
        ctx.accounts.new_account_data = data;
        msg!(" Changed data: {}" , data);
        Ok(())
    }
}

