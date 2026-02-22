import { create } from "zustand"
import type { UserInterface } from "../interfaces/user"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persist, createJSONStorage } from "zustand/middleware"

interface SetSessionParams {
  user: UserInterface
  token: string
  refreshToken: string
}

interface UpdateTokensParams {
  token: string
  refreshToken: string
}

export interface UserStore {
  user: UserInterface | null;
  token: string | null
  refreshToken: string | null

  setSession: (sessionData: SetSessionParams) => void;
  logout: () => void;
  updateTokens: (updateTokensData: UpdateTokensParams) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      refreshToken: null,

      logout: () => set({ user: null, token: null, refreshToken: null }),
      setSession: (sessionData) => {
        set({ ...sessionData })
      },
      updateTokens: (updateTokensParams) => {
        set({ ...updateTokensParams })
      },
    }),
    {
      name: 'marketplace-auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)