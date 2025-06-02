import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://683d7a5d199a0039e9e5a197.mockapi.io/";

export const fetchContacts  = createAsyncThunk("tasks/getAll", async () => {
    const res = await axios.get("/contacts");
})