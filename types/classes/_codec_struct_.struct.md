

*__name__*: Struct

*__description__*: A Struct defines an Object with key-value pairs - where the values are Codec values. It removes a lot of repetition from the actual coding, define a structure type, pass it the key/Codec values in the constructor and it manages the decoding. It is important that the constructor values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical, it needs to decoded in the specific defined order.

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

 `Map`<`keyof S`, [Codec](../interfaces/_types_.codec.md)>

**↳ Struct**

↳  [FunctionArgumentMetadata](_metadata_v1_calls_.functionargumentmetadata.md)

↳  [FunctionMetadata](_metadata_v1_calls_.functionmetadata.md)

↳  [Linkage](_codec_linkage_.linkage.md)

↳  [Method](_primitive_method_.method.md)

↳  [OuterDispatchCall](_metadata_v0_calls_.outerdispatchcall.md)

↳  [OuterDispatchMetadata](_metadata_v0_calls_.outerdispatchmetadata.md)

↳  [EventMetadata](_metadata_v0_events_.eventmetadata.md)

↳  [OuterEventMetadata](_metadata_v0_events_.outereventmetadata.md)

↳  [MapType](_metadata_v0_storage_.maptype.md)

↳  [StorageFunctionMetadata](_metadata_v0_storage_.storagefunctionmetadata.md)

↳  [StorageMetadata](_metadata_v0_storage_.storagemetadata.md)

↳  [FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)

↳  [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

↳  [CallMetadata](_metadata_v0_modules_.callmetadata.md)

↳  [ModuleMetadata](_metadata_v0_modules_.modulemetadata.md)

↳  [RuntimeModuleMetadata](_metadata_v0_modules_.runtimemodulemetadata.md)

↳  [MetadataV0](_metadata_v0_metadata_.metadatav0.md)

↳  [ModuleMetadata](_metadata_v1_metadata_.modulemetadata.md)

↳  [MetadataV1](_metadata_v1_metadata_.metadatav1.md)

↳  [MapType](_metadata_v2_storage_.maptype.md)

↳  [StorageFunctionMetadata](_metadata_v2_storage_.storagefunctionmetadata.md)

↳  [ModuleMetadata](_metadata_v2_metadata_.modulemetadata.md)

↳  [MetadataV2](_metadata_v2_metadata_.metadatav2.md)

↳  [DoubleMapType](_metadata_v3_storage_.doublemaptype.md)

↳  [StorageFunctionMetadata](_metadata_v3_storage_.storagefunctionmetadata.md)

↳  [ModuleMetadata](_metadata_v3_metadata_.modulemetadata.md)

↳  [MetadataV3](_metadata_v3_metadata_.metadatav3.md)

↳  [MapType](_metadata_v4_storage_.maptype.md)

↳  [DoubleMapType](_metadata_v4_storage_.doublemaptype.md)

↳  [StorageFunctionMetadata](_metadata_v4_storage_.storagefunctionmetadata.md)

↳  [ModuleMetadata](_metadata_v4_metadata_.modulemetadata.md)

↳  [MetadataV4](_metadata_v4_metadata_.metadatav4.md)

↳  [AccountInfo](_primitive_accountinfo_.accountinfo.md)

↳  [Event](_primitive_event_.event.md)

↳  [EventRecord_0_76](_primitive_eventrecord_.eventrecord_0_76.md)

↳  [EventRecord](_primitive_eventrecord_.eventrecord.md)

↳  [MetadataVersioned](_metadata_metadataversioned_.metadataversioned.md)

↳  [RuntimeVersion](_rpc_runtimeversion_.runtimeversion.md)

↳  [SignaturePayload](_type_signaturepayload_.signaturepayload.md)

↳  [ExtrinsicSignature](_type_extrinsicsignature_.extrinsicsignature.md)

↳  [Extrinsic](_type_extrinsic_.extrinsic.md)

↳  [Digest](_rpc_digest_.digest.md)

↳  [Header](_rpc_header_.header.md)

↳  [Block](_rpc_block_.block.md)

↳  [Health](_rpc_health_.health.md)

↳  [PeerInfo](_rpc_peerinfo_.peerinfo.md)

↳  [RhdJustification](_type_justification_.rhdjustification.md)

↳  [SignedBlock](_rpc_signedblock_.signedblock.md)

↳  [KeyValue](_type_keyvalue_.keyvalue.md)

↳  [StorageChangeSet](_rpc_storagechangeset_.storagechangeset.md)

↳  [CandidateReceipt](_type_attestedcandidate_.candidatereceipt.md)

↳  [AttestedCandidate](_type_attestedcandidate_.attestedcandidate.md)

↳  [BalanceLock](_type_balancelock_.balancelock.md)

↳  [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md)

↳  [IndividualExposure](_type_individualexposure_.individualexposure.md)

↳  [Exposure](_type_exposure_.exposure.md)

↳  [BftAtReport](_type_misbehaviorreport_.bftatreport.md)

↳  [BftProposeOutOfTurn](_type_misbehaviorreport_.bftproposeoutofturn.md)

↳  [MisbehaviorReport](_type_misbehaviorreport_.misbehaviorreport.md)

↳  [PrefabWasmModule](_type_prefabwasmmodule_.prefabwasmmodule.md)

↳  [ReferendumInfo](_type_referenduminfo_.referenduminfo.md)

↳  [Schedule](_type_schedule_.schedule.md)

↳  [UnlockChunk](_type_unlockchunk_.unlockchunk.md)

↳  [StakingLedger](_type_stakingledger_.stakingledger.md)

↳  [StoredPendingChange](_type_storedpendingchange_.storedpendingchange.md)

↳  [TreasuryProposal](_type_treasuryproposal_.treasuryproposal.md)

↳  [ValidatorPrefs](_type_validatorprefs_.validatorprefs.md)

↳  [VestingSchedule](_type_vestingschedule_.vestingschedule.md)

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Struct**(Types: *`S`*, value?: *`V` \| `Map`<`any`, `any`> \| `Array`<`any`>*, jsonMap?: *`Map`<`keyof S`, `string`>*): [Struct](_codec_struct_.struct.md)

*Defined in [codec/Struct.ts:31](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L31)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| Types | `S` | - |
| `Default value` value | `V` \| `Map`<`any`, `any`> \| `Array`<`any`> |  {} as V |
| `Default value` jsonMap | `Map`<`keyof S`, `string`> |  new Map() |

**Returns:** [Struct](_codec_struct_.struct.md)

___

# Properties

<a id="map"></a>

## `<Static>` Map

**● Map**: *`MapConstructor`*

*Defined in /home/travis/build/polkadot-js/api/node_modules/typescript/lib/lib.es2015.collection.d.ts:36*

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Defined in [codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L172)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L179)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L157)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L188)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="get"></a>

##  get

▸ **get**(name: *`keyof S`*): [Codec](../interfaces/_types_.codec.md) \| `undefined`

*Overrides Map.get*

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L196)*

*__description__*: Returns a specific names entry in the structure

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `keyof S` |  The name of the entry to retrieve |

**Returns:** [Codec](../interfaces/_types_.codec.md) \| `undefined`

___
<a id="getatindex"></a>

##  getAtIndex

▸ **getAtIndex**(index: *`number`*): [Codec](../interfaces/_types_.codec.md)

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L203)*

*__description__*: Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Codec](../interfaces/_types_.codec.md)

___
<a id="toarray"></a>

##  toArray

▸ **toArray**(): `Array`<[Codec](../interfaces/_types_.codec.md)>

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L210)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L217)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L224)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Defined in [codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L238)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L249)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L257)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**<`S`>(Types: *`S`*): [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

*Defined in [codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/types/src/codec/Struct.ts#L132)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___
