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
    hide: (window: windowsKey) => void;
    unhide: (window: windowsKey) => void;
    toggle: (window: windowsKey) => void;
    toggleHide: (window: windowsKey) => void;
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
            }
        },
        remove: window => {
            if (get().opened.includes(window)) {
                set({ opened: get().opened.filter(entry => entry != window) });
            }
        },
        toggleHide: window => {
            if (get().opened.includes(window)) {
                console.log('test');
                if (get().hidden.includes(window)) {
                    console.log('test');
                    set({
                        hidden: get().hidden.filter(entry => entry != window),
                    });
                } else {
                    console.log('test');
                    set({ hidden: [...get().hidden, window] });
                }
            } else {
                get().add(window);
            }
        },
        toggle: window => {
            if (get().hidden.includes(window)) {
                set({ opened: get().opened.filter(entry => entry != window) });
            } else {
                set({ opened: [...get().opened, window] });
            }
        },
        hide: window => {
            if (!get().opened.includes(window)) {
                set({ hidden: [...get().hidden, window] });
            }
        },
        unhide: window => {
            if (get().opened.includes(window)) {
                set({ hidden: get().hidden.filter(entry => entry != window) });
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
