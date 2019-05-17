

# Functions

<a id="bestnumberfinalized"></a>

##  bestNumberFinalized

▸ **bestNumberFinalized**(api: *`ApiInterface$Rx`*): `(Anonymous function)`

*Defined in [chain/bestNumberFinalized.ts:25](https://github.com/polkadot-js/api/blob/1e8e0b2/packages/api-derive/src/chain/bestNumberFinalized.ts#L25)*

*__name__*: bestNumberFinalized

*__description__*: Get the latest finalized block number.

*__example__*:   

```javascript
api.derive.chain.bestNumberFinalized((blockNumber) => {
  console.log(`the current finalized block is #${blockNumber}`);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| api | `ApiInterface$Rx` |

**Returns:** `(Anonymous function)`
A BlockNumber

___
