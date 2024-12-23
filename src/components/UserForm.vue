<template>
  <b-card class="mb-3">
    <template #header>
      <h5>{{ editIndex !== null ? 'อัพเดทข้อมูลผู้ใช้' : 'เพิ่มผู้ใช้ใหม่' }}</h5>
    </template>
    <b-form>
      <b-form-group label="ชื่อผู้ใช้">
        <b-form-input v-model="newUser.name" placeholder="กรอกชื่อผู้ใช้" />
      </b-form-group>
      <b-form-group label="อีเมล">
        <b-form-input v-model="newUser.email" placeholder="กรอกอีเมล" />
      </b-form-group>
      <b-form-group label="เบอร์โทร">
        <b-form-input v-model="newUser.phone" placeholder="กรอกเบอร์โทร" />
      </b-form-group>
      <b-form-group label="ที่อยู่">
        <b-form-input v-model="newUser.address" placeholder="กรอกที่อยู่" />
      </b-form-group>
      <b-button @click="saveUser" variant="primary" class="me-2">
        {{ editIndex !== null ? 'อัพเดท' : 'เพิ่ม' }}
      </b-button>
      <b-button @click="cancelForm" variant="secondary">
        ยกเลิก
      </b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  props: {
    editIndex: {
      type: Number,
      required: false,
      default: null,
    },
    userData: {
      type: Object,
      required: false,
      default: () => ({ name: '', email: '',phone: '',address: ''}),
    },
  },
  data() {
    return {
      newUser: { ...this.userData },
    };
  },
  watch: {
    userData(newVal) {
      this.newUser = { ...newVal };
    },
  },
  methods: {
    saveUser() {
      console.log('ข้อมูลที่บันทึก:', this.newUser);
      this.$emit('save-user', this.newUser);
    },
    cancelForm() {
      console.log('ยกเลิก');
      this.$emit('cancel');
    },
  },
};
</script>
