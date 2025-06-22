import { create } from 'zustand';

const useStore = create((set) => ({
  // Arithmetic ranges
  addSubMin1: 2,
  addSubMax1: 100,
  addSubMin2: 2,
  addSubMax2: 100,

  multDivMin1: 2,
  multDivMax1: 100,
  multDivMin2: 2,
  multDivMax2: 100,

  // Operation toggles
  addEnabled: true,
  subEnabled: true,
  multEnabled: true,
  divEnabled: true,

  // Time limit
  timeDuration: 90,

  // Setters
  setAddSubMin1: (val) => set((state) => ({ ...state, addSubMin1: val })),
  setAddSubMax1: (val) => set((state) => ({ ...state, addSubMax1: val })),
  setAddSubMin2: (val) => set((state) => ({ ...state, addSubMin2: val })),
  setAddSubMax2: (val) => set((state) => ({ ...state, addSubMax2: val })),

  setMultDivMin1: (val) => set((state) => ({ ...state, multDivMin1: val })),
  setMultDivMax1: (val) => set((state) => ({ ...state, multDivMax1: val })),
  setMultDivMin2: (val) => set((state) => ({ ...state, multDivMin2: val })),
  setMultDivMax2: (val) => set((state) => ({ ...state, multDivMax2: val })),

  setAddEnabled: (val) => set((state) => ({ ...state, addEnabled: val })),
  setSubEnabled: (val) => set((state) => ({ ...state, subEnabled: val })),
  setMultEnabled: (val) => set((state) => ({ ...state, multEnabled: val })),
  setDivEnabled: (val) => set((state) => ({ ...state, divEnabled: val })),

  setTimeDuration: (val) => set((state) => ({ ...state, timeDuration: val })),
}));

export default useStore;