<template>
  <Modal>
    <template #content>Modal content here</template>
  </Modal>
</template>

<script>
import Modal from "../shared/Modal.vue";

export default {
  name: "EditBook",
  components: { Modal },
};
</script>
