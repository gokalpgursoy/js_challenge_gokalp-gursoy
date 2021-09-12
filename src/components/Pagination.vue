<template>
  <nav class="pagination">
    <ul class="pagination__list" v-if="totalPageCount > 1">
      <li class="pagination__item">
        <button
          class="pagination__link"
          @click="handlePrevPage"
          :disabled="currentPage === 1 || isLoading"
        >
          <BaseIcon icon-name="arrow-left" />
        </button>
      </li>
      <li v-for="(item, i) in paginationItems" :key="i" class="pagination__item">
        <button
          class="pagination__link"
          :class="currentPage === item.pageNumber && 'pagination__link--selected'"
          v-text="item.isNextGroup ? '...' : item.pageNumber"
          @click="handleUpdateCurrentPage(item)"
          :disabled="isLoading"
        ></button>
      </li>
      <li class="pagination__item">
        <button
          class="pagination__link"
          @click="handleNextPage"
          :disabled="currentPage === totalPageCount || isLoading"
        >
          <BaseIcon icon-name="arrow-right" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { actions } from '@/store/methods';

interface PaginationItemModel {
  pageNumber: number;
  isNextGroup: boolean;
}

export default Vue.extend({
  name: 'Pagination',
  data() {
    return {
      groupStart: 1,
    };
  },
  computed: {
    ...mapState(['totalProductCount', 'currentPage', 'isLoading', 'limit']),
    totalPageCount(): number {
      return Math.floor(this.totalProductCount / this.limit);
    },
    paginationItems(): PaginationItemModel[] {
      const paginationItems: PaginationItemModel[] = [];
      let loopCount = 5;
      if (this.totalPageCount < 5) {
        loopCount = this.totalPageCount;
      }
      for (let i = 0; i < loopCount; i += 1) {
        if (i === 4 && i + 5 < this.totalPageCount) {
          i += 5;
        }
        paginationItems.push({
          pageNumber: i + this.groupStart,
          isNextGroup: i === 3,
        });
      }
      return paginationItems;
    },
  },
  methods: {
    handleUpdateCurrentPage(page: PaginationItemModel): void {
      if (page.isNextGroup) {
        this.groupStart += 3;
      }
      this.updateCurrentPage(page.pageNumber);
    },
    handlePrevPage() {
      const prevPageNumber = this.currentPage - 1;
      const isPrevPageExistInPagination = this.paginationItems.some(
        item => item.pageNumber === prevPageNumber,
      );
      if (!isPrevPageExistInPagination) {
        this.groupStart -= 1;
      }
      this.updateCurrentPage(prevPageNumber);
    },
    handleNextPage() {
      const nextPageNumber = this.currentPage + 1;
      const isNextPageExistInPagination = this.paginationItems.some(
        item => item.pageNumber === nextPageNumber,
      );
      if (!isNextPageExistInPagination) {
        this.groupStart += 1;
      }
      this.updateCurrentPage(nextPageNumber);
    },
    updateCurrentPage(pageNumber: number) {
      window.scrollTo(0, 0);
      this.$store.dispatch(actions.UPDATE_PAGE_AND_GET_PRODUCTS, pageNumber);
    },
  },
});
</script>

<style lang="scss" scoped>
.pagination {
  height: 45px;
  margin: 30px auto;
  text-align: center;
  &__list {
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    align-items: flex-end;
  }
  &__item {
    height: 100%;
    width: 45px;
    font-family: 'Lato-Bold', sans-serif;
    font-size: 13px;
    letter-spacing: 1.39px;
    text-align: center;
  }
  &__link {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: $primary;
    &--selected {
      font-weight: bold;
      color: $blue;
    }
  }
}
</style>
