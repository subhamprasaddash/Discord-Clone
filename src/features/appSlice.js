import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textChannelName: null,
  textChannelId: null,
  voiceChannelName: null,
  voiceChannelId: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTextChannelId: (state, action) => {
      state.app = action.payload;
    },
    setVoiceChannelId: (state, action) => {
      state.app = action.payload;
    },
  },
});

export const { setTextChannelId, setVoiceChannelId } = appSlice.actions;

export const selecttextChannelName = (state) => state.app.textChannelName;
export const selecttextChannelId = (state) => state.app.textChannelId;
export const selectvoiceChannelName = (state) => state.app.voiceChannelName;
export const selectvoiceChannelId = (state) => state.app.voiceChannelId;

export default appSlice.reducer;
