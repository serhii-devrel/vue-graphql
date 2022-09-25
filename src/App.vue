<template>
  Search: <input v-model="pattern" />
  <div v-if="loading">Loading books...</div>
  <div v-else>
    <h2>Books:</h2>
    <ul v-for="book in books" :key="book.id">
      <li>
        [ID]: {{ book.id }}, [Title]: {{ book.title }}, [Rating]:
        {{ book.rating }}
        <button @click="editBook = book.id">Edit Book</button>
      </li>
    </ul>
    <template v-if="editBook">
      <EditBook />
    </template>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import EditBook from "./components/EditBook.vue";
import useBooksQuery from "./composables/useBooksQuery";
// import useBookUpdateQuery from "./composables/useBookUpdateQuery";

export default {
  name: "App",
  components: { EditBook },
  setup() {
    const pattern = ref("");
    const editBook = ref(null);

    const { books, loading } = useBooksQuery(
      computed(() => pattern.value),
      500
    );

    return { books, editBook, loading, pattern };
  },
};
</script>
