// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import extrinsicsFromMeta from '@polkadot/api-metadata/extrinsics/fromMetadata';
import { getTypeRegistry } from '@polkadot/types';
import * as srmlTypes from '@polkadot/types/srml/definitions';

import createType from '../../codec/createType';
import Metadata from '../Metadata';
import Method from '../../primitive/Method';
import { MetadataInterface } from '../types';
import { Codec } from '../../types';

function injectDefinitions () {
  Object.values(srmlTypes).forEach(({ types }) =>
    getTypeRegistry().register(types)
  );
}

/**
 * Given the static `rpcData` and the `latestSubstrate` JSON file, Metadata
 * should decode `rpcData` and output `latestSubstrate`.
 */
export function decodeLatestSubstrate<Modules extends Codec> (
  version: number,
  rpcData: string,
  latestSubstrate: object
) {
  it('decodes latest substrate properly', () => {
    injectDefinitions();

    const metadata = new Metadata(rpcData);

    console.error(JSON.stringify(metadata.toJSON()));

    expect(metadata.version).toBe(version);
    expect((metadata[`asV${version}` as keyof Metadata] as unknown as MetadataInterface<Modules>).modules.length).not.toBe(0);
    expect(metadata.toJSON()).toEqual(latestSubstrate);
  });
}

/**
 * Given a `version`, MetadataV6 and MetadataV{version} should output the same
 * unique types.
 */
export function toV6<Modules extends Codec> (version: number, rpcData: string) {
  it('converts to V6', () => {
    injectDefinitions();

    const metadata = new Metadata(rpcData)[`asV${version}` as keyof Metadata];
    const metadataV6 = new Metadata(rpcData).asV6;

    expect(
      (metadata as unknown as MetadataInterface<Modules>).getUniqTypes(true)
    ).toEqual(metadataV6.getUniqTypes(true));
  });
}

/**
 * Given a Metadata, no type should throw when given its fallback value.
 */
export function defaultValues (rpcData: string) {
  describe('storage with default values', () => {
    injectDefinitions();

    const metadata = new Metadata(rpcData);

    Method.injectMethods(extrinsicsFromMeta(metadata));

    metadata.asV6.modules
      .filter(({ storage }) => storage.isSome)
      .map((mod) =>
        mod.storage.unwrap().forEach(({ fallback, name, type }) => {
          it(`creates default types for ${mod.prefix}.${name}, type ${type}`, () => {
            expect(
              () => createType(type.toString(), fallback)
            ).not.toThrow();
          });
        })
      );
  });
}
