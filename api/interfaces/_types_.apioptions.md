

# Hierarchy

**ApiOptions**

# Properties

<a id="derives"></a>

## `<Optional>` derives

**● derives**: *`DeriveCustom`*

*Defined in [types.ts:136](https://github.com/polkadot-js/api/blob/63222cf/packages/api/src/types.ts#L136)*

*__description__*: Add custom derives to be injected

___
<a id="metadata"></a>

## `<Optional>` metadata

**● metadata**: *`undefined` \| `object`*

*Defined in [types.ts:141](https://github.com/polkadot-js/api/blob/63222cf/packages/api/src/types.ts#L141)*

*__description__*: prebundles is a map of 'genesis hash and runtime spec version' as key to metadata's hex string if genesis hash and runtime spec version matches, then use metadata, else fetch it from chain

___
<a id="provider"></a>

## `<Optional>` provider

**● provider**: *`ProviderInterface`*

*Defined in [types.ts:148](https://github.com/polkadot-js/api/blob/63222cf/packages/api/src/types.ts#L148)*

*__description__*: Transport Provider from rpc-provider. If not specified, it will default to connecting to a WsProvider connecting localhost with the default port, i.e. `ws://127.0.0.1:9944`

___
<a id="signer"></a>

## `<Optional>` signer

**● signer**: *[Signer](_types_.signer.md)*

*Defined in [types.ts:152](https://github.com/polkadot-js/api/blob/63222cf/packages/api/src/types.ts#L152)*

*__description__*: An external signer which will be used to sign extrinsic when account passed in is not KeyringPair

___
<a id="source"></a>

## `<Optional>` source

**● source**: *[ApiBase](../classes/_base_.apibase.md)<`any`, `any`>*

*Defined in [types.ts:156](https://github.com/polkadot-js/api/blob/63222cf/packages/api/src/types.ts#L156)*

*__description__*: The source object to use for runtime information (only used when cloning)

___
<a id="types"></a>

## `<Optional>` types

**● types**: *`RegistryTypes`*

*Defined in [types.ts:161](https://github.com/polkadot-js/api/blob/63222cf/packages/api/src/types.ts#L161)*

*__description__*: Additional types used by runtime modules. This is nessusary if the runtime modules uses types not available in the base Substrate runtime.

___

