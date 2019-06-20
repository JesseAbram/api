> # External module: "fromMetadata/substrate"

### Index

#### Variables

* [authorityCount](_frommetadata_substrate_.md#const-authoritycount)
* [authorityPrefix](_frommetadata_substrate_.md#const-authorityprefix)
* [changesTrieConfig](_frommetadata_substrate_.md#const-changestrieconfig)
* [childStorageKeyPrefix](_frommetadata_substrate_.md#const-childstoragekeyprefix)
* [code](_frommetadata_substrate_.md#const-code)
* [extrinsicIndex](_frommetadata_substrate_.md#const-extrinsicindex)
* [heapPages](_frommetadata_substrate_.md#const-heappages)

## Variables

### `Const` authorityCount

● **authorityCount**: *`StorageFunction`* =  createRuntimeFunction('authorityCount', ':auth:len', {
documentation: 'Number of authorities.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:35](url)*

___

### `Const` authorityPrefix

● **authorityPrefix**: *`StorageFunction`* =  createRuntimeFunction('authorityPrefix', ':auth:', {
documentation: 'Prefix under which authorities are stored.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:40](url)*

___

### `Const` changesTrieConfig

● **changesTrieConfig**: *`StorageFunction`* =  createRuntimeFunction('changesTrieConfig', ':changes_trie', {
documentation: 'Changes trie configuration is stored under this key.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:60](url)*

___

### `Const` childStorageKeyPrefix

● **childStorageKeyPrefix**: *`StorageFunction`* =  createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
documentation: 'Prefix of child storage keys.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:65](url)*

___

### `Const` code

● **code**: *`StorageFunction`* =  createRuntimeFunction('code', ':code', {
documentation: 'Wasm code of the runtime.',
type: 'Bytes'
})

*Defined in [fromMetadata/substrate.ts:45](url)*

___

### `Const` extrinsicIndex

● **extrinsicIndex**: *`StorageFunction`* =  createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
documentation: 'Current extrinsic index (u32) is stored under this key.',
type: 'u32'
})

*Defined in [fromMetadata/substrate.ts:55](url)*

___

### `Const` heapPages

● **heapPages**: *`StorageFunction`* =  createRuntimeFunction('heapPages', ':heappages', {
documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
type: 'u64'
})

*Defined in [fromMetadata/substrate.ts:50](url)*

___