<template>
  <div class="search">
    <Input v-model:value="pattern">
      <template #addonBefore>Search:</template>
    </Input>
  </div>
  <div v-if="loading">Loading books...</div>
  <div v-else>
    <h2>Books:</h2>
    <ul v-for="book in books" :key="book.id">
      <li>
        [ID]: {{ book.id }}, [Title]: {{ book.title }}, [Rating]:
        {{ book.rating }}
        <Button type="primary" @click="activeBook = book.id">Edit Book</Button>
      </li>
    </ul>
    <EditBook
      v-if="!!activeBook"
      :bookId="activeBook"
      @onEditDone="onEditDone"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { Button, Input } from "ant-design-vue";
import EditBook from "./components/EditBook.vue";
import useBooksQuery from "./composables/useBooksQuery";

export default {
  name: "App",
  components: { EditBook, Input, Button },
  setup() {
    const pattern = ref("");
    const activeBook = ref(null);

    const { books, loading } = useBooksQuery(
      computed(() => pattern.value),
      500
    );

    const onEditDone = () => {
      activeBook.value = null;
    };

    return { books, activeBook, loading, pattern, onEditDone };
  },
};
</script>
