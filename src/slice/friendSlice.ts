import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Friend = {
  id: number;
  location: string;
  account: string;
  isFollowing: boolean;
  avatar: string;
};

type friendState = {
  friends: Friend[];
};

const initialState: friendState = {
  friends: [
    {
      id: 1,
      location: "Taipei",
      account: "person_a1",
      isFollowing: true,
      avatar: "/images/avatars/a1.png",
    },
    {
      id: 2,
      location: "Taipe2",
      account: "person_a2",
      isFollowing: true,
      avatar: "/images/avatars/a2.png",
    },
    {
      id: 3,
      location: "Taipe3",
      account: "person_a3",
      isFollowing: true,
      avatar: "/images/avatars/a3.png",
    },
    {
      id: 4,
      location: "Taipe4",
      account: "person_a4",
      isFollowing: true,
      avatar: "/images/avatars/a4.png",
    },
    {
      id: 5,
      location: "Taipe5",
      account: "person_a5",
      isFollowing: true,
      avatar: "/images/avatars/a5.png",
    },
    {
      id: 6,
      location: "Taipe6",
      account: "person_a6",
      isFollowing: true,
      avatar: "/images/avatars/a6.png",
    },
    {
      id: 7,
      location: "Taipe7",
      account: "person_a7",
      isFollowing: true,
      avatar: "/images/avatars/a7.png",
    },
    {
      id: 8,
      location: "Taipei8",
      account: "person_a8",
      isFollowing: true,
      avatar: "/images/avatars/a8.png",
    },
    {
      id: 9,
      location: "Taipe9",
      account: "person_a9",
      isFollowing: true,
      avatar: "/images/avatars/a9.png",
    },
    {
      id: 10,
      location: "Taipe10",
      account: "person_a10",
      isFollowing: true,
      avatar: "/images/avatars/a10.png",
    },
  ],
};

export const friendSlice = createSlice({
  name: "friendsList",
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = true;
        }
      }
    },
    unFollow: (state, action: PayloadAction<number>) => {
      const friends = state.friends;
      for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.id === action.payload) {
          friend.isFollowing = false;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { follow, unFollow } = friendSlice.actions;

export default friendSlice.reducer;