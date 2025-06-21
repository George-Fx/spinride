import {atomWithStorage} from 'jotai/utils';

import {constants} from '../constants';

export const tabAtom = atomWithStorage<string>('tab', constants.routes.HOME);
