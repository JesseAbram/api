> # Class: AuthoritiesChange <**T**>

**`name`** AuthoritiesChange

**`description`** 
Log for Authories changed

## Type parameters

■` T`: *[Codec](../interfaces/_types_.codec.md)*

## Hierarchy

  * [Vector](_codec_vector_.vector.md)

  * **AuthoritiesChange**

## Implements

* [Codec](../interfaces/_types_.codec.md)

## Indexable

● \[■&#x60; n&#x60;: *number*\]: `T`

### Index

#### Constructors

* [constructor](_rpc_digest_.authoritieschange.md#constructor)

#### Accessors

* [Type](_rpc_digest_.authoritieschange.md#type)
* [encodedLength](_rpc_digest_.authoritieschange.md#encodedlength)
* [isEmpty](_rpc_digest_.authoritieschange.md#isempty)
* [length](_rpc_digest_.authoritieschange.md#length)

#### Methods

* [eq](_rpc_digest_.authoritieschange.md#eq)
* [filter](_rpc_digest_.authoritieschange.md#filter)
* [map](_rpc_digest_.authoritieschange.md#map)
* [toArray](_rpc_digest_.authoritieschange.md#toarray)
* [toHex](_rpc_digest_.authoritieschange.md#tohex)
* [toJSON](_rpc_digest_.authoritieschange.md#tojson)
* [toRawType](_rpc_digest_.authoritieschange.md#torawtype)
* [toString](_rpc_digest_.authoritieschange.md#tostring)
* [toU8a](_rpc_digest_.authoritieschange.md#tou8a)
* [decodeVector](_rpc_digest_.authoritieschange.md#static-decodevector)
* [with](_rpc_digest_.authoritieschange.md#static-with)

## Constructors

###  constructor

\+ **new AuthoritiesChange**(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `value`: [Vector](_codec_vector_.vector.md)‹*any*› | `Uint8Array` | string | `Array<any>`): *[AuthoritiesChange](_rpc_digest_.authoritieschange.md)*

*Inherited from [Vector](_codec_vector_.vector.md).[constructor](_codec_vector_.vector.md#constructor)*

*Defined in [codec/Vector.ts:22](url)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› | - |
`value` | [Vector](_codec_vector_.vector.md)‹*any*› \| `Uint8Array` \| string \| `Array<any>` |  [] as Array<any> |

**Returns:** *[AuthoritiesChange](_rpc_digest_.authoritieschange.md)*

___

## Accessors

###  Type

● **get Type**(): *string*

*Inherited from [Vector](_codec_vector_.vector.md).[Type](_codec_vector_.vector.md#type)*

*Defined in [codec/Vector.ts:70](url)*

**`description`** The type for the items

**Returns:** *string*

___

###  encodedLength

● **get encodedLength**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[encodedLength](_codec_abstractarray_.abstractarray.md#encodedlength)*

*Defined in [codec/AbstractArray.ts:29](url)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[isEmpty](_codec_abstractarray_.abstractarray.md#isempty)*

*Defined in [codec/AbstractArray.ts:22](url)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  length

● **get length**(): *number*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[length](_codec_abstractarray_.abstractarray.md#length)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:38](url)*

**`description`** The length of the value

**Returns:** *number*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[eq](_codec_abstractarray_.abstractarray.md#eq)*

*Defined in [codec/AbstractArray.ts:46](url)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  filter

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *`Array<T>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[filter](_codec_abstractarray_.abstractarray.md#filter)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:116](url)*

**`description`** Filters the array with the callback

**Parameters:**

■` callbackfn`: *function*

The filter function

▸ (`value`: `T`, `index`: number, `array`: `Array<T>`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `Array<T>` |

■`Optional` ` thisArg`: *any*

The `this` object to apply the result to

**Returns:** *`Array<T>`*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *`Array<U>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[map](_codec_abstractarray_.abstractarray.md#map)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:125](url)*

**`description`** Maps the array with the callback

**Type parameters:**

■` U`

**Parameters:**

■` callbackfn`: *function*

The mapping function

▸ (`value`: `T`, `index`: number, `array`: `Array<T>`): *`U`*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |
`index` | number |
`array` | `Array<T>` |

■`Optional` ` thisArg`: *any*

The `this` onject to apply the result to

**Returns:** *`Array<U>`*

___

###  toArray

▸ **toArray**(): *`Array<T>`*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toArray](_codec_abstractarray_.abstractarray.md#toarray)*

*Defined in [codec/AbstractArray.ts:53](url)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<T>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toHex](_codec_abstractarray_.abstractarray.md#tohex)*

*Defined in [codec/AbstractArray.ts:60](url)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toJSON](_codec_abstractarray_.abstractarray.md#tojson)*

*Defined in [codec/AbstractArray.ts:67](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonArray](../interfaces/_types_.anyjsonarray.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Vector](_codec_vector_.vector.md).[toRawType](_codec_vector_.vector.md#torawtype)*

*Overrides [AbstractArray](_codec_abstractarray_.abstractarray.md).[toRawType](_codec_abstractarray_.abstractarray.md#abstract-torawtype)*

*Defined in [codec/Vector.ts:95](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toString](_codec_abstractarray_.abstractarray.md#tostring)*

*Overrides void*

*Defined in [codec/AbstractArray.ts:81](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [AbstractArray](_codec_abstractarray_.abstractarray.md).[toU8a](_codec_abstractarray_.abstractarray.md#tou8a)*

*Defined in [codec/AbstractArray.ts:94](url)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeVector

▸ **decodeVector**<**T**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`T`*›, `value`: [Vector](_codec_vector_.vector.md)‹*any*› | `Uint8Array` | string | `Array<any>`): *`Array<T>`*

*Inherited from [Vector](_codec_vector_.vector.md).[decodeVector](_codec_vector_.vector.md#static-decodevector)*

*Defined in [codec/Vector.ts:32](url)*

**Type parameters:**

■` T`: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`T`*› |
`value` | [Vector](_codec_vector_.vector.md)‹*any*› \| `Uint8Array` \| string \| `Array<any>` |

**Returns:** *`Array<T>`*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_.constructor.md)‹*`O`*›): *[Constructor](../interfaces/_types_.constructor.md)‹*[Vector](_codec_vector_.vector.md)‹*`O`*›*›*

*Inherited from [Vector](_codec_vector_.vector.md).[with](_codec_vector_.vector.md#static-with)*

*Defined in [codec/Vector.ts:55](url)*

**Type parameters:**

■` O`: *[Codec](../interfaces/_types_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_.constructor.md)‹*`O`*› |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Vector](_codec_vector_.vector.md)‹*`O`*›*›*

___