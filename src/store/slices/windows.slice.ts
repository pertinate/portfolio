import { type Getter, type Lens, lens, type Setter } from '@dhmk/zustand-lens';
import { type StoreApi } from 'zustand';
import { type StoreState } from '../store';
import { windowsKey } from '~/components/windowRouter';

const state = {
    opened: [] as windowsKey[],
    hidden: [] as windowsKey[],
};

export type State = typeof state;

export type Actions = {
    add: (window: windowsKey) => void;
    remove: (window: windowsKey) => void;
    hide: (window: windowsKey, hide: boolean) => void;
};

export type WindowsStore = State & Actions;

const actions: (
    set: Setter<WindowsStore>,
    get: Getter<WindowsStore>,
    api: StoreApi<StoreState>,
    path: ReadonlyArray<string>
) => Actions = (set, get, api): Actions => {
    return {
        add: window => {
            if (!get().opened.includes(window)) {
                set({ opened: [...get().opened, window] });
            } else {
                if (get().hidden.includes(window)) {
                    get().hide(window, false);
                }
            }
        },
        remove: window => {
            if (get().opened.includes(window)) {
                set({ opened: get().opened.filter(entry => entry != window) });
            }
        },
        hide: (window, hide) => {
            if (get().hidden.includes(window)) {
                set({ hidden: get().hidden.filter(entry => entry != window) });
            } else {
                set({ hidden: [...get().hidden, window] });
            }
        },
    };
};

const slice: Lens<WindowsStore, StoreState> = (set, get, api, path) => {
    return {
        ...state,
        ...actions(set, get, api, path),
    };
};

export default lens(slice);
