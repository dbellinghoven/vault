import { inject as service } from '@ember/service';

/**
 * @module RaftJoin
 * RaftJoin component presents the user with a choice to join an existing raft cluster when a new Vault
 * server is brought up
 *
 *
 * @example
 * ```js
 * <RaftJoin @onDismiss={{action (mut attr)}} />
 * ```
 * @param {function} onDismiss - This function will be called if the user decides not to join an existing
 * raft cluster
 *
 */

import Component from '@ember/component';

export default Component.extend({
  store: service(),
  onDismiss() {},
  preference: 'join',
  showJoinForm: false,
  actions: {
    advanceFirstScreen() {
      if (this.preference !== 'join') {
        this.onDismiss();
        return;
      }
      this.set('showJoinForm', true);
    },
    newModel() {
      return this.store.createRecord('raft-join');
    },
  },
});
