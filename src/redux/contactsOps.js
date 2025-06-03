import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://683d7a5d199a0039e9e5a197.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const res = await axios.get("/contacts");
  console.log("fetch content");
  console.log(res.data);
  return res.data;
});

// console.dir(
//   fetchContacts.pending,
//   fetchContacts.fulfilled,
//   fetchContacts.rejected
// );
