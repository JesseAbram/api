

# Index

### Classes

* [SubmittableResult](../classes/_submittableextrinsic_.submittableresult.md)

### Interfaces

* [SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)

### Functions

* [createSubmittableExtrinsic](_submittableextrinsic_.md#createsubmittableextrinsic)

---

# Functions

<a id="createsubmittableextrinsic"></a>

##  createSubmittableExtrinsic

▸ **createSubmittableExtrinsic**<`CodecResult`,`SubscriptionResult`>(type: *[ApiType](_types_.md#apitype)*, api: *[ApiInterface$Rx](_types_.md#apiinterface_rx)*, onCall: *[OnCallDefinition](_types_.md#oncalldefinition)<`CodecResult`, `SubscriptionResult`>*, extrinsic: *`Method` \| `Uint8Array` \| `string`*, trackingCb?: *`undefined` \| `function`*): [SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)<`CodecResult`, `SubscriptionResult`>

*Defined in [SubmittableExtrinsic.ts:71](https://github.com/polkadot-js/api/blob/6d9699a/packages/api/src/SubmittableExtrinsic.ts#L71)*

**Type parameters:**

#### CodecResult 
#### SubscriptionResult 
**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ApiType](_types_.md#apitype) |
| api | [ApiInterface$Rx](_types_.md#apiinterface_rx) |
| onCall | [OnCallDefinition](_types_.md#oncalldefinition)<`CodecResult`, `SubscriptionResult`> |
| extrinsic | `Method` \| `Uint8Array` \| `string` |
| `Optional` trackingCb | `undefined` \| `function` |

**Returns:** [SubmittableExtrinsic](../interfaces/_submittableextrinsic_.submittableextrinsic.md)<`CodecResult`, `SubscriptionResult`>

___

