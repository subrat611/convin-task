import { createSlice } from "@reduxjs/toolkit";

const bucketSlice = createSlice({
  name: "bucket",
  initialState: [
    {
      id: 1,
      title: "education",
      items: [
        {
          id: 1,
          title: "science",
          link: "www.instagram.com",
        },
      ],
    },
    {
      id: 2,
      title: "entertainment",
      items: [
        {
          id: 1,
          title: "science",
          link: "www.instagram.com",
        },
      ],
    },
    {
      id: 3,
      title: "sport",
      items: [
        {
          id: 1,
          title: "cricket",
          link: "www.instagram.com",
        },
      ],
    },
  ],
  reducers: {
    renameBucket(state, actions) {
      return state.map((item) =>
        item.id === actions.payload.id
          ? { ...item, title: actions.payload.text }
          : item
      );
    },
    addCardToBucket(state, actions) {
      const { id, values } = actions.payload;

      return state.map((item) =>
        item.id === id
          ? {
              ...item,
              items: [
                ...item.items,
                {
                  id: item.items.length + 1,
                  title: values.cardname,
                  link: values.cardlink,
                },
              ],
            }
          : item
      );
    },
    editCardItemFomBucket(state, actions) {
      const { itemId, bucketId, itemTitle, itemLink } = actions.payload;

      return state.map((item) =>
        item.id === bucketId
          ? {
              ...item,
              items: item.items.map((item) =>
                item.id === itemId
                  ? { ...item, title: itemTitle, link: itemLink }
                  : item
              ),
            }
          : item
      );
    },
    removeCardFromBucket(state, actions) {
      const { itemId, bucketId } = actions.payload;
      return state.map((item) =>
        item.id === bucketId
          ? { ...item, items: item.items.filter((item) => item.id !== itemId) }
          : item
      );
    },
  },
});

export const {
  renameBucket,
  addCardToBucket,
  editCardItemFomBucket,
  removeCardFromBucket,
} = bucketSlice.actions;

export default bucketSlice.reducer;
