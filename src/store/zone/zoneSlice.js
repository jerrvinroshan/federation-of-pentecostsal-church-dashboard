import { createSlice } from "@reduxjs/toolkit";

const zoneSlice = createSlice({
  name: "zone",
  initialState: {
    zones: [],
  },
  reducers: {
    addZone: (state, action) => {
      const nextId =
        state.zones.length > 0
          ? Math.max(...state.zones.map((zone) => zone.id)) + 1
          : 1;

      state.zones.push({
        id: nextId,
        zoneName: action.payload.zoneName,
        description: action.payload.description,
      });
    },
    editZone: (state, action) => {
      const { id, zoneName, description } = action.payload;
      const zoneToEdit = state.zones.find((zone) => zone.id === id);
      if (zoneToEdit) {
        zoneToEdit.zoneName = zoneName;
        zoneToEdit.description = description;
      }
    },
    deleteZone: (state, action) => {
      state.zones = state.zones.filter((zone) => zone.id !== action.payload);
    },
  },
});

export const { addZone, editZone, deleteZone } = zoneSlice.actions;
export default zoneSlice.reducer;
