import create from 'zustand';
import { withLenses } from '@dhmk/zustand-lens';
import exampleSlice, { ExampleStore } from './slices/example.slice';
import windowsSlice, { WindowsStore } from './slices/windows.slice';

export type StoreState = {
    example: ExampleStore;
    windows: WindowsStore;
};

export const useStore = create<StoreState>(
    withLenses({
        example: exampleSlice,
        windows: windowsSlice,
    })
);
