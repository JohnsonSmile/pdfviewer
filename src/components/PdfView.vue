<template>
  <div>
    <pdf :src="src"
      :page="1"
      @num-pages="onNumPages"
      /> 
    <pdf v-if="totalPage > 1" v-for="i in (totalPage - 1)" :src="src"
      :page="i+1"
      @num-pages="onNumPages"
      /> 
  </div>
</template>

<script setup>
  import pdf from '@jbtje/vite-vue3pdf'
  import { computed } from '@vue/reactivity';
  import { onMounted, ref } from 'vue';

  const props = defineProps({
    src: ''
  })

  let currentPage = ref(1);
  let totalPage = ref(0);

  //处理 url 返回
  const src = computed(() => {
    return pdf.createLoadingTask({
        url: props.src,
        //引入pdf.js字体，templ
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.5.207/cmaps/',
        cMapPacked: true
    })
  })

  const onNumPages = (pageCount) => {
    console.log(pageCount)
    if (pageCount > 0) {
      totalPage.value = pageCount
    }
  }

  onMounted(() => {
    
  })
  
</script>

<style lang="scss" scoped>

</style>