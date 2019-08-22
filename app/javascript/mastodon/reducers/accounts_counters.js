import {
  ACCOUNT_FOLLOW_SUCCESS,
  ACCOUNT_UNFOLLOW_SUCCESS,
} from '../actions/accounts';
import { ACCOUNT_IMPORT, ACCOUNTS_IMPORT } from '../actions/importer';
import { Map as ImmutableMap, fromJS } from 'immutable';

const normalizeAccount = (state, account) => state.set(account.id, fromJS({
  followers_count: 999,
  following_count: 999,
  statuses_count: 999,
}));

const normalizeAccounts = (state, accounts) => {
  accounts.forEach(account => {
    state = normalizeAccount(state, account);
  });

  return state;
};

const initialState = ImmutableMap();

export default function accountsCounters(state = initialState, action) {
  switch(action.type) {
  case ACCOUNT_IMPORT:
    return normalizeAccount(state, action.account);
  case ACCOUNTS_IMPORT:
    return normalizeAccounts(state, action.accounts);
  case ACCOUNT_FOLLOW_SUCCESS:
    return state;
  case ACCOUNT_UNFOLLOW_SUCCESS:
    return state;
  default:
    return state;
  }
};
