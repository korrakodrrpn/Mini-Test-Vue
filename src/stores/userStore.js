// src/stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: []
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
    },
    updateUser(index, updatedUser) {
      this.users[index] = updatedUser;
    },
    removeUser(index) {
      this.users.splice(index, 1);
    }
  },
  persist: true,
});
