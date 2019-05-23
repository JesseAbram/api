

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md)

**↳ Alive**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Alive**(value?: *`any`*): [Alive](_type_contractinfo_.alive.md)

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[constructor](_type_contractinfo_.alivecontractinfo.md#constructor)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/ContractInfo.ts:19](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/ContractInfo.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [Alive](_type_contractinfo_.alive.md)

___

# Accessors

<a id="type"></a>

##  Type

**get Type**(): `E`

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:172](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L172)*

*__description__*: Returns the Type description to sthe structure

**Returns:** `E`

___
<a id="codehash"></a>

##  codeHash

**get codeHash**(): [CodeHash](_type_codehash_.codehash.md)

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[codeHash](_type_contractinfo_.alivecontractinfo.md#codehash)*

*Defined in [type/ContractInfo.ts:30](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/ContractInfo.ts#L30)*

**Returns:** [CodeHash](_type_codehash_.codehash.md)

___
<a id="deductblock"></a>

##  deductBlock

**get deductBlock**(): [BlockNumber](_type_blocknumber_.blocknumber.md)

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[deductBlock](_type_contractinfo_.alivecontractinfo.md#deductblock)*

*Defined in [type/ContractInfo.ts:34](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/ContractInfo.ts#L34)*

**Returns:** [BlockNumber](_type_blocknumber_.blocknumber.md)

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L179)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L157)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="rentallowance"></a>

##  rentAllowance

**get rentAllowance**(): [Balance](_type_balance_.balance.md)

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[rentAllowance](_type_contractinfo_.alivecontractinfo.md#rentallowance)*

*Defined in [type/ContractInfo.ts:38](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/ContractInfo.ts#L38)*

**Returns:** [Balance](_type_balance_.balance.md)

___
<a id="storagesize"></a>

##  storageSize

**get storageSize**(): [U64](_primitive_u64_.u64.md)

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[storageSize](_type_contractinfo_.alivecontractinfo.md#storagesize)*

*Defined in [type/ContractInfo.ts:42](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/ContractInfo.ts#L42)*

**Returns:** [U64](_primitive_u64_.u64.md)

___
<a id="trieid"></a>

##  trieId

**get trieId**(): [TrieId](_type_contractinfo_.trieid.md)

*Inherited from [AliveContractInfo](_type_contractinfo_.alivecontractinfo.md).[trieId](_type_contractinfo_.alivecontractinfo.md#trieid)*

*Defined in [type/ContractInfo.ts:46](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/ContractInfo.ts#L46)*

**Returns:** [TrieId](_type_contractinfo_.trieid.md)

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Implementation of [Codec](../interfaces/_types_.codec.md).[eq](../interfaces/_types_.codec.md#eq)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:188](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L188)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides Map.get*

*Defined in [codec/Struct.ts:196](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L196)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:203](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L203)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:210](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L210)*

*__description__*: Converts the Object to an standard JavaScript Array

**Returns:** `Array`<[Codec](../interfaces/_types_.codec.md)>

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:217](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L217)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toJSON](../interfaces/_types_.codec.md#tojson)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:224](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L224)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:238](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L238)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toString](../interfaces/_types_.codec.md#tostring)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:249](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L249)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:257](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L257)*

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

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#with)*

*Defined in [codec/Struct.ts:132](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L132)*

**Type parameters:**

#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
**Parameters:**

| Name | Type |
| ------ | ------ |
| Types | `S` |

**Returns:** [Constructor](../interfaces/_types_.constructor.md)<[Struct](_codec_struct_.struct.md)<`S`>>

___
