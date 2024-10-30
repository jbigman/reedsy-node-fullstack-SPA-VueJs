<script setup lang="ts">
import BookItem from './BookItem.vue'
import books from '../books.json'
import { computed, onMounted, ref } from 'vue';
import type IBook from '@/intefaces/IBook.js';

// Pagination state
const itemsPerPage = 5;
const currentPage = ref(1);

// Total number of pages
const totalPages = computed(() => Math.ceil(books.length / itemsPerPage));

// Computed property to get the current paginated books
const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return books.slice(start, end);
});

// Functions to navigate pages
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

/**
* If books were fetched over HTTP, it would look like that:
* 
const books2 = ref<IBook[]>([]); // Array to hold fetched books
// Fetch books from an API on component mount
async function fetchBooks() {
try {
const response = await fetch('https://example.com/books');
if (!response.ok) {throw new Error('Network response was not ok');}
books2.value = await response.json(); // Assume API returns array of books
} catch (error) {
console.error('Failed to fetch books:', error);
}
}

// Call fetchBooks when the component mounts
onMounted(fetchBooks);

// Functions to navigate pages
const nextPage = () => {
// fetch `https://example.com/books?page=${currentPage.value +1}
}

const prevPage = () => {
if (currentPage.value > 1) {
// fetch `https://example.com/books?page=${currentPage.value -1}
}
}
*/

</script>

<template>
  <div class="book-list">
    <h1>Most popular Books of all time</h1>
    <table cellspacing="0" style="width: 100%;">
      <thead>
        <tr>
          <th>TITLE</th>
          <th style="width: 100%;">PUBLISHED</th>
          <th>RATING</th>
          <th>BUY ON</th>
        </tr>
      </thead>
      <tbody>
        <BookItem v-for="book in paginatedBooks" :book="book" />
      </tbody>
    </table>
    <!-- Pagination Controls -->
    <div class="pagination">
      <span class="button" @click="prevPage" :disabled="currentPage === 1">{{ '<' }}</span>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <span class="button" @click="nextPage" :disabled="currentPage === totalPages">{{ '>' }}</span>
    </div>
  </div>
</template>

<style lang="scss">

h1 {
  margin-left: var(--padding);
}

.book-list {
  background-color: white;
  margin: calc(var(--padding) * 2);
  padding: calc(var(--padding) / 2);
  
  display: flex;
  flex-direction: column;
  gap: var(--padding);
  
  
  th {
    text-align: left;
    padding-left: var(--padding);
    color: var(--text-color);
  }
  
  tr, td {
    padding: var(--padding)
  }
  
  tbody {
    tr:nth-child(odd) {
      background-color: var(--color-background);
    }
  }
  
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.button {
  color: var(--text-color);
  width: 25px;
  height: 25px;
  margin: 0 1em;
  text-align: center;
  border-radius: 50%;
  
  &:hover {
    background-color: var(--color-background);
    cursor: pointer;
  }
}
</style>