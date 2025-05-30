// store.js
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
  timeDuration: null,

  // Setters
  setAddSubMin1: (val) => set({ addSubMin1: val }),
  setAddSubMax1: (val) => set({ addSubMax1: val }),
  setAddSubMin2: (val) => set({ addSubMin2: val }),
  setAddSubMax2: (val) => set({ addSubMax2: val }),

  setMultDivMin1: (val) => set({ multDivMin1: val }),
  setMultDivMax1: (val) => set({ multDivMax1: val }),
  setMultDivMin2: (val) => set({ multDivMin2: val }),
  setMultDivMax2: (val) => set({ multDivMax2: val }),

  setAddEnabled: (val) => set({ addEnabled: val }),
  setSubEnabled: (val) => set({ subEnabled: val }),
  setMultEnabled: (val) => set({ multEnabled: val }),
  setDivEnabled: (val) => set({ divEnabled: val }),

  setTimeDuration: (val) => set({ timeDuration: val })
}));

export default useStore;
