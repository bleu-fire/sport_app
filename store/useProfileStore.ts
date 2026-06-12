import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProfileState {
  profileImage: string | null;
  username: string;
  membershipTier: string;
  setProfileImage: (uri: string | null) => void;
  setUsername: (name: string) => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profileImage: null, // Holds the local FileSystem URI
      username: 'ALEXA VANCE',
      membershipTier: 'ELITE MEMBER • SINCE 2023',
      setProfileImage: (uri) => set({ profileImage: uri }),
      setUsername: (name) => set({ username: name }),
    }),
    {
      name: 'midnight-athletic-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
