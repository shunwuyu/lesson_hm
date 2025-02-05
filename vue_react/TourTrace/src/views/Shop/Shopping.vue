<template>
  <div class="shopping">
    <div class="fixed top-0 left-0 w-full h-[35rem] -z-10 transform -translate-y-0 bg-cover bg-center overflow-hidden"
     style="background-image: url('https://img2.baidu.com/it/u=3569028837,3948269640&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067');">
    </div>
    <header
      class="search flex items-center text-sm mt-4 mx-4 bg-gray-200 rounded-full shadow-md"
    >
      <div class="place font-bold text-lg font-serif">
        <div
          @click="showPicker = true"
          class="flex items-center w-24 justify-center"
        >
          <span class="place">{{ fieldValue }}</span>
          <van-icon name="arrow-down" />
        </div>
        <van-popup v-model:show="showPicker" round position="bottom">
          <van-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </div>
      <van-search
        v-model="searchField"
        placeholder="商品/关键字"
        clearable
        shape="round"
        class="w-full rounded-full bg-opacity-50"
      >
      </van-search>
    </header>
    <main class="menu">
      <header
        class="min-h-18 rounded-2xl p-2 shadow-md mx-4 my-4 border bg-white bg-opacity-80"
      >
        <section class="topbar flex justify-around my-[0.5rem]">
          <div
            class="topbar-item flex flex-col items-center"
            v-for="item in topBarState"
            :key="item.title"
          >
            <div class="topbar-item__icon">
              <van-icon :name="item.icon" size="2rem" />
            </div>
            <div class="topbar-item__text text-xs font-bold">
              {{ item.title }}
            </div>
          </div>
        </section>
      </header>
      
    </main>
  </div>

    
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
const showPicker = ref(false);
import { useShopStore } from '../../store/shopStore';

const shopStore = useShopStore();
// 解构出来会丢失响应能力 
const { topBarState, recommendItemState } = toRefs(shopStore);

const columns = [
  { text: "北京", value: "1" },
  { text: "杭州", value: "2" },
  { text: "厦门", value: "3" },
];
const fieldValue = ref(columns[0].text);

const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].text;
  console.log(selectedOptions);  
};

const searchField = ref('')
</script>

<style scoped>

</style>