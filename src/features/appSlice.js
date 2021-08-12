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
    setTextChannelInfo: (state, action) => {
      state.textChannelId = action.payload.textChannelId;
      state.textChannelName = action.payload.textChannelName;
    },
    setVoiceChannelInfo: (state, action) => {
      state.voiceChannelId = action.payload.voiceChannelId;
      state.voiceChannelName = action.payload.voiceChannelName;
    },
  },
});

export const { setTextChannelInfo, setVoiceChannelInfo } = appSlice.actions;

export const selecttextChannelName = (state) => state.app.textChannelName;
export const selecttextChannelId = (state) => state.app.textChannelId;
export const selectvoiceChannelName = (state) => state.app.voiceChannelName;
export const selectvoiceChannelId = (state) => state.app.voiceChannelId;

export default appSlice.reducer;
