
<script setup lang="ts">
import type IBook from '@/intefaces/IBook.js';
import { ref } from 'vue';

defineProps<{
  book: IBook;
}>();

// State to track whether the row is expanded
const isExpanded = ref(false);

// Toggle function to expand/collapse the row
function toggleDetails() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <tr @click="toggleDetails" :class="{ expanded: isExpanded }">
    <td style="">
      <div class="row">
        <img :src="book.cover" style="max-width: 150px;max-width: 100px;">
        <div class=" book-title" style="min-width: 300px;">
          <div>{{ book.title }}</div>
          <span class="book-author">{{ book.author }}</span>
        </div>
      </div>
    </td>
    <td class="centered">{{ book.published }}</td>
    <td class="centered">{{ book.rating }}/10</td>
    <td class="centered" style="min-width: 100px;">
      <div v-for="link in book.links" :key="link.provider">
        <a  target="_blank" :href="`//${link.url}`">{{ link.provider }}</a>
      </div>
    </td>
  </tr>
  
  <!-- trick to keep same background colors accoring to even/odd rows -->
  <tr v-if="isExpanded">
  </tr>
  <!-- Expanded Details Row -->
  <tr v-if="isExpanded" class="expanded-details">
    <td colspan="4" v-html="book.description" class="expanded-details" />
  </tr>
</template>


<style scoped>
.row {
  display: flex;
  flex-direction: row;
  cursor: pointer; /* Change cursor to pointer to indicate clickability */
}

.book-title {
  padding-left: var(--padding);
  font-weight: 600;
}

.book-author {
  color: var(--text-color);
}

.centered {
  text-align: center;
}

a {
  color: var(--link-color);
  text-decoration: none;
}

.expanded-details {
  max-width: 300px;
  background-color: #f9f9f9; /* Optional: highlight expanded details row */
  padding: 10px; /* Optional: some padding for better visibility */
}
</style>
