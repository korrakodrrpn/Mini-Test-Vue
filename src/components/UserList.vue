<template>
  <div>
    <b-row class="justify-content-center align-items-center mt-5">
      <b-col cols="10">
        <label class="fs-4 fw-bold ">รายการสมาชิก</label>
        <b-button @click="openModal" variant="primary" class="ms-3">+ เพิ่มข้อมูล</b-button>
      </b-col>
    </b-row>
    <b-row class="justify-content-center align-items-center mt-1">
      <b-col cols="10">
        <b-table :items="users" :fields="fields" striped hover bordered>
          <template #cell(edit)="data">
            <b-button @click="editUser(data.index)" variant="warning" size="sm" class="action-button">
              แก้ไข
            </b-button>
          </template>
          <template #cell(remove)="data">
            <b-button @click="removeUser(data.index)" variant="danger" size="sm" class="action-button">
              ลบ
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-modal v-model="showModal" hide-footer centered>
      <UserForm :editIndex="editIndex" :userData="userData" @save-user="handleSaveUser" @cancel="closeModal" />
    </b-modal>
  </div>
</template>

<script>
import UserForm from './UserForm.vue';
import { useUserStore } from '@/stores/userStore';

export default {
  name: 'UserManagement',
  components: { UserForm },
  data() {
    return {
      showModal: false,
      editIndex: null,
      userData: { name: '', email: '', phone: '', address: '' },
      userStore: useUserStore(),
      fields: [
        { key: 'index', label: 'ลำดับ' },
        { key: 'name', label: 'ชื่อ' },
        { key: 'email', label: 'อีเมล' },
        { key: 'phone', label: 'เบอร์โทร' },
        { key: 'address', label: 'ที่อยู่' },
        { key: 'edit', label: 'แก้ไข' },
        { key: 'remove', label: 'ลบ' },
      ],
    };
  },
  methods: {
    openModal() {
      this.editIndex = null;
      this.userData = { name: '', email: '', phone: '', address: '' };
      this.showModal = true;
    },
    editUser(index) {
      this.editIndex = index;
      this.userData = { ...this.userStore.users[index] };
      this.showModal = true;
    },
    removeUser(index) {
      this.userStore.removeUser(index);
    },
    handleSaveUser(user) {
      if (this.editIndex !== null) {
        this.userStore.updateUser(this.editIndex, user);
      } else {
        this.userStore.addUser(user);
      }
      this.closeModal();
    },
    closeModal() {
      this.showModal = false;
    },
  },
  computed: {
    users() {
      return this.userStore.users.map((user, index) => ({
        ...user,
        index: index + 1,
      }));
    },
  },
};
</script>

<style>
.action-button {
  font-size: 0.85rem;
  padding: 0.25rem 0.5rem;
}

.action-button+.action-button {
  margin-left: 5px;
}
</style>
