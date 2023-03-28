import { createSlice } from "@reduxjs/toolkit";

const bucketSlice = createSlice({
  name: "bucket",
  initialState: [
    {
      id: 1,
      title: "education videos",
      items: [
        {
          id: 1,
          title: "what is an earthquake",
          link: "https://www.youtube.com/embed/dJpIU1rSOFY",
        },
        {
          id: 2,
          title: "top 10 technologies to learn in 2023",
          link: "https://www.youtube.com/embed/jTX8MSw0Ufw",
        },
      ],
    },
    {
      id: 2,
      title: "entertainment videos",
      items: [
        {
          id: 1,
          title: "jehda nasha",
          link: "https://www.youtube.com/embed/6zf2dNLS-fs",
        },
        {
          id: 2,
          title: "holi returns | ashish chanchlani",
          link: "https://www.youtube.com/embed/LxLf3G00DyM",
        },
        {
          id: 3,
          title: "indian tv shows | ft. crime petrol",
          link: "https://www.youtube.com/embed/IlLFLAX3zEQ",
        },
      ],
    },
    {
      id: 3,
      title: "thought videos",
      items: [
        {
          id: 1,
          title: "optimizing workspace for productivity",
          link: "https://www.youtube.com/embed/Ze2pc6NwsHQ",
        },
        {
          id: 2,
          title: "optimizing workspace for productivity",
          link: "https://www.youtube.com/embed/Ze2pc6NwsHQ",
        },
        {
          id: 3,
          title: "how to get your brain to focus",
          link: "https://www.youtube.com/embed/Hu4Yvq-g7_Y",
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
    updateBucketDragDrop(state, actions) {
      const { bucketFromId, bucketToId, itemId, cardtitle, cardlink } =
        actions.payload;
      state = state.map((bucket) =>
        bucket.id === bucketFromId
          ? {
              ...bucket,
              items: bucket.items.filter((item) => item.id !== itemId),
            }
          : bucket
      );
      state = state.map((bucket) =>
        bucket.id === bucketToId
          ? {
              ...bucket,
              items: [
                ...bucket.items,
                {
                  id: bucket.items.length + 1,
                  title: cardtitle,
                  link: cardlink,
                },
              ],
            }
          : bucket
      );

      return state;
    },
  },
});

export const {
  renameBucket,
  addCardToBucket,
  editCardItemFomBucket,
  removeCardFromBucket,
  updateBucketDragDrop,
} = bucketSlice.actions;

export default bucketSlice.reducer;
