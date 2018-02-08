webpackJsonp([0],{

/***/ "../shared/modules/sync/SyncSignInManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2002-2017 "Neo4j, Inc,"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Network Engine for Objects in Lund AB [http://neotechnology.com]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is part of Neo4j.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Neo4j is free software: you can redistribute it and/or modify
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * it under the terms of the GNU General Public License as published by
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * the Free Software Foundation, either version 3 of the License, or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * along with this program.  If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _browserSyncService = __webpack_require__("../shared/services/browserSyncService.js");

var _utils = __webpack_require__("../shared/services/utils.js");

var _syncDuck = __webpack_require__("../shared/modules/sync/syncDuck.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SyncSignInManager = function () {
  function SyncSignInManager(_ref) {
    var dbConfig = _ref.dbConfig,
        serviceReadyCallback = _ref.serviceReadyCallback,
        onSyncCallback = _ref.onSyncCallback,
        _ref$disconnectCallba = _ref.disconnectCallback,
        disconnectCallback = _ref$disconnectCallba === undefined ? null : _ref$disconnectCallba;

    _classCallCheck(this, SyncSignInManager);

    (0, _browserSyncService.initialize)(dbConfig);
    this.isServiceUp(serviceReadyCallback);
    this.onSync = onSyncCallback;
    this.onDisconnect = disconnectCallback;
  }

  _createClass(SyncSignInManager, [{
    key: 'isServiceUp',
    value: function isServiceUp(serviceReadyCallback) {
      var _this = this;

      (0, _browserSyncService.status)().on('value', function (v) {
        if (v.val()) {
          if (_this._downTimer) {
            clearTimeout(_this._downTimer);
            delete _this._downTimer;
          }
          serviceReadyCallback(_syncDuck.UP);
        } else {
          // During connecting, the status is always down for a short time. So wait before setting state to be sure its really down
          _this._downTimer = setTimeout(function () {
            return serviceReadyCallback(_syncDuck.DOWN);
          }, 10000);
        }
      });
    }
  }, {
    key: 'authCallBack',
    value: function authCallBack(data, error) {
      var successFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var errorFn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (error) {
        this.serviceAuthenticated = false;
        this.error = error;
        errorFn && errorFn(error);
      } else {
        this.authenticateWithDataAndBind(data, successFn, errorFn);
      }
    }
  }, {
    key: 'authenticateWithDataAndBind',
    value: function authenticateWithDataAndBind(authData) {
      var _this2 = this;

      var successFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var errorFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      this.authData = authData;
      (0, _browserSyncService.authenticate)(this.authData.data_token, this.onDisconnect).then(function (a) {
        _this2.serviceAuthenticated = true;
        _this2.error = null;
        _this2.bindToResource();
        successFn && successFn(authData);
      }).catch(function (e) {
        _this2.serviceAuthenticated = false;
        _this2.error = e;
        errorFn && errorFn(e);
      });
    }
  }, {
    key: 'bindToResource',
    value: function bindToResource() {
      var _this3 = this;

      this.syncRef = (0, _browserSyncService.getResourceFor)(this.authData.profile.user_id);
      this.syncRef.on('value', function (v) {
        if (v.val() === null) {
          (0, _browserSyncService.setupUser)(_this3.authData.profile.user_id, {
            documents: [{
              client: (0, _utils.getBrowserName)(),
              syncedAt: Date.now()
            }]
          });
        } else {
          _this3.setSyncData(v.val());
        }
      });
    }
  }, {
    key: 'signOut',
    value: function signOut() {
      (0, _browserSyncService.signOut)();
    }
  }, {
    key: 'setSyncData',
    value: function setSyncData(value) {
      this.onSync({
        key: this.authData.profile.user_id,
        syncObj: value,
        lastSyncedAt: new Date()
      });
    }
  }]);

  return SyncSignInManager;
}();

exports.default = SyncSignInManager;

/***/ })

});
//# sourceMappingURL=sync-manager.a7d86a4b010d6978d474.js.map