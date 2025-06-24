<template>
  <div class="flex flex-col h-screen bg-white p-4 rounded-lg shadow-md">
    <!-- 头部 -->
    <div class="song-header mb-4">
      <h1 class="text-xl font-bold">如果有一天我消失在人海</h1>
      <p class="text-gray-600">歌手：影子</p>
    </div>

    <!-- 中间部分，flex-1占满剩余空间 -->
    <div class="song-cover flex-1 flex justify-center items-center mb-4">
      <img src="@/assets/imgs/log.jpg" alt="歌曲封面" class="w-32 h-32 rounded-full" />
    </div>

    <!-- 底部 -->
    <div class="song-controls flex justify-around">
      <button class="prev bg-blue-500 text-white py-2 px-4 rounded">上一首</button>
      <button class="play bg-green-500 text-white py-2 px-4 rounded">播放</button>
      <button class="next bg-red-500 text-white py-2 px-4 rounded">下一首</button>
    </div>
  </div>
</template>
