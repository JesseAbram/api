

# Type parameters
#### CodecResult 
#### SubscriptionResult 
# Hierarchy

 `StorageFunction`

**↳ QueryableStorageFunctionBase**

# Callable
▸ **__call**(arg?: *`CodecArg`*): `CodecResult`

▸ **__call**(arg?: *`any`*): `Uint8Array`

*Defined in [types.ts:50](https://github.com/polkadot-js/api/blob/97032e7/packages/api/src/types.ts#L50)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `CodecArg` |

**Returns:** `CodecResult`

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:13](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/primitive/StorageKey.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `any` |

**Returns:** `Uint8Array`

# Properties

<a id="at"></a>

##  at

**● at**: *`function`*

*Defined in [types.ts:52](https://github.com/polkadot-js/api/blob/97032e7/packages/api/src/types.ts#L52)*

#### Type declaration
▸(hash: *`Hash` \| `Uint8Array` \| `string`*, arg?: *`CodecArg`*): `CodecResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `Hash` \| `Uint8Array` \| `string` |
| `Optional` arg | `CodecArg` |

**Returns:** `CodecResult`

___
<a id="hash"></a>

##  hash

**● hash**: *`function`*

*Defined in [types.ts:53](https://github.com/polkadot-js/api/blob/97032e7/packages/api/src/types.ts#L53)*

#### Type declaration
▸(arg?: *`CodecArg`*): [HashResult](../modules/_types_.md#hashresult)<`CodecResult`, `SubscriptionResult`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `CodecArg` |

**Returns:** [HashResult](../modules/_types_.md#hashresult)<`CodecResult`, `SubscriptionResult`>

___
<a id="headkey"></a>

## `<Optional>` headKey

**● headKey**: *`Uint8Array`*

*Inherited from StorageFunction.headKey*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:19](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/primitive/StorageKey.ts#L19)*

___
<a id="key"></a>

##  key

**● key**: *`function`*

*Defined in [types.ts:54](https://github.com/polkadot-js/api/blob/97032e7/packages/api/src/types.ts#L54)*

#### Type declaration
▸(arg?: *`CodecArg`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `CodecArg` |

**Returns:** `string`

___
<a id="meta"></a>

##  meta

**● meta**: *`MetaV0` \| `MetaV4`*

*Inherited from StorageFunction.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:15](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/primitive/StorageKey.ts#L15)*

___
<a id="method"></a>

##  method

**● method**: *`string`*

*Inherited from StorageFunction.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:16](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/primitive/StorageKey.ts#L16)*

___
<a id="multi"></a>

##  multi

**● multi**: *`function`*

*Defined in [types.ts:55](https://github.com/polkadot-js/api/blob/97032e7/packages/api/src/types.ts#L55)*

#### Type declaration
▸(args: *`Array`<`CodecArg`>*, callback?: *`CodecCallback`*): `SubscriptionResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | `Array`<`CodecArg`> |
| `Optional` callback | `CodecCallback` |

**Returns:** `SubscriptionResult`

___
<a id="section"></a>

##  section

**● section**: *`string`*

*Inherited from StorageFunction.section*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:17](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/primitive/StorageKey.ts#L17)*

___
<a id="size"></a>

##  size

**● size**: *`function`*

*Defined in [types.ts:56](https://github.com/polkadot-js/api/blob/97032e7/packages/api/src/types.ts#L56)*

#### Type declaration
▸(arg?: *`CodecArg`*): [U64Result](../modules/_types_.md#u64result)<`CodecResult`, `SubscriptionResult`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `CodecArg` |

**Returns:** [U64Result](../modules/_types_.md#u64result)<`CodecResult`, `SubscriptionResult`>

___
<a id="tojson"></a>

##  toJSON

**● toJSON**: *`function`*

*Inherited from StorageFunction.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:18](https://github.com/polkadot-js/api/blob/97032e7/packages/types/src/primitive/StorageKey.ts#L18)*

#### Type declaration
▸(): `any`

**Returns:** `any`

___

