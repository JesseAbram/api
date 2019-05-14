

*__name__*: Codec

*__description__*: The base Codec interface. All types implement the interface provided here. Additionally implementors can add their own specific interfaces and helpres with getters and functions. The Codec Base is however required for operating as an encoding/decoding layer

# Hierarchy

**Codec**

↳  [IMethod](_types_.imethod.md)

↳  [IExtrinsicSignature](_types_.iextrinsicsignature.md)

# Implemented by

* [AbstractArray](../classes/_codec_abstractarray_.abstractarray.md)
* [AccountId](../classes/_type_accountid_.accountid.md)
* [AccountIdOf](../classes/_type_accountid_.accountidof.md)
* [AccountIndex](../classes/_type_accountindex_.accountindex.md)
* [AccountInfo](../classes/_type_accountinfo_.accountinfo.md)
* [Address](../classes/_type_address_.address.md)
* [Alive](../classes/_type_contractinfo_.alive.md)
* [AliveContractInfo](../classes/_type_contractinfo_.alivecontractinfo.md)
* [Amount](../classes/_type_amount_.amount.md)
* [ApiId](../classes/_rpc_runtimeversion_.apiid.md)
* [ApplyExtrinsic](../classes/_type_eventrecord_.applyextrinsic.md)
* [AssetOf](../classes/_type_assetof_.assetof.md)
* [AttestedCandidate](../classes/_type_attestedcandidate_.attestedcandidate.md)
* [AuthoritiesChange](../classes/_type_digest_.authoritieschange.md)
* [AuthorityId](../classes/_type_authorityid_.authorityid.md)
* [AvailabilityVote](../classes/_type_attestedcandidate_.availabilityvote.md)
* [Balance](../classes/_type_balance_.balance.md)
* [BalanceLock](../classes/_type_balancelock_.balancelock.md)
* [BalanceOf](../classes/_type_balance_.balanceof.md)
* [BalanceUpload](../classes/_type_attestedcandidate_.balanceupload.md)
* [BftAtReport](../classes/_type_misbehaviorreport_.bftatreport.md)
* [BftAuthoritySignature](../classes/_type_bft_.bftauthoritysignature.md)
* [BftDoubleCommit](../classes/_type_misbehaviorreport_.bftdoublecommit.md)
* [BftDoublePrepare](../classes/_type_misbehaviorreport_.bftdoubleprepare.md)
* [BftDoublePropose](../classes/_type_misbehaviorreport_.bftdoublepropose.md)
* [BftHashSignature](../classes/_type_bft_.bfthashsignature.md)
* [BftProposeOutOfTurn](../classes/_type_misbehaviorreport_.bftproposeoutofturn.md)
* [Block](../classes/_type_block_.block.md)
* [BlockNumber](../classes/_type_blocknumber_.blocknumber.md)
* [Bool](../classes/_primitive_bool_.bool.md)
* [Broadcast](../classes/_rpc_extrinsicstatus_.broadcast.md)
* [Bytes](../classes/_primitive_bytes_.bytes.md)
* [CallMetadata](../classes/_metadata_v0_modules_.callmetadata.md)
* [CandidateReceipt](../classes/_type_attestedcandidate_.candidatereceipt.md)
* [CandidateSignature](../classes/_type_attestedcandidate_.candidatesignature.md)
* [ChainProperties](../classes/_rpc_chainproperties_.chainproperties.md)
* [ChangesTrieRoot](../classes/_type_digest_.changestrieroot.md)
* [CodeHash](../classes/_type_codehash_.codehash.md)
* [Compact](../classes/_codec_compact_.compact.md)
* [Consensus](../classes/_type_digest_.consensus.md)
* [ContractInfo](../classes/_type_contractinfo_.contractinfo.md)
* [Data](../classes/_primitive_data_.data.md)
* [Digest](../classes/_type_digest_.digest.md)
* [DigestItem](../classes/_type_digest_.digestitem.md)
* [DoubleMapType](../classes/_metadata_v3_storage_.doublemaptype.md)
* [DoubleMapType](../classes/_metadata_v4_storage_.doublemaptype.md)
* [Dropped](../classes/_rpc_extrinsicstatus_.dropped.md)
* [Ed25519Signature](../classes/_type_signature_.ed25519signature.md)
* [EgressQueueRoot](../classes/_type_attestedcandidate_.egressqueueroot.md)
* [Enum](../classes/_codec_enum_.enum.md)
* [EnumType](../classes/_codec_enumtype_.enumtype.md)
* [Event](../classes/_type_event_.event.md)
* [EventData](../classes/_type_event_.eventdata.md)
* [EventIndex](../classes/_type_eventindex_.eventindex.md)
* [EventIndex](../classes/_type_event_.eventindex.md)
* [EventMetadata](../classes/_metadata_v0_events_.eventmetadata.md)
* [EventRecord](../classes/_type_eventrecord_.eventrecord.md)
* [ExplicitCandidateSignature](../classes/_type_attestedcandidate_.explicitcandidatesignature.md)
* [Exposure](../classes/_type_exposure_.exposure.md)
* [Extrinsic](../classes/_type_extrinsic_.extrinsic.md)
* [ExtrinsicEra](../classes/_type_extrinsicera_.extrinsicera.md)
* [ExtrinsicSignature](../classes/_type_extrinsicsignature_.extrinsicsignature.md)
* [ExtrinsicStatus](../classes/_rpc_extrinsicstatus_.extrinsicstatus.md)
* [Extrinsics](../classes/_type_extrinsics_.extrinsics.md)
* [Finalization](../classes/_type_eventrecord_.finalization.md)
* [Finalized](../classes/_rpc_extrinsicstatus_.finalized.md)
* [FunctionArgumentMetadata](../classes/_metadata_v0_modules_.functionargumentmetadata.md)
* [FunctionMetadata](../classes/_metadata_v0_modules_.functionmetadata.md)
* [Future](../classes/_rpc_extrinsicstatus_.future.md)
* [Gas](../classes/_type_gas_.gas.md)
* [H160](../classes/_primitive_h160_.h160.md)
* [H256](../classes/_primitive_h256_.h256.md)
* [H512](../classes/_primitive_h512_.h512.md)
* [Hash](../classes/_type_hash_.hash.md)
* [HeadData](../classes/_type_attestedcandidate_.headdata.md)
* [Header](../classes/_type_header_.header.md)
* [HeaderExtended](../classes/_type_header_.headerextended.md)
* [Health](../classes/_rpc_health_.health.md)
* [I128](../classes/_primitive_i128_.i128.md)
* [I16](../classes/_primitive_i16_.i16.md)
* [I256](../classes/_primitive_i256_.i256.md)
* [I32](../classes/_primitive_i32_.i32.md)
* [I64](../classes/_primitive_i64_.i64.md)
* [I8](../classes/_primitive_i8_.i8.md)
* [IHash](_types_.ihash.md)
* [ImplicitCandidateSignature](../classes/_type_attestedcandidate_.implicitcandidatesignature.md)
* [IndividualExposure](../classes/_type_individualexposure_.individualexposure.md)
* [InherentOfflineReport](../classes/_type_inherentofflinereport_.inherentofflinereport.md)
* [Int](../classes/_codec_int_.int.md)
* [Invalid](../classes/_rpc_extrinsicstatus_.invalid.md)
* [Json](../classes/_rpc_json_.json.md)
* [Justification](../classes/_type_justification_.justification.md)
* [Key](../classes/_type_key_.key.md)
* [KeyValue](../classes/_type_keyvalue_.keyvalue.md)
* [KeyValueOption](../classes/_type_keyvalue_.keyvalueoption.md)
* [Linkage](../classes/_codec_linkage_.linkage.md)
* [LinkageResult](../classes/_codec_linkage_.linkageresult.md)
* [LockIdentifier](../classes/_type_lockidentifier_.lockidentifier.md)
* [LockPeriods](../classes/_type_lockperiods_.lockperiods.md)
* [MagicNumber](../classes/_metadata_magicnumber_.magicnumber.md)
* [MapType](../classes/_metadata_v4_storage_.maptype.md)
* [MapType](../classes/_metadata_v0_storage_.maptype.md)
* [MapType](../classes/_metadata_v2_storage_.maptype.md)
* [Metadata](../classes/_metadata_metadata_.metadata.md)
* [MetadataCall](../classes/_metadata_v1_calls_.metadatacall.md)
* [MetadataCallArg](../classes/_metadata_v1_calls_.metadatacallarg.md)
* [MetadataEvent](../classes/_metadata_v1_events_.metadataevent.md)
* [MetadataModule](../classes/_metadata_v4_metadata_.metadatamodule.md)
* [MetadataModule](../classes/_metadata_v2_metadata_.metadatamodule.md)
* [MetadataModule](../classes/_metadata_v3_metadata_.metadatamodule.md)
* [MetadataModule](../classes/_metadata_v1_metadata_.metadatamodule.md)
* [MetadataV0](../classes/_metadata_v0_metadata_.metadatav0.md)
* [MetadataV1](../classes/_metadata_v1_metadata_.metadatav1.md)
* [MetadataV2](../classes/_metadata_v2_metadata_.metadatav2.md)
* [MetadataV3](../classes/_metadata_v3_metadata_.metadatav3.md)
* [MetadataV4](../classes/_metadata_v4_metadata_.metadatav4.md)
* [MetadataVersioned](../classes/_metadata_metadataversioned_.metadataversioned.md)
* [Method](../classes/_primitive_method_.method.md)
* [MethodIndex](../classes/_primitive_method_.methodindex.md)
* [MisbehaviorKind](../classes/_type_misbehaviorreport_.misbehaviorkind.md)
* [MisbehaviorReport](../classes/_type_misbehaviorreport_.misbehaviorreport.md)
* [ModuleMetadata](../classes/_metadata_v0_modules_.modulemetadata.md)
* [Moment](../classes/_primitive_moment_.moment.md)
* [MomentOf](../classes/_primitive_moment_.momentof.md)
* [NetworkState](../classes/_rpc_networkstate_.networkstate.md)
* [NewAccountOutcome](../classes/_type_newaccountoutcome_.newaccountoutcome.md)
* [NextAuthority](../classes/_type_storedpendingchange_.nextauthority.md)
* [Nonce](../classes/_type_nonce_.nonce.md)
* [NonceCompact](../classes/_type_noncecompact_.noncecompact.md)
* [Null](../classes/_primitive_null_.null.md)
* [Option](../classes/_codec_option_.option.md)
* [Origin](../classes/_type_origin_.origin.md)
* [Other](../classes/_type_digest_.other.md)
* [OuterDispatchCall](../classes/_metadata_v0_calls_.outerdispatchcall.md)
* [OuterDispatchMetadata](../classes/_metadata_v0_calls_.outerdispatchmetadata.md)
* [OuterEventMetadata](../classes/_metadata_v0_events_.outereventmetadata.md)
* [OuterEventMetadataEvent](../classes/_metadata_v0_events_.outereventmetadataevent.md)
* [ParaId](../classes/_type_paraid_.paraid.md)
* [PeerInfo](../classes/_rpc_peerinfo_.peerinfo.md)
* [PendingExtrinsics](../classes/_rpc_pendingextrinsics_.pendingextrinsics.md)
* [Perbill](../classes/_type_perbill_.perbill.md)
* [Permill](../classes/_type_permill_.permill.md)
* [Phase](../classes/_type_eventrecord_.phase.md)
* [PlainType](../classes/_metadata_v0_storage_.plaintype.md)
* [PrefabWasmModule](../classes/_type_prefabwasmmodule_.prefabwasmmodule.md)
* [PropIndex](../classes/_type_propindex_.propindex.md)
* [Proposal](../classes/_type_proposal_.proposal.md)
* [ProposalIndex](../classes/_type_proposalindex_.proposalindex.md)
* [Ready](../classes/_rpc_extrinsicstatus_.ready.md)
* [ReferendumIndex](../classes/_type_referendumindex_.referendumindex.md)
* [ReferendumInfo](../classes/_type_referenduminfo_.referenduminfo.md)
* [RewardDestination](../classes/_type_rewarddestination_.rewarddestination.md)
* [RhdJustification](../classes/_type_justification_.rhdjustification.md)
* [RuntimeModuleMetadata](../classes/_metadata_v0_modules_.runtimemodulemetadata.md)
* [RuntimeVersion](../classes/_rpc_runtimeversion_.runtimeversion.md)
* [RuntimeVersionApi](../classes/_rpc_runtimeversion_.runtimeversionapi.md)
* [Schedule](../classes/_type_schedule_.schedule.md)
* [Seal](../classes/_type_digest_.seal.md)
* [SeedOf](../classes/_type_seedof_.seedof.md)
* [SessionKey](../classes/_type_sessionkey_.sessionkey.md)
* [Set](../classes/_codec_set_.set.md)
* [Signature](../classes/_type_signature_.signature.md)
* [SignaturePayload](../classes/_type_signaturepayload_.signaturepayload.md)
* [SignedBlock](../classes/_rpc_signedblock_.signedblock.md)
* [Sr25519Signature](../classes/_type_signature_.sr25519signature.md)
* [StakingLedger](../classes/_type_stakingledger_.stakingledger.md)
* [StorageChangeSet](../classes/_rpc_storagechangeset_.storagechangeset.md)
* [StorageData](../classes/_primitive_storagedata_.storagedata.md)
* [StorageFunctionMetadata](../classes/_metadata_v4_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v2_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v0_storage_.storagefunctionmetadata.md)
* [StorageFunctionMetadata](../classes/_metadata_v3_storage_.storagefunctionmetadata.md)
* [StorageFunctionModifier](../classes/_metadata_v0_storage_.storagefunctionmodifier.md)
* [StorageFunctionType](../classes/_metadata_v0_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v2_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v4_storage_.storagefunctiontype.md)
* [StorageFunctionType](../classes/_metadata_v3_storage_.storagefunctiontype.md)
* [StorageHasher](../classes/_primitive_storagehasher_.storagehasher.md)
* [StorageKey](../classes/_primitive_storagekey_.storagekey.md)
* [StorageMetadata](../classes/_metadata_v0_storage_.storagemetadata.md)
* [StoredPendingChange](../classes/_type_storedpendingchange_.storedpendingchange.md)
* [Struct](../classes/_codec_struct_.struct.md)
* [Text](../classes/_primitive_text_.text.md)
* [Tombstone](../classes/_type_contractinfo_.tombstone.md)
* [TombstoneContractInfo](../classes/_type_contractinfo_.tombstonecontractinfo.md)
* [TreasuryProposal](../classes/_type_treasuryproposal_.treasuryproposal.md)
* [TrieId](../classes/_type_contractinfo_.trieid.md)
* [Tuple](../classes/_codec_tuple_.tuple.md)
* [Type](../classes/_primitive_type_.type.md)
* [U128](../classes/_primitive_u128_.u128.md)
* [U16](../classes/_primitive_u16_.u16.md)
* [U256](../classes/_primitive_u256_.u256.md)
* [U32](../classes/_primitive_u32_.u32.md)
* [U64](../classes/_primitive_u64_.u64.md)
* [U8](../classes/_primitive_u8_.u8.md)
* [U8a](../classes/_codec_u8a_.u8a.md)
* [U8aFixed](../classes/_codec_u8afixed_.u8afixed.md)
* [UInt](../classes/_codec_uint_.uint.md)
* [USize](../classes/_primitive_usize_.usize.md)
* [UnlockChunk](../classes/_type_unlockchunk_.unlockchunk.md)
* [Usurped](../classes/_rpc_extrinsicstatus_.usurped.md)
* [ValidatorPrefs](../classes/_type_validatorprefs_.validatorprefs.md)
* [ValidityAttestation](../classes/_type_attestedcandidate_.validityattestation.md)
* [ValidityVote](../classes/_type_attestedcandidate_.validityvote.md)
* [Vector](../classes/_codec_vector_.vector.md)
* [VectorAny](../classes/_codec_vectorany_.vectorany.md)
* [VestingSchedule](../classes/_type_vestingschedule_.vestingschedule.md)
* [Vote](../classes/_type_vote_.vote.md)
* [VoteIndex](../classes/_type_voteindex_.voteindex.md)
* [VoteThreshold](../classes/_type_votethreshold_.votethreshold.md)
* [WithdrawReasons](../classes/_type_withdrawreasons_.withdrawreasons.md)

# Properties

<a id="encodedlength"></a>

##  encodedLength

**● encodedLength**: *`number`*

*Defined in [types.ts:39](https://github.com/polkadot-js/api/blob/db78aeb/packages/types/src/types.ts#L39)*

*__description__*: The length of the value when encoded as a Uint8Array

___
<a id="isempty"></a>

##  isEmpty

**● isEmpty**: *`boolean`*

*Defined in [types.ts:44](https://github.com/polkadot-js/api/blob/db78aeb/packages/types/src/types.ts#L44)*

*__description__*: Checks if the value is an empty value

___

# Methods

<a id="eq"></a>

##  eq

▸ **eq**(other?: *`any`*): `boolean`

*Defined in [types.ts:49](https://github.com/polkadot-js/api/blob/db78aeb/packages/types/src/types.ts#L49)*

*__description__*: Compares the value of the input to see if there is a match

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | `any` |

**Returns:** `boolean`

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(): `string`

*Defined in [types.ts:54](https://github.com/polkadot-js/api/blob/db78aeb/packages/types/src/types.ts#L54)*

*__description__*: Returns a hex string representation of the value

**Returns:** `string`

___
<a id="tojson"></a>

##  toJSON

▸ **toJSON**(): `any`

*Defined in [types.ts:59](https://github.com/polkadot-js/api/blob/db78aeb/packages/types/src/types.ts#L59)*

*__description__*: Converts the Object to JSON, typically used for RPC transfers

**Returns:** `any`

___
<a id="tostring"></a>

##  toString

▸ **toString**(): `string`

*Defined in [types.ts:64](https://github.com/polkadot-js/api/blob/db78aeb/packages/types/src/types.ts#L64)*

*__description__*: Returns the string representation of the value

**Returns:** `string`

___
<a id="tou8a"></a>

##  toU8a

▸ **toU8a**(isBare?: *`undefined` \| `false` \| `true`*): `Uint8Array`

*Defined in [types.ts:70](https://github.com/polkadot-js/api/blob/db78aeb/packages/types/src/types.ts#L70)*

*__description__*: Encodes the value as a Uint8Array as per the parity-codec specifications

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` isBare | `undefined` \| `false` \| `true` |  true when the value has none of the type-specific prefixes (internal) |

**Returns:** `Uint8Array`

___

