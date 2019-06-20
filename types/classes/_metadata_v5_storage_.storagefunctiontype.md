> # Class: StorageFunctionType

## Hierarchy

  * [Enum](_codec_enumtype_.enum.md)

  * **StorageFunctionType**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_metadata_v5_storage_.storagefunctiontype.md#constructor)

#### Accessors

* [asDoubleMap](_metadata_v5_storage_.storagefunctiontype.md#asdoublemap)
* [asMap](_metadata_v5_storage_.storagefunctiontype.md#asmap)
* [asType](_metadata_v5_storage_.storagefunctiontype.md#astype)
* [encodedLength](_metadata_v5_storage_.storagefunctiontype.md#encodedlength)
* [index](_metadata_v5_storage_.storagefunctiontype.md#index)
* [isDoubleMap](_metadata_v5_storage_.storagefunctiontype.md#isdoublemap)
* [isEmpty](_metadata_v5_storage_.storagefunctiontype.md#isempty)
* [isMap](_metadata_v5_storage_.storagefunctiontype.md#ismap)
* [isNone](_metadata_v5_storage_.storagefunctiontype.md#isnone)
* [isNull](_metadata_v5_storage_.storagefunctiontype.md#isnull)
* [isPlainType](_metadata_v5_storage_.storagefunctiontype.md#isplaintype)
* [type](_metadata_v5_storage_.storagefunctiontype.md#type)
* [value](_metadata_v5_storage_.storagefunctiontype.md#value)

#### Methods

* [eq](_metadata_v5_storage_.storagefunctiontype.md#eq)
* [toHex](_metadata_v5_storage_.storagefunctiontype.md#tohex)
* [toJSON](_metadata_v5_storage_.storagefunctiontype.md#tojson)
* [toNumber](_metadata_v5_storage_.storagefunctiontype.md#tonumber)
* [toRawType](_metadata_v5_storage_.storagefunctiontype.md#torawtype)
* [toString](_metadata_v5_storage_.storagefunctiontype.md#tostring)
* [toU8a](_metadata_v5_storage_.storagefunctiontype.md#tou8a)
* [with](_metadata_v5_storage_.storagefunctiontype.md#static-with)

## Constructors

###  constructor

\+ **new StorageFunctionType**(`value?`: any, `index?`: undefined | number): *[StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[constructor](_codec_enumtype_.enum.md#constructor)*

*Defined in [Metadata/v5/Storage.ts:72](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |
`index?` | undefined \| number |

**Returns:** *[StorageFunctionType](_metadata_v5_storage_.storagefunctiontype.md)*

___

## Accessors

###  asDoubleMap

● **get asDoubleMap**(): *[DoubleMapType](_metadata_v5_storage_.doublemaptype.md)*

*Defined in [Metadata/v5/Storage.ts:84](url)*

**`description`** The value as a mapped value

**Returns:** *[DoubleMapType](_metadata_v5_storage_.doublemaptype.md)*

___

###  asMap

● **get asMap**(): *[MapType](_metadata_v4_storage_.maptype.md)*

*Defined in [Metadata/v5/Storage.ts:93](url)*

**`description`** The value as a mapped value

**Returns:** *[MapType](_metadata_v4_storage_.maptype.md)*

___

###  asType

● **get asType**(): *[PlainType](_metadata_v0_storage_.plaintype.md)*

*Defined in [Metadata/v5/Storage.ts:102](url)*

**`description`** The value as a [Type](_codec_struct_.struct.md#type) value

**Returns:** *[PlainType](_metadata_v0_storage_.plaintype.md)*

___

###  encodedLength

● **get encodedLength**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[encodedLength](_codec_enumtype_.enum.md#encodedlength)*

*Defined in [codec/EnumType.ts:137](url)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

● **get index**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[index](_codec_enumtype_.enum.md#index)*

*Defined in [codec/EnumType.ts:144](url)*

**`description`** The index of the metadata value

**Returns:** *number*

___

###  isDoubleMap

● **get isDoubleMap**(): *boolean*

*Defined in [Metadata/v5/Storage.ts:111](url)*

**`description`** `true` if the storage entry is a doublemap

**Returns:** *boolean*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isEmpty](_codec_enumtype_.enum.md#isempty)*

*Defined in [codec/EnumType.ts:151](url)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  isMap

● **get isMap**(): *boolean*

*Defined in [Metadata/v5/Storage.ts:118](url)*

**`description`** `true` if the storage entry is a map

**Returns:** *boolean*

___

###  isNone

● **get isNone**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNone](_codec_enumtype_.enum.md#isnone)*

*Defined in [codec/EnumType.ts:158](url)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type

**Returns:** *boolean*

___

###  isNull

● **get isNull**(): *boolean*

*Inherited from [Enum](_codec_enumtype_.enum.md).[isNull](_codec_enumtype_.enum.md#isnull)*

*Defined in [codec/EnumType.ts:165](url)*

**`description`** Checks if the Enum points to a [Null](_primitive_null_.null.md) type (deprecated, use isNone)

**Returns:** *boolean*

___

###  isPlainType

● **get isPlainType**(): *boolean*

*Defined in [Metadata/v5/Storage.ts:125](url)*

**`description`** `true` if the storage entry is a plain type

**Returns:** *boolean*

___

###  type

● **get type**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[type](_codec_enumtype_.enum.md#type)*

*Defined in [codec/EnumType.ts:172](url)*

**`description`** The name of the type this enum value represents

**Returns:** *string*

___

###  value

● **get value**(): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[value](_codec_enumtype_.enum.md#value)*

*Defined in [codec/EnumType.ts:179](url)*

**`description`** The value of the enum

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[eq](_codec_enumtype_.enum.md#eq)*

*Defined in [codec/EnumType.ts:186](url)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toHex](_codec_enumtype_.enum.md#tohex)*

*Defined in [codec/EnumType.ts:201](url)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toJSON](_codec_enumtype_.enum.md#tojson)*

*Defined in [codec/EnumType.ts:208](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_.md#anyjson)*

___

###  toNumber

▸ **toNumber**(): *number*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toNumber](_codec_enumtype_.enum.md#tonumber)*

*Defined in [codec/EnumType.ts:217](url)*

**`description`** Returns the number representation for the value

**Returns:** *number*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toRawType](_codec_enumtype_.enum.md#torawtype)*

*Defined in [codec/EnumType.ts:224](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Overrides [Enum](_codec_enumtype_.enum.md).[toString](_codec_enumtype_.enum.md#tostring)*

*Defined in [Metadata/v5/Storage.ts:132](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Enum](_codec_enumtype_.enum.md).[toU8a](_codec_enumtype_.enum.md#tou8a)*

*Defined in [codec/EnumType.ts:249](url)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` with

▸ **with**(`Types`: `TypesDef` | `Array<string>`): *`EnumConstructor<Enum>`*

*Inherited from [Enum](_codec_enumtype_.enum.md).[with](_codec_enumtype_.enum.md#static-with)*

*Defined in [codec/EnumType.ts:126](url)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `TypesDef` \| `Array<string>` |

**Returns:** *`EnumConstructor<Enum>`*

___