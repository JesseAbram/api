// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';

import ApiRx from '@polkadot/api/rx/Api';
import { AccountId, AccountIndex, BlockNumber, Index } from '@polkadot/types';
import { WsProvider } from '@polkadot/rpc-provider';

import { HeaderExtended } from '../../src/type';
import { DerivedBalances, DerivedContractFees, DerivedFees, DerivedSessionInfo } from '../../src/types';

const WS = 'ws://127.0.0.1:9944/';
// const WS = 'wss://poc3-rpc.polkadot.io/';
// const WS = 'wss://substrate-rpc.parity.io/';

// Dev account Alice
const ID = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const IX = 'F7Hs';

describe.skip('Api-RX derive e2e', () => {
  let api: ApiRx;

  beforeAll(() => {
    jest.setTimeout(10000);
  });

  beforeEach(async (done) => {
    api = await ApiRx.create(new WsProvider(WS)).toPromise();
    done();
  });

  // These derive.accounts tests only work on localhost, not the poc-3 URL
  // (and it is assuming it sent at least 1 tx)
  describe('derive.accounts', () => {
    describe('idAndIndex', () => {
      it('looks up AccountId & AccountIndex from AccountId', async (done) => {
        // @ts-ignore silence warning until we have static types here
        api.derive.accounts.idAndIndex(ID).subscribe(([accountId, accountIndex]) => {
          expect(accountId!.toString()).toEqual(ID);
          // The first emitted value for ix is undefined when passing the ID
          if (accountIndex) {
            expect(accountIndex.toString()).toEqual(IX);
          } else {
            expect(accountIndex).toEqual(undefined);
          }
          done();
        });
      });

      it('looks up AccountId & AccountIndex from AccountIndex', async (done) => {
        // @ts-ignore silence warning until we have static types here
        api.derive.accounts.idAndIndex(IX).subscribe(([accountId, accountIndex]) => {
          // The first emitted value for id is undefined when passing the IX
          if (accountId) {
            expect(accountId.toString()).toEqual(ID);
          } else {
            expect(accountId).toEqual(undefined);
          }
          expect(accountIndex!.toString()).toEqual(IX);
          done();
        });
      });
    });

    describe('indexToId', () => {
      it('looks up AccountId from AccountIndex', async (done) => {
        // @ts-ignore silence warning until we have static types here
        api.derive.accounts.indexToId(IX).subscribe((accountId) => {
          // The first emitted value for accountId is undefined when passing the IX
          if (accountId) {
            expect(accountId instanceof AccountId).toBe(true);
            expect(accountId.toString()).toEqual(ID);
          } else {
            expect(accountId).toEqual(undefined);
          }
          done();
        });
      });
    });

    describe('idToIndex', () => {
      it('looks up AccountIndex from AccountId', async (done) => {
        // @ts-ignore silence warning until we have static types here
        api.derive.accounts.idToIndex(ID).subscribe((accountIndex) => {
          // The first emitted value for AccountIndex is undefined when passing the ID
          if (accountIndex) {
            expect(accountIndex instanceof AccountIndex).toBe(true);
            expect(accountIndex.toString()).toEqual(IX);
          } else {
            expect(accountIndex).toEqual(undefined);
          }
          done();
        });
      });
    });

    describe('indexes', () => {
      it('looks up all AccountIndexes', async (done) => {
        // @ts-ignore silence warning until we have static types here
        api.derive.accounts.indexes().subscribe((accountIndexes) => {
          // A local dev chain should have the AccountIndex of Alice
          expect(accountIndexes).toHaveProperty(
            ID,
            new AccountIndex(IX)
          );
          done();
        });
      });
    });
  });

  // these only work on localhost, not the poc-3 URL
  // (and it is assuming it sent at least 1 tx)
  describe('derive.balances', () => {
    describe('all', () => {
      it('It returns an object with all relevant balance information of an account', async (done) => {
        api.derive.balances.all(ID).subscribe((balances: DerivedBalances) => {
          expect(balances).toEqual(expect.objectContaining({
            accountId: expect.any(AccountId),
            accountNonce: expect.any(Index),
            availableBalance: expect.any(BN),
            freeBalance: expect.any(BN),
            lockedBalance: expect.any(BN),
            reservedBalance: expect.any(BN),
            vestedBalance: expect.any(BN),
            votingBalance: expect.any(BN)
          }));
          done();
        });
      });
    });

    describe('fees', () => {
      it('fees: It returns an object with all relevant fees of type BN', async (done) => {
        api.derive.balances.fees().subscribe((fees: DerivedFees) => {
          expect(fees).toEqual(expect.objectContaining({
            creationFee: expect.any(BN),
            existentialDeposit: expect.any(BN),
            transactionBaseFee: expect.any(BN),
            transactionByteFee: expect.any(BN),
            transferFee: expect.any(BN)
          }));
          done();
        });
      });
    });
  });

  describe('derive.chain', () => {
    describe('bestNumber', () => {
      it('Get the latest block number', async (done) => {
        api.derive.chain.bestNumber().subscribe((blockNumber: BlockNumber) => {
          expect(blockNumber instanceof BlockNumber).toBe(true);
          expect(blockNumber.gten(0)).toBe(true);
          done();
        });
      });
    });

    describe('bestNumberFinalized', () => {
      it('Get the latest finalised block number', async (done) => {
        api.derive.chain.bestNumberFinalized().subscribe((blockNumber: BlockNumber) => {
          expect(blockNumber instanceof BlockNumber).toBe(true);
          expect(blockNumber.gten(0)).toBe(true);
          done();
        });
      });
    });

    describe('bestNumberLag', () => {
      it('lag between finalised head and best head', async (done) => {
        api.derive.chain.bestNumberLag().subscribe((numberLag: BlockNumber) => {
          expect(numberLag instanceof BlockNumber).toBe(true);
          expect(numberLag.gten(0)).toBe(true);
          done();
        });
      });
    });

    // FIXME https://github.com/polkadot-js/api/issues/868
    describe.skip('getHeader', () => {
      it('gets a specific block header and extended with it\`s author', async (done) => {
        api.derive.chain.getHeader('TODO').subscribe((headerExtended: HeaderExtended | undefined) => {
          // WIP
          expect(headerExtended).toEqual(expect.arrayContaining([]));
          done();
        });
      });
    });

    describe('subscribeNewHead', () => {
      it('gets an observable of the current block header and it\'s author', async (done) => {
        api.derive.chain.subscribeNewHead().subscribe((headerExtended: HeaderExtended) => {
          // WIP https://github.com/polkadot-js/api/issues/868
          done();
        });
      });
    });
  });

  describe('derive.contracts', () => {
    describe('fees', () => {
      it('fees: It returns an object with all relevant constract fees of type Balance', async (done) => {
        api.derive.contracts.fees().subscribe((fees: DerivedContractFees) => {
          expect(fees).toEqual(expect.objectContaining({
            callBaseFee: expect.any(BN),
            contractFee: expect.any(BN),
            createBaseFee: expect.any(BN),
            creationFee: expect.any(BN),
            rentByteFee: expect.any(BN),
            rentDepositOffset: expect.any(BN),
            tombstoneDeposit: expect.any(BN),
            transactionBaseFee: expect.any(BN),
            transactionByteFee: expect.any(BN),
            transferFee: expect.any(BN)
          }));
          done();
        });
      });
    });
  });

  describe('derive.session', () => {
    describe('sessionProgress', () => {
      it('derive.session.sessionProgress', async (done) => {
        api.derive.session.sessionProgress().subscribe((progress: BN) => {
          expect(progress instanceof BN).toBe(true);
          done();
        });
      });
    });

    describe('session.info', () => {
      it('retrieves all session info', async (done) => {
        api.derive.session.info().subscribe((info: DerivedSessionInfo) => {
          expect(info).toEqual(expect.objectContaining({
            currentEra: expect.anything(),
            currentIndex: expect.anything(),
            eraLength: expect.anything(),
            eraProgress: expect.anything(),
            lastEraLengthChange: expect.anything(),
            lastLengthChange: expect.anything(),
            sessionLength: expect.anything(),
            sessionsPerEra: expect.anything(),
            sessionProgress: expect.anything()
          }));
          done();
        });
      });
    });

    describe('session.eraLength', () => {
      it('derive.session.eraLength', async (done) => {
        api.derive.session.eraLength().subscribe((length: BN) => {
          expect(length instanceof BN).toBe(true);
          done();
        });
      });
    });

    describe('session.eraProgress', () => {
      it('derive.session.eraProgress', async (done) => {
        api.derive.session.eraProgress().subscribe((progress: BN) => {
          expect(progress instanceof BN).toBe(true);
          done();
        });
      });
    });
  });

  describe('derive.staking', () => {
    describe('controllers', () => {
      // @TODO https://github.com/polkadot-js/api/issues/868
    });
  });

  afterAll(() => {
    jest.setTimeout(10000);
  });
});
