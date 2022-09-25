<template>
  <div v-if="result">
    <p v-for="book in result.allBooks" :key="book.title">
      {{ book.title }}
    </p>
  </div>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import ALL_BOOKS_QUERY from "./graphql/allBooks.query.gql";

export default {
  name: "App",
  setup() {
    const { result } = useQuery(ALL_BOOKS_QUERY);
    return { result };
  },
};
</script>
