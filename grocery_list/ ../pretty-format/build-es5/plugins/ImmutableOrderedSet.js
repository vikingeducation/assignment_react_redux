'use strict';











var printImmutable = require('./lib/printImmutable'); /**
                                                       * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                       *
                                                       * This source code is licensed under the BSD-style license found in the
                                                       * LICENSE file in the root directory of this source tree. An additional grant
                                                       * of patent rights can be found in the PATENTS file in the same directory.
                                                       *
                                                       * 
                                                       */var IS_SET = '@@__IMMUTABLE_SET__@@';var IS_ORDERED = '@@__IMMUTABLE_ORDERED__@@';var test = function test(maybeOrderedSet) {return maybeOrderedSet && maybeOrderedSet[IS_SET] && maybeOrderedSet[IS_ORDERED];};var print = function print(val,
_print,
indent,
opts,
colors) {return (
    printImmutable(val, _print, indent, opts, colors, 'OrderedSet', false));};

module.exports = { print: print, test: test };