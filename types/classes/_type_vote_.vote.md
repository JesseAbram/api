

*__name__*: Vote

*__description__*: A number of lock periods, plus a vote, one way or the other.

# Hierarchy

↳  [I8](_primitive_i8_.i8.md)

**↳ Vote**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Vote**(value?: *`any`*): [Vote](_type_vote_.vote.md)

*Overrides [I8](_primitive_i8_.i8.md).[constructor](_primitive_i8_.i8.md#constructor)*

*Defined in [type/Vote.ts:14](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/Vote.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [Vote](_type_vote_.vote.md)

___

# Accessors

<a id="isaye"></a>

##  isAye

**get isAye**(): `boolean`

*Defined in [type/Vote.ts:32](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/Vote.ts#L32)*

*__description__*: true is the wrapped value is a positive vote

**Returns:** `boolean`

___
<a id="isnay"></a>

##  isNay

**get isNay**(): `boolean`

*Defined in [type/Vote.ts:39](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/type/Vote.ts#L39)*

*__description__*: true is the wrapped value is a negative vote

**Returns:** `boolean`

___

# Methods

<a id="tohex"></a>

##  toHex

▸ **toHex**(isLe?: *`boolean`*): `string`

*Inherited from [Int](_codec_int_.int.md).[toHex](_codec_int_.int.md#tohex)*

*Overrides AbstractInt.toHex*

*Defined in [codec/Int.ts:36](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Int.ts#L36)*

*__description__*: Returns a hex string representation of the value

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` isLe | `boolean` | false |

**Returns:** `string`

___
<a id="torawtype"></a>

##  toRawType

▸ **toRawType**(): `string`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toRawType](../interfaces/_types_.codec.md#torawtype)*

*Inherited from [Int](_codec_int_.int.md).[toRawType](_codec_int_.int.md#torawtype)*

*Overrides AbstractInt.toRawType*

*Defined in [codec/Int.ts:47](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Int.ts#L47)*

*__description__*: Returns the base runtime type name for this instance

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Implementation of [Codec](../interfaces/_types_.codec.md).[toU8a](../interfaces/_types_.codec.md#tou8a)*

*Inherited from [Int](_codec_int_.int.md).[toU8a](_codec_int_.int.md#tou8a)*

*Overrides AbstractInt.toU8a*

*Defined in [codec/Int.ts:55](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Int.ts#L55)*

*__description__*: Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___
