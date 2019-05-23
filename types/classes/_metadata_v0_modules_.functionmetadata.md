

# Type parameters
#### S :  [ConstructorDef](../modules/_types_.md#constructordef)
#### T :  `object`
#### V :  `object`
#### E :  `object`
# Hierarchy

↳  [Struct](_codec_struct_.struct.md)

**↳ FunctionMetadata**

# Implements

* [Codec](../interfaces/_types_.codec.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new FunctionMetadata**(value?: *`any`*): [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [Metadata/v0/Modules.ts:37](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/Metadata/v0/Modules.ts#L37)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` value | `any` |

**Returns:** [FunctionMetadata](_metadata_v0_modules_.functionmetadata.md)

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
<a id="args"></a>

##  args

**get args**(): [Vector](_codec_vector_.vector.md)<[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)>

*Defined in [Metadata/v0/Modules.ts:50](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/Metadata/v0/Modules.ts#L50)*

*__description__*: The arguments of [Type](_metadata_v0_modules_.functionmetadata.md#type)

**Returns:** [Vector](_codec_vector_.vector.md)<[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)>

___
<a id="arguments"></a>

##  arguments

**get arguments**(): [Vector](_codec_vector_.vector.md)<[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)>

*Defined in [Metadata/v0/Modules.ts:58](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/Metadata/v0/Modules.ts#L58)*

*__description__*: The [FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md) for arguments

*__deprecated__*: Use `.args` instead

**Returns:** [Vector](_codec_vector_.vector.md)<[FunctionArgumentMetadata](_metadata_v0_modules_.functionargumentmetadata.md)>

___
<a id="docs"></a>

##  docs

**get docs**(): [Vector](_codec_vector_.vector.md)<[Text](_primitive_text_.text.md)>

*Defined in [Metadata/v0/Modules.ts:73](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/Metadata/v0/Modules.ts#L73)*

*__description__*: The [Text](_primitive_text_.text.md) documentation

*__deprecated__*: Use `.documentation` instead.

**Returns:** [Vector](_codec_vector_.vector.md)<[Text](_primitive_text_.text.md)>

___
<a id="documentation"></a>

##  documentation

**get documentation**(): [Vector](_codec_vector_.vector.md)<[Text](_primitive_text_.text.md)>

*Defined in [Metadata/v0/Modules.ts:65](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/Metadata/v0/Modules.ts#L65)*

*__description__*: The [Text](_primitive_text_.text.md) documentation

**Returns:** [Vector](_codec_vector_.vector.md)<[Text](_primitive_text_.text.md)>

___
<a id="encodedlength"></a>

##  encodedLength

**get encodedLength**(): `number`

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:179](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L179)*

*__description__*: The length of the value when encoded as a Uint8Array

**Returns:** `number`

___
<a id="id"></a>

##  id

**get id**(): [U16](_primitive_u16_.u16.md)

*Defined in [Metadata/v0/Modules.ts:80](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/Metadata/v0/Modules.ts#L80)*

*__description__*: The `[sectionIndex, methodIndex]` call id

**Returns:** [U16](_primitive_u16_.u16.md)

___
<a id="isempty"></a>

##  isEmpty

**get isEmpty**(): `boolean`

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:157](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/codec/Struct.ts#L157)*

*__description__*: Checks if the value is an empty value

**Returns:** `boolean`

___
<a id="name"></a>

##  name

**get name**(): [Text](_primitive_text_.text.md)

*Defined in [Metadata/v0/Modules.ts:87](https://github.com/polkadot-js/api/blob/fc8653e/packages/types/src/Metadata/v0/Modules.ts#L87)*

*__description__*: The call name

**Returns:** [Text](_primitive_text_.text.md)

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
