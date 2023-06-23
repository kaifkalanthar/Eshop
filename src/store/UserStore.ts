import { UserInfo } from "firebase/auth";
import { create } from "zustand";

interface UserStore {
  user: UserInfo;
  setUser: (userDetail: UserInfo) => void;
}

const userStore = create<UserStore>((set) => ({
  user: {} as UserInfo,
  setUser: (user) => set(() => ({ user })),
}));

export default userStore;
