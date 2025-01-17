// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { MetadataInterface } from '../types';

import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../primitive/Text';
import { flattenUniq, validateTypes } from '../util';

import { FunctionMetadata } from './Calls';
import { ModuleConstantMetadata } from './Constants';
import { EventMetadata } from './Events';
import { StorageEntryMetadata } from './Storage';

/**
 * @name ModuleMetadata
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadata extends Struct {
  constructor (value?: any) {
    super({
      name: Text,
      prefix: Text,
      storage: Option.with(Vector.with(StorageEntryMetadata)),
      calls: Option.with(Vector.with(FunctionMetadata)),
      events: Option.with(Vector.with(EventMetadata)),
      constants: Vector.with(ModuleConstantMetadata)
    }, value);
  }

  /**
   * @description the module calls
   */
  get calls (): Option<Vector<FunctionMetadata>> {
    return this.get('calls') as Option<Vector<FunctionMetadata>>;
  }

  /**
   * @description the module constants
   */
  get constants (): Vector<ModuleConstantMetadata> {
    return this.get('constants') as Vector<ModuleConstantMetadata>;
  }

  /**
   * @description the module events
   */
  get events (): Option<Vector<EventMetadata>> {
    return this.get('events') as Option<Vector<EventMetadata>>;
  }

  /**
   * @description the module name
   */
  get name (): Text {
    return this.get('name') as Text;
  }

  /**
   * @description the module prefix
   */
  get prefix (): Text {
    return this.get('prefix') as Text;
  }

  /**
   * @description the associated module storage
   */
  get storage (): Option<Vector<StorageEntryMetadata>> {
    return this.get('storage') as Option<Vector<StorageEntryMetadata>>;
  }
}

/**
 * @name MetadataV6
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV6 extends Struct implements MetadataInterface<ModuleMetadata> {
  constructor (value?: any) {
    super({
      modules: Vector.with(ModuleMetadata)
    }, value);
  }

  /**
   * @description The associated modules for this structure
   */
  get modules (): Vector<ModuleMetadata> {
    return this.get('modules') as Vector<ModuleMetadata>;
  }

  private get callNames () {
    return this.modules.map((mod) =>
      mod.calls.isNone
        ? []
        : mod.calls.unwrap().map((fn) =>
          fn.args.map((arg) => arg.type.toString())
        )
    );
  }

  private get constantNames () {
    return this.modules.map((mod) =>
      mod.constants.map((c) =>
        c.type.toString()
      )
    );
  }

  private get eventNames () {
    return this.modules.map((mod) =>
      mod.events.isNone
        ? []
        : mod.events.unwrap().map((event) =>
          event.args.map((arg) => arg.toString())
        )
    );
  }

  private get storageNames () {
    return this.modules.map((mod) =>
      mod.storage.isNone
        ? []
        : mod.storage.unwrap().map((fn) => {
          if (fn.type.isMap) {
            return [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()];
          } else if (fn.type.isDoubleMap) {
            return [fn.type.asDoubleMap.key1.toString(), fn.type.asDoubleMap.key2.toString(), fn.type.asDoubleMap.value.toString()];
          } else {
            return [fn.type.asType.toString()];
          }
        })
    );
  }

  /**
   * @description Helper to retrieve a list of all type that are found, sorted and de-deuplicated
   */
  getUniqTypes (throwError: boolean): Array<string> {
    const types = flattenUniq([this.callNames, this.constantNames, this.eventNames, this.storageNames]);

    validateTypes(types, throwError);

    return types;
  }
}
