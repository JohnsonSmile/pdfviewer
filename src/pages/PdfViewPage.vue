<template>
  <n-card title="出库单" style="margin-bottom: 16px">
    <n-tabs type="line" animated>
      <n-tab-pane v-for="pdf in pdfs" :name="pdf.title + pdf.id" :tab="pdf.title" display-directive="show:lazy">
        <PdfView :src="pdf.url"/>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup>
  import { NTabPane, NTabs, NCard } from 'naive-ui'
import PdfView from '../components/PdfView.vue';

const pdfs = [
    {
      id: 1,
      title: 'apePDF',
      url: '/pdfs/white-paper-cn.pdf'
    },
    {
      id: 2,
      title: '珠宝',
      url: '/alipdfs/NSS220710034.pdf'
    },
    {
      id: 3,
      title: 'apePDF',
      url: '/pdfs/white-paper-cn.pdf'
    },
]

</script>

<style lang="scss" scoped>

</style>