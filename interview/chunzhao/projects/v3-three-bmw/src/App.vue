<template>
  <div>
    <div class="container" ref="containerRef">
    </div>
    <div class="home">
      <div class="content">
        <div class="words">选择车身颜色</div>
        <div class="select">
          <div 
            class="select-item"
            v-for="(item, index) in colors"
            :key="index"
            @click="selectColor(item.color)"
          >
            <div class="select-item-color" :style="{background:item.color}"></div>
            <div class="select-item-color-name">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

// 渲染器
// html5 canvas 画布 2d/3d  
const renderer = new THREE.WebGLRenderer({
  antialias: true,
}); 
renderer.setSize(
  window.innerWidth * 0.8, 
  window.innerHeight * 0.8
);
// 场景
const scene = new THREE.Scene();
// 相机
const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const render = () => {
  renderer.render(scene, camera);
  // 显示的刷新频率 60HZ
  requestAnimationFrame(render);
}

// ref 响应式状态（简单类型）、绑定DOM 元素
// three.js canvas 挂载点
const containerRef = ref(null) // 响应式DOM 元素
onMounted(() => {
  containerRef.value.appendChild(renderer.domElement);
  renderer.setClearColor("#000");
  scene.background = new THREE.Color('#fff');
  scene.environment = new THREE.Color('#fff');
  render();
  // 物体？
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("../../public/roadSter/draco/gltf/");
  loader.setDRACOLoader(dracoLoader);

  loader.load("../../public/roadSter/model/bmw01.glb", gltf => {
    const bmw = gltf.scene;
    scene.add(bmw);
  })

})

// 车颜色
let colors = [
  {
    name: "冷光银",
    color: "#424449"
  },
  {
    name: "经典黑",
    color: "black"
  },
  {
    name: "深海蓝",
    color: "#000f4a"
  },
  {
    name: "中国红",
    color: "#bd050f"
  },
  {
    name: "珍珠白",
    color: "white"
  }
];

const  selectColor = color => {

}

// onMounted(() => {
//   console.log(containerRef.value);
// })

</script>

<style lang="stylus" scoped>
.home {
  display: flex;
  .content-box {
    position: relative;
    // border: 1px solid #e8eaed;
  }
  .content {
    margin: 10px auto;

    .words {
      font-size: 20px;
      margin: 20px;
    }
  }
  .select {
    display: flex;
  }
  .select-item {
    margin: 5px;
    cursor: pointer;
  }
  .select-item-color {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50px;
    margin-bottom: 10px;
  }
  .select-item-color-name {
    font-size: 14px;
  }
}
</style>