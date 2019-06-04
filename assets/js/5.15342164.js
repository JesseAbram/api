(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_0-80-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-80-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.80.1")]),t._v(" "),s("ul",[s("li",[t._v("Support for mortal transactions")]),t._v(" "),s("li",[t._v("Better DoubleMap storage support")]),t._v(" "),s("li",[t._v("api-derive cleanups, including additional info for balances.all and taking.info returning redeemable and locked balances")]),t._v(" "),s("li",[t._v("Added SignaturePayloadRaw for better offline signing support")]),t._v(" "),s("li",[t._v("Updated metadata for current substrate master")]),t._v(" "),s("li",[t._v("Misc. cleanups and fixes")])]),t._v(" "),s("h1",{attrs:{id:"_0-79-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-79-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.79.1")]),t._v(" "),s("ul",[s("li",[t._v("DoubleMap query support")]),t._v(" "),s("li",[t._v("Support latest EventRecord metadata (substrate master)")]),t._v(" "),s("li",[t._v("Introduce RuntimeVersion type overrides in api/nodeCompat.ts")]),t._v(" "),s("li",[t._v("Add "),s("code",[t._v("api.queryMulti")]),t._v(" and "),s("code",[t._v("api.query.<module>.<method>.multi")])]),t._v(" "),s("li",[t._v("Convert "),s("code",[t._v("api.derive.*")]),t._v(" to use multi queries")]),t._v(" "),s("li",[s("code",[t._v("types/codec/Set")]),t._v(" now extends the base JS "),s("code",[t._v("Set")]),t._v(" (breaking: "),s("code",[t._v("set.values")]),t._v(" -> "),s("code",[t._v("set.strings")]),t._v(")")]),t._v(" "),s("li",[t._v("Breaking: rename "),s("code",[t._v("meta.arguments")]),t._v(" to "),s("code",[t._v("meta.args")]),t._v(" in function metadata ("),s("code",[t._v("arguments")]),t._v(" is a JS reserved word)")]),t._v(" "),s("li",[t._v("Add "),s("code",[t._v("toRawType")]),t._v(" on all type classes (breakdown into primitive types)")])]),t._v(" "),s("h1",{attrs:{id:"_0-78-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-78-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.78.1")]),t._v(" "),s("ul",[s("li",[t._v("Fix linked-maps (not working since 0.77.1)")]),t._v(" "),s("li",[t._v("Convert Usize to U32 (as found in WASM environments)")]),t._v(" "),s("li",[t._v("Allow pre-bundled metadata in API create & constructor")]),t._v(" "),s("li",[t._v("Don't clobber existing keys in structs when auto-adding fields")]),t._v(" "),s("li",[t._v("Additional logging when constructing Structs as to where failures occur")]),t._v(" "),s("li",[t._v("Do type assertion on all exposed asXXX getters")]),t._v(" "),s("li",[t._v("Metadata updates for substrate (WithdrawReasons, ContractInfo)")])]),t._v(" "),s("h1",{attrs:{id:"_0-77-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-77-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.77.1")]),t._v(" "),s("ul",[s("li",[t._v("Support Metadata v4, which introduces the use of a custom hasher to hash storage map keys.")]),t._v(" "),s("li",[t._v("Add TresuryProposal (not the same as democracy, type aliassed)")])]),t._v(" "),s("h1",{attrs:{id:"_0-76-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-76-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.76.1")]),t._v(" "),s("ul",[s("li",[t._v("Caching improvements (duplicate queries, no duplicate subscriptions)")]),t._v(" "),s("li",[t._v("Experimental contract API")]),t._v(" "),s("li",[t._v("Update @polkadot/keyring to enable Alice's stash account on dev chains")]),t._v(" "),s("li",[t._v("Update @polkadot/util-crypto with smaller footprint")])]),t._v(" "),s("h1",{attrs:{id:"_0-75-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-75-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.75.1")]),t._v(" "),s("ul",[s("li",[t._v("Start journey to 1.0")])]),t._v(" "),s("h1",{attrs:{id:"_0-53-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-53-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.53.1")]),t._v(" "),s("ul",[s("li",[t._v("Change spelling to US English as per substrate master (1.0-rc1). Breaking changes as a result:\n"),s("ul",[s("li",[t._v("For extrinsic status results, if you have checked the type returns, i.e. "),s("code",[t._v("result.type === 'Finalised'")]),t._v(" now check on the status for "),s("code",[t._v("result.status.isFinalized")]),t._v(" or "),s("code",[t._v("result.status.isBroadcast")]),t._v(", ... (the "),s("code",[t._v("type")]),t._v(" property is now accessible only on "),s("code",[t._v("result.status.type")]),t._v(")")]),t._v(" "),s("li",[t._v("If using "),s("code",[t._v("subscribeFinalisedHeads")]),t._v(" update this to "),s("code",[t._v("subscribeFinalizedHeads")]),t._v(" (likewise "),s("code",[t._v("getFinalisedHead")]),t._v(" should be updated to "),s("code",[t._v("getFinalizedHead")]),t._v(" and "),s("code",[t._v("derive.bestNumberFinalized")]),t._v(")")])])]),t._v(" "),s("li",[t._v("The underlying ss58 addess checksums have changed in the keyring along with the latest specs")]),t._v(" "),s("li",[t._v("All examples have been updated with sr25519 addresses (with the new checksums)")])]),t._v(" "),s("h1",{attrs:{id:"_0-52-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-52-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.52.1")]),t._v(" "),s("ul",[s("li",[t._v("Support queries to linked mapped storage (found in new staking interfaces)")]),t._v(" "),s("li",[t._v("Add "),s("code",[t._v("derive.staking.controllers")]),t._v(" to retrieve all active staking controllers")]),t._v(" "),s("li",[t._v("Align types as per latest substrate master")]),t._v(" "),s("li",[t._v("PeerInfo from system_peers does not have the index field anymore (dropped in substrate)")]),t._v(" "),s("li",[t._v("Allow parsing of V3 metadata with DoubleMap support")]),t._v(" "),s("li",[t._v("Check for single instances for api and types as they are loaded (assertSingletonPackage)")])]),t._v(" "),s("h1",{attrs:{id:"_0-51-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-51-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.51.1")]),t._v(" "),s("ul",[s("li",[t._v("Support metadata V2 as per latest substrate master")]),t._v(" "),s("li",[t._v("Update metadata with new types as per lastest substrate master")])]),t._v(" "),s("h1",{attrs:{id:"_0-50-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-50-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.50.1")]),t._v(" "),s("ul",[s("li",[t._v("Lastest util-crypto (usage of WASM with JS fallbacks if not available)")]),t._v(" "),s("li",[t._v("Update upstream @polkadot dependencies (for new crypto)")])]),t._v(" "),s("h1",{attrs:{id:"_0-49-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-49-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.49.1")]),t._v(" "),s("ul",[s("li",[t._v("Fix large message signing on non-known nodes (default is now hashing, there has been enough time between upgrades)")])]),t._v(" "),s("h1",{attrs:{id:"_0-48-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-48-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.48.1")]),t._v(" "),s("ul",[s("li",[t._v("Pull in new sr25519 capable keyring for dev nodes")]),t._v(" "),s("li",[t._v("When using dev mode, it assumes that the node is the latest with derived sr25519 keys")])]),t._v(" "),s("h1",{attrs:{id:"_0-47-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-47-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.47.1")]),t._v(" "),s("ul",[s("li",[t._v("Swap to publishing -beta.x on merge (non-breaking testing)")])]),t._v(" "),s("h1",{attrs:{id:"_0-46-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-46-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.46.1")]),t._v(" "),s("ul",[s("li",[t._v("Extended type registration to now handle internal types as well. Additionally the built-in Extrinsic type can now we overridden with a custom version.")]),t._v(" "),s("li",[t._v("Where "),s("code",[t._v("Extrinsic")]),t._v(" and "),s("code",[t._v("Method")]),t._v(" is used as types, considder importing "),s("code",[t._v("{ IMethod, IExtrinsic }")]),t._v(" from "),s("code",[t._v("@polkadot/types/types")]),t._v(", especially in the cases where this is uased from a "),s("code",[t._v("SubmittableExtrinsic")])]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("typeRegistry")]),t._v(" constant is now "),s("code",[t._v("getTypeRegistry()")]),t._v(" as a function")])]),t._v(" "),s("h1",{attrs:{id:"_0-45-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-45-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.45.1")]),t._v(" "),s("ul",[s("li",[t._v("Storage with option values now correctly return "),s("code",[t._v("Option<Type>")]),t._v(" and is indicated as such in the documentation")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// old")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ll "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastLengthChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ll'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ll "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* BlockNumber */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// would be 0 if not set yet")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" llo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("session"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastLengthChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'llo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" llo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrapOr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not set'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Option<BlockNumber> */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h1",{attrs:{id:"_0-44-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-44-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.44.1")]),t._v(" "),s("ul",[s("li",[t._v("Split primitives and types into seperate folders. This should not affect external use since the exports remain the same, however does have an impact where classes are referenced directly. e.g.")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// old (affected)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Method "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/Method'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Signature "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/Signature'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new locations")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Method "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/primitive/Method'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Signature "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types/type/Signature'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unaffected")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Signature "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/types'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h1",{attrs:{id:"_0-43-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-43-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.43.1")]),t._v(" "),s("ul",[s("li",[t._v("Intrduces support for the new keyring with sr25519 support in addition to ed25519. While this does not change the exposed API, it is considerred breaking since @polkadot/keuyring has interface changes. (Unless needed, don't rush the upgrade)")])]),t._v(" "),s("h1",{attrs:{id:"_0-42-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-42-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.42.1")]),t._v(" "),s("ul",[s("li",[t._v("Support for substrate hash signing with implVersion >= 18")]),t._v(" "),s("li",[t._v("Changed signatures for Extrinsic signing, this should not have (much) of an impact since it is generally not used directly. SubmittableExtrinsic (as exposed by the API), supports the old-style use.")])]),t._v(" "),s("h1",{attrs:{id:"_0-41-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-41-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.41.1")]),t._v(" "),s("ul",[s("li",[t._v("Support the V1 metadata specification from Substrate in addition to the currently testnet-active V0 version")])]),t._v(" "),s("h1",{attrs:{id:"_0-40-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-40-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.40.1")]),t._v(" "),s("ul",[s("li",[t._v("The API interfaces now require a WS-compatible provider, e.g. subscription support is a must. Previously the HTTPProvider could be use (although it was very limited in the interactions).")])]),t._v(" "),s("h1",{attrs:{id:"_0-39-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-39-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.39.1")]),t._v(" "),s("ul",[s("li",[t._v("The Promise API now returns a "),s("code",[t._v("Promise<UnsubFunction>")]),t._v(" instead of "),s("code",[t._v("UnsubFunction")]),t._v(" when making subscriptions.")])]),t._v(" "),s("h1",{attrs:{id:"_0-38-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-38-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.38.1")]),t._v(" "),s("p",[t._v("Substrate has been updated with a breaking new transaction format where the Index/Nonce is now encoded as a Compact. This change is being rolled out to both Alexander (Polkadot testnet) as well as Charred Cherry (Substrate testnet) - transactions between old and new are not compatible.")]),t._v(" "),s("h1",{attrs:{id:"_0-37-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-37-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.37.1")]),t._v(" "),s("p",[t._v("api-observable has been removed. This was only used in /apps and inconsistent with the api/rx and api/promise APIs. Future work will include derivates like was included in api-observable into the base.")]),t._v(" "),s("p",[t._v("Tuples now return single types when only one type is available, i.e. "),s("code",[t._v("(AccountId)")]),t._v(" would now resolve as "),s("code",[t._v("AccountId")]),t._v(". The extra type wrapper adds no benefit to users here.")]),t._v(" "),s("h1",{attrs:{id:"_0-36-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-36-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.36.1")]),t._v(" "),s("p",[t._v("Api Promise has been updated in the way we deal with subscriptions. Previously a subscription returned "),s("code",[t._v("Promise<number>")]),t._v(" where the caller was to keep track of the id and use it in subsequent unsubscribes. Now any subscriptions return an unsubscribe/destroy function "),s("code",[t._v("(): void")]),t._v(", that is use for removing the subscriptions, e.g.")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unsubscribe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("balance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeBalance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Alice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscribe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// here we destroy the subscription")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h1",{attrs:{id:"_0-35-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-35-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.35.1")]),t._v(" "),s("p",[t._v("Swapped to new metadata structures from Substrate. If the API is not working with your node, update Substrate to latest master branch. (Or 0.9.1 for Charred Cherry). Dropped support for old metadata as found as far back as BBQ Birch.")]),t._v(" "),s("h1",{attrs:{id:"_0-34-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-34-1","aria-hidden":"true"}},[t._v("#")]),t._v(" 0.34.1")]),t._v(" "),s("p",[t._v("Changed the send signature (for future expansion of eg. events) to return "),s("code",[t._v("result: { status: ExtrinsicStatus }")]),t._v(" instead of "),s("code",[t._v("status: ExtrinsicStatus")]),t._v(". For most cases where only status "),s("code",[t._v("type")]),t._v(" checks are used, i.e. "),s("code",[t._v("status.type === 'Finalised'")]),t._v(" this should not be a breaking change. Deep inspection of the status object however will need to adapt.")])])},[],!1,null,null,null);e.default=n.exports}}]);