> # Class: SessionKeys <**S, T, V, E**>

**`name`** SessionKeys

**`description`** 
Wrapper for the session and authority ids

## Type parameters

■` S`: *[ConstructorDef](../modules/_types_.md#constructordef)*

■` T`: *object*

■` V`: *object*

■` E`: *object*

## Hierarchy

  * [Struct](_codec_struct_.struct.md)

  * **SessionKeys**

  * [Keys](_type_keys_.keys.md)

## Implements

* [Codec](../interfaces/_types_.codec.md)

### Index

#### Constructors

* [constructor](_type_sessionkeys_.sessionkeys.md#constructor)

#### Accessors

* [Type](_type_sessionkeys_.sessionkeys.md#type)
* [authorityId](_type_sessionkeys_.sessionkeys.md#authorityid)
* [encodedLength](_type_sessionkeys_.sessionkeys.md#encodedlength)
* [isEmpty](_type_sessionkeys_.sessionkeys.md#isempty)
* [sessionKey](_type_sessionkeys_.sessionkeys.md#sessionkey)

#### Methods

* [eq](_type_sessionkeys_.sessionkeys.md#eq)
* [get](_type_sessionkeys_.sessionkeys.md#get)
* [getAtIndex](_type_sessionkeys_.sessionkeys.md#getatindex)
* [toArray](_type_sessionkeys_.sessionkeys.md#toarray)
* [toHex](_type_sessionkeys_.sessionkeys.md#tohex)
* [toJSON](_type_sessionkeys_.sessionkeys.md#tojson)
* [toRawType](_type_sessionkeys_.sessionkeys.md#torawtype)
* [toString](_type_sessionkeys_.sessionkeys.md#tostring)
* [toU8a](_type_sessionkeys_.sessionkeys.md#tou8a)
* [with](_type_sessionkeys_.sessionkeys.md#static-with)

## Constructors

###  constructor

\+ **new SessionKeys**(`value?`: any): *[SessionKeys](_type_sessionkeys_.sessionkeys.md)*

*Overrides [Struct](_codec_struct_.struct.md).[constructor](_codec_struct_.struct.md#constructor)*

*Defined in [type/SessionKeys.ts:14](url)*

**Parameters:**

Name | Type |
------ | ------ |
`value?` | any |

**Returns:** *[SessionKeys](_type_sessionkeys_.sessionkeys.md)*

___

## Accessors

###  Type

● **get Type**(): *`E`*

*Inherited from [Struct](_codec_struct_.struct.md).[Type](_codec_struct_.struct.md#type)*

*Defined in [codec/Struct.ts:163](url)*

**`description`** Returns the Type description to sthe structure

**Returns:** *`E`*

___

###  authorityId

● **get authorityId**(): *[AuthorityId](_type_authorityid_.authorityid.md)*

*Defined in [type/SessionKeys.ts:25](url)*

**`description`** The Grandpa Authority

**Returns:** *[AuthorityId](_type_authorityid_.authorityid.md)*

___

###  encodedLength

● **get encodedLength**(): *number*

*Inherited from [Struct](_codec_struct_.struct.md).[encodedLength](_codec_struct_.struct.md#encodedlength)*

*Defined in [codec/Struct.ts:176](url)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  isEmpty

● **get isEmpty**(): *boolean*

*Inherited from [Struct](_codec_struct_.struct.md).[isEmpty](_codec_struct_.struct.md#isempty)*

*Defined in [codec/Struct.ts:148](url)*

**`description`** Checks if the value is an empty value

**Returns:** *boolean*

___

###  sessionKey

● **get sessionKey**(): *[SessionKey](_type_sessionkey_.sessionkey.md)*

*Defined in [type/SessionKeys.ts:32](url)*

**`description`** The Aura session

**Returns:** *[SessionKey](_type_sessionkey_.sessionkey.md)*

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