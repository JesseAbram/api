

*__name__*: DigestItem

*__description__*: A [Enum](_codec_enumtype_.enum.md) the specifies the specific item in the logs of a [Digest](_rpc_digest_.digest.md)

# Hierarchy

↳  [Enum](_codec_enumtype_.enum.md)

**↳ DigestItem**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new DigestItem**(value: *`any`*): [DigestItem](_rpc_digest_.digestitem.md)

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [rpc/Digest.ts:124](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L124)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** [DigestItem](_rpc_digest_.digestitem.md)

___

# Accessors

<a id="asauthoritieschange"></a>

##  asAuthoritiesChange

**get asAuthoritiesChange**(): [AuthoritiesChange](_rpc_digest_.authoritieschange.md)

*Defined in [rpc/Digest.ts:138](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L138)*

*__description__*: Returns the item as a [AuthoritiesChange](_rpc_digest_.authoritieschange.md)

**Returns:** [AuthoritiesChange](_rpc_digest_.authoritieschange.md)

___
<a id="aschangestrieroot"></a>

##  asChangesTrieRoot

**get asChangesTrieRoot**(): [ChangesTrieRoot](_rpc_digest_.changestrieroot.md)

*Defined in [rpc/Digest.ts:147](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L147)*

*__description__*: Returns the item as a [ChangesTrieRoot](_rpc_digest_.changestrieroot.md)

**Returns:** [ChangesTrieRoot](_rpc_digest_.changestrieroot.md)

___
<a id="asconsensus"></a>

##  asConsensus

**get asConsensus**(): [Consensus](_rpc_digest_.consensus.md)

*Defined in [rpc/Digest.ts:156](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L156)*

*__desciption__*: Retuns the item as a [Consensus](_rpc_digest_.consensus.md)

**Returns:** [Consensus](_rpc_digest_.consensus.md)

___
<a id="asother"></a>

##  asOther

**get asOther**(): [Other](_rpc_digest_.other.md)

*Defined in [rpc/Digest.ts:165](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L165)*

*__description__*: Returns the item as a [Other](_rpc_digest_.other.md)

**Returns:** [Other](_rpc_digest_.other.md)

___
<a id="asseal"></a>

##  asSeal

**get asSeal**(): [Seal](_rpc_digest_.seal.md)

*Defined in [rpc/Digest.ts:174](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L174)*

*__description__*: Returns the item as a [Seal](_rpc_digest_.seal.md)

**Returns:** [Seal](_rpc_digest_.seal.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:137](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L137)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="index"></a>

##  index

**get index**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:144](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L144)*

*__description__*: The index of the metadata value

**Returns:** `number`

___
<a id="isauthoritieschange"></a>

##  isAuthoritiesChange

**get isAuthoritiesChange**(): `boolean`

*Defined in [rpc/Digest.ts:183](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L183)*

*__description__*: Returns true on [AuthoritiesChange](_rpc_digest_.authoritieschange.md)

**Returns:** `boolean`

___
<a id="ischangestrieroot"></a>

##  isChangesTrieRoot

**get isChangesTrieRoot**(): `boolean`

*Defined in [rpc/Digest.ts:190](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L190)*

*__description__*: Returns true on [ChangesTrieRoot](_rpc_digest_.changestrieroot.md)

**Returns:** `boolean`

___
<a id="isconsensus"></a>

##  isConsensus

**get isConsensus**(): `boolean`

*Defined in [rpc/Digest.ts:197](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L197)*

*__description__*: Returns true on [Consensus](_rpc_digest_.consensus.md)

**Returns:** `boolean`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:151](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L151)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="isnone"></a>

##  isNone

**get isNone**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:158](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L158)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** `boolean`

___
<a id="isnull"></a>

##  isNull

**get isNull**(): `boolean`

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:165](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L165)*

*__description__*: Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** `boolean`

___
<a id="isother"></a>

##  isOther

**get isOther**(): `boolean`

*Defined in [rpc/Digest.ts:204](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L204)*

*__description__*: Returns true on [Other](_rpc_digest_.other.md)

**Returns:** `boolean`

___
<a id="isseal"></a>

##  isSeal

**get isSeal**(): `boolean`

*Defined in [rpc/Digest.ts:211](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/rpc/Digest.ts#L211)*

*__description__*: Returns true on [Seal](_rpc_digest_.seal.md)

**Returns:** `boolean`

___
<a id="type"></a>

##  type

**get type**(): `string`

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:172](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L172)*

*__description__*: The name of the type this enum value represents

**Returns:** `string`

___
<a id="value"></a>

##  value

**get value**(): [Codec](../interfaces/_types_.codec.md)

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:179](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L179)*

*__description__*: The value of the enum

**Returns:** [Codec](../interfaces/_types_.codec.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:186](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L186)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:201](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L201)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:208](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L208)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tonumber"></a>

##  toNumber

▸ **toNumber**(): `number`

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:217](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L217)*

*__description__*: Returns the number representation for the value

**Returns:** `number`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:224](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L224)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [codec/EnumType.ts:242](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L242)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:252](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L252)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
<a id="with"></a>

## `<Static>` with

▸ **with**(Types: *`TypesDef` \| `Array`<`string`>*): `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#with)*

*Defined in [codec/EnumType.ts:126](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/EnumType.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `TypesDef` \| `Array`<`string`> |

**Returns:** `EnumConstructor`<[Enum](_codec_enumtype_.enum.md)>

___
