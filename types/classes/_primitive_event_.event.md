> # Class: Event <**S, T, V, E**>

**`name`** Event

**`description`** 
A representation of a system event. These are generated via the [Metadata](_metadata_metadata_.metadata.md) interfaces and
specific to a specific Substrate runtime

## Type parameters

■` S`: *[ConstructorDef](../modules/_types_.md#constructordef)*

■` T`: *object*

■` V`: *object*

■` E`: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **Event**

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_primitive_event_.event.md#constructor)

#### Accessors

* [Type](_primitive_event_.event.md#type)
* [data](_primitive_event_.event.md#data)
* [encodedLength](_primitive_event_.event.md#encodedlength)
* [index](_primitive_event_.event.md#index)
* [isEmpty](_primitive_event_.event.md#isempty)
* [meta](_primitive_event_.event.md#meta)
* [method](_primitive_event_.event.md#method)
* [section](_primitive_event_.event.md#section)
* [typeDef](_primitive_event_.event.md#typedef)

#### Methods

* [eq](_primitive_event_.event.md#eq)
* [get](_primitive_event_.event.md#get)
* [getAtIndex](_primitive_event_.event.md#getatindex)
* [toArray](_primitive_event_.event.md#toarray)
* [toHex](_primitive_event_.event.md#tohex)
* [toJSON](_primitive_event_.event.md#tojson)
* [toRawType](_primitive_event_.event.md#torawtype)
* [toString](_primitive_event_.event.md#tostring)
* [toU8a](_primitive_event_.event.md#tou8a)
* [decodeEvent](_primitive_event_.event.md#static-decodeevent)
* [injectMetadata](_primitive_event_.event.md#static-injectmetadata)
* [with](_primitive_event_.event.md#static-with)

## Constructors

###  constructor

\+ **new Event**(`_value?`: [Uint8Array](_codec_u8a_.u8a.md#static-uint8array)): *[Event](_primitive_event_.event.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [primitive/Event.ts:95](url)*

**Parameters:**

Name | Type |
------ | ------ |
`_value?` | [Uint8Array](_codec_u8a_.u8a.md#static-uint8array) |

**Returns:** *[Event](_primitive_event_.event.md)*

___

## Accessors

###  Type

● **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](url)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  data

● **get data**(): *[EventData](_primitive_event_.eventdata.md)*

*Defined in [primitive/Event.ts:154](url)*

**`description`** The wrapped [EventData](_primitive_event_.eventdata.md)

**Returns:** *[EventData](_primitive_event_.eventdata.md)*

___

###  encodedLength

● **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](url)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  index

● **get index**(): *[EventId](_primitive_event_.eventid.md)*

*Defined in [primitive/Event.ts:161](url)*

**`description`** The [EventId](_primitive_event_.eventid.md), identifying the raw event

**Returns:** *[EventId](_primitive_event_.eventid.md)*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](url)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  meta

● **get meta**(): *`EventMetadataV5`*

*Defined in [primitive/Event.ts:168](url)*

**`description`** The [EventMetadata](_metadata_v0_events_.eventmetadata.md) with the documentation

**Returns:** *`EventMetadataV5`*

___

###  method

● **get method**(): *string*

*Defined in [primitive/Event.ts:175](url)*

**`description`** The method string identifying the event

**Returns:** *string*

___

###  section

● **get section**(): *string*

*Defined in [primitive/Event.ts:182](url)*

**`description`** The section string identifying the event

**Returns:** *string*

___

###  typeDef

● **get typeDef**(): *`Array<TypeDef>`*

*Defined in [primitive/Event.ts:189](url)*

**`description`** The [TypeDef](../modules/_codec_createtype_.md#typedef) for the event

**Returns:** *`Array<TypeDef>`*

___

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[eq](_codec_struct_.struct.md#eq)*

*Defined in [codec/Struct.ts:185](url)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  get

▸ **get**(`name`: keyof S): *[Codec](../interfaces/_types_.codec.md) | undefined*

*Inherited from [Struct](_codec_struct_.struct.md).[get](_codec_struct_.struct.md#get)*

*Overrides void*

*Defined in [codec/Struct.ts:193](url)*

**`description`** Returns a specific names entry in the structure

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | keyof S | The name of the entry to retrieve  |

**Returns:** *[Codec](../interfaces/_types_.codec.md) | undefined*

___

###  getAtIndex

▸ **getAtIndex**(`index`: number): *[Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[getAtIndex](_codec_struct_.struct.md#getatindex)*

*Defined in [codec/Struct.ts:200](url)*

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *[Codec](../interfaces/_types_.codec.md)*

___

###  toArray

▸ **toArray**(): *`Array<Codec>`*

*Inherited from [Struct](_codec_struct_.struct.md).[toArray](_codec_struct_.struct.md#toarray)*

*Defined in [codec/Struct.ts:207](url)*

**`description`** Converts the Object to an standard JavaScript Array

**Returns:** *`Array<Codec>`*

___

###  toHex

▸ **toHex**(): *string*

*Inherited from [Struct](_codec_struct_.struct.md).[toHex](_codec_struct_.struct.md#tohex)*

*Defined in [codec/Struct.ts:214](url)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toJSON

▸ **toJSON**(): *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toJSON](_codec_struct_.struct.md#tojson)*

*Defined in [codec/Struct.ts:221](url)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJsonObject](../modules/_types_.md#anyjsonobject) | string*

___

###  toRawType

▸ **toRawType**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toRawType](_codec_struct_.struct.md#torawtype)*

*Defined in [codec/Struct.ts:237](url)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toString](_codec_struct_.struct.md#tostring)*

*Defined in [codec/Struct.ts:250](url)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *`Uint8Array`*

*Implementation of [Codec](../interfaces/_types_.codec.md)*

*Inherited from [Struct](_codec_struct_.struct.md).[toU8a](_codec_struct_.struct.md#tou8a)*

*Defined in [codec/Struct.ts:258](url)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined \| false \| true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *`Uint8Array`*

___

### `Static` decodeEvent

▸ **decodeEvent**(`value`: `Uint8Array`): *object | object*

*Defined in [primitive/Event.ts:107](url)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | `Uint8Array` |  new Uint8Array() |

**Returns:** *object | object*

___

### `Static` injectMetadata

▸ **injectMetadata**(`metadata`: [Metadata](_metadata_metadata_.metadata.md)): *void*

*Defined in [primitive/Event.ts:130](url)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [Metadata](_metadata_metadata_.metadata.md) |

**Returns:** *void*

___

### `Static` with

▸ **with**<**S**>(`Types`: `S`): *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

*Inherited from [Struct](_codec_struct_.struct.md).[with](_codec_struct_.struct.md#static-with)*

*Defined in [codec/Struct.ts:123](url)*

**Type parameters:**

■` S`: *[ConstructorDef](../modules/_types_.md#constructordef)*

**Parameters:**

Name | Type |
------ | ------ |
`Types` | `S` |

**Returns:** *[Constructor](../interfaces/_types_.constructor.md)‹*[Struct](_codec_struct_.struct.md)‹*`S`*›*›*

___