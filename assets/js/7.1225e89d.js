(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{223:function(v,e,_){"use strict";_.r(e);var t=_(0),o=Object(t.a)({},function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"events"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[v._v("#")]),v._v(" Events")]),v._v(" "),_("p",[v._v("Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the default Substrate runtime.")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#balances"}},[v._v("balances")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#contract"}},[v._v("contract")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#council"}},[v._v("council")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#councilMotions"}},[v._v("councilMotions")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#democracy"}},[v._v("democracy")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#grandpa"}},[v._v("grandpa")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#indices"}},[v._v("indices")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#session"}},[v._v("session")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#staking"}},[v._v("staking")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#sudo"}},[v._v("sudo")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#system"}},[v._v("system")])])])]),v._v(" "),_("li",[_("p",[_("strong",[_("a",{attrs:{href:"#treasury"}},[v._v("treasury")])])])])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"balances"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#balances","aria-hidden":"true"}},[v._v("#")]),v._v(" balances")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("NewAccount")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A new account was created.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("ReapedAccount")]),v._v("("),_("code",[v._v("AccountId")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   An account was reaped.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Transfer")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("Balance")]),v._v(", "),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   Transfer succeeded (from, to, value, fees).")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"contract"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#contract","aria-hidden":"true"}},[v._v("#")]),v._v(" contract")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("CodeStored")]),v._v("("),_("code",[v._v("Hash")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   Code with the specified hash has been stored.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Contract")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("Bytes")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   An event from contract of account.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Dispatched")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("bool")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A call was dispatched from the given account. The bool signals whether it was  successful execution or not.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Instantiated")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("AccountId")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   Contract deployed by address at the specified address.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("ScheduleUpdated")]),v._v("("),_("code",[v._v("u32")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   Triggered when the current schedule is updated.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Transfer")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   Transfer happened "),_("code",[v._v("from")]),v._v(" to "),_("code",[v._v("to")]),v._v(" with given "),_("code",[v._v("value")]),v._v(" as part of a "),_("code",[v._v("call")]),v._v(" or "),_("code",[v._v("create")]),v._v(".")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"council"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#council","aria-hidden":"true"}},[v._v("#")]),v._v(" council")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("BadReaperSlashed")]),v._v("("),_("code",[v._v("AccountId")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   slashed reaper")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("TallyFinalized")]),v._v("("),_("code",[v._v("Vec<AccountId>")]),v._v(", "),_("code",[v._v("Vec<AccountId>")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A tally (for approval votes of council seat(s)) has ended (with one or more new members).")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("TallyStarted")]),v._v("("),_("code",[v._v("u32")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A tally (for approval votes of council seat(s)) has started.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("VoterReaped")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("AccountId")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   reaped voter, reaper")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"councilmotions"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#councilmotions","aria-hidden":"true"}},[v._v("#")]),v._v(" councilMotions")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Approved")]),v._v("("),_("code",[v._v("Hash")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A motion was approved by the required threshold.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Disapproved")]),v._v("("),_("code",[v._v("Hash")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A motion was not approved by the required threshold.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Executed")]),v._v("("),_("code",[v._v("Hash")]),v._v(", "),_("code",[v._v("bool")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A motion was executed; "),_("code",[v._v("bool")]),v._v(" is true if returned without error.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("MemberExecuted")]),v._v("("),_("code",[v._v("Hash")]),v._v(", "),_("code",[v._v("bool")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A single councillor did some action; "),_("code",[v._v("bool")]),v._v(" is true if returned without error.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Proposed")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("ProposalIndex")]),v._v(", "),_("code",[v._v("Hash")]),v._v(", "),_("code",[v._v("MemberCount")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A motion (given hash) has been proposed (by given account) with a threshold (given  "),_("code",[v._v("MemberCount")]),v._v(").")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Voted")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("Hash")]),v._v(", "),_("code",[v._v("bool")]),v._v(", "),_("code",[v._v("MemberCount")]),v._v(", "),_("code",[v._v("MemberCount")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A motion (given hash) has been voted on by given account, leaving  a tally (yes votes and no votes given respectively as "),_("code",[v._v("MemberCount")]),v._v(").")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"democracy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#democracy","aria-hidden":"true"}},[v._v("#")]),v._v(" democracy")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Cancelled")]),v._v("("),_("code",[v._v("ReferendumIndex")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Delegated")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("AccountId")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Executed")]),v._v("("),_("code",[v._v("ReferendumIndex")]),v._v(", "),_("code",[v._v("bool")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("ExternalTabled")]),v._v("()")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("NotPassed")]),v._v("("),_("code",[v._v("ReferendumIndex")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Passed")]),v._v("("),_("code",[v._v("ReferendumIndex")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Proposed")]),v._v("("),_("code",[v._v("PropIndex")]),v._v(", "),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Started")]),v._v("("),_("code",[v._v("ReferendumIndex")]),v._v(", "),_("code",[v._v("VoteThreshold")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Tabled")]),v._v("("),_("code",[v._v("PropIndex")]),v._v(", "),_("code",[v._v("Balance")]),v._v(", "),_("code",[v._v("Vec<AccountId>")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Undelegated")]),v._v("("),_("code",[v._v("AccountId")]),v._v(")")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Vetoed")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("Hash")]),v._v(", "),_("code",[v._v("BlockNumber")]),v._v(")")]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"grandpa"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#grandpa","aria-hidden":"true"}},[v._v("#")]),v._v(" grandpa")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("NewAuthorities")]),v._v("("),_("code",[v._v("Vec<(SessionKey,u64)>")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   New authority set has been applied.")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"indices"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#indices","aria-hidden":"true"}},[v._v("#")]),v._v(" indices")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("NewAccountIndex")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("AccountIndex")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A new account index was assigned.   This event is not triggered when an existing index is reassigned  to another "),_("code",[v._v("AccountId")]),v._v(".")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"session"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#session","aria-hidden":"true"}},[v._v("#")]),v._v(" session")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("NewSession")]),v._v("("),_("code",[v._v("BlockNumber")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   New session has happened. Note that the argument is the session index, not the block  number as the type might suggest.")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"staking"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#staking","aria-hidden":"true"}},[v._v("#")]),v._v(" staking")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("OfflineSlash")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   One validator (and its nominators) has been slashed by the given amount.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("OfflineWarning")]),v._v("("),_("code",[v._v("AccountId")]),v._v(", "),_("code",[v._v("u32")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   One validator (and its nominators) has been given an offline-warning (it is still  within its grace). The accrued number of slashes is recorded, too.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Reward")]),v._v("("),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   All validators have been rewarded by the given balance.")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"sudo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sudo","aria-hidden":"true"}},[v._v("#")]),v._v(" sudo")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("KeyChanged")]),v._v("("),_("code",[v._v("AccountId")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   The sudoer just switched identity; the old key is supplied.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Sudid")]),v._v("("),_("code",[v._v("bool")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   A sudo just took place.")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"system"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#system","aria-hidden":"true"}},[v._v("#")]),v._v(" system")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("ExtrinsicFailed")]),v._v("()")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   An extrinsic failed.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("ExtrinsicSuccess")]),v._v("()")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   An extrinsic completed successfully.")])]),v._v(" "),_("hr"),v._v(" "),_("h3",{attrs:{id:"treasury"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#treasury","aria-hidden":"true"}},[v._v("#")]),v._v(" treasury")]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Awarded")]),v._v("("),_("code",[v._v("ProposalIndex")]),v._v(", "),_("code",[v._v("Balance")]),v._v(", "),_("code",[v._v("AccountId")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   Some funds have been allocated.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Burnt")]),v._v("("),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   Some of our funds have been burnt.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Proposed")]),v._v("("),_("code",[v._v("ProposalIndex")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   New proposal.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Rollover")]),v._v("("),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   Spending has finished; this is the amount that rolls over until next spend.")])]),v._v(" "),_("p",[v._v("▸ "),_("strong",[v._v("Spending")]),v._v("("),_("code",[v._v("Balance")]),v._v(")")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("summary")]),v._v(":   We have ended a spend period and will now allocate funds.")])])])},[],!1,null,null,null);e.default=o.exports}}]);