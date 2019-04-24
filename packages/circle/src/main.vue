<template>
  <svg 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
	  viewBox="0 0 1024 1024">
  <g :fill="color">
    <path d="M512,0C229.2,0,0,229.2,0,512s229.2,512,512,512s512-229.2,512-512S794.8,0,512,0z M512,959.2C265,959.2,64.8,759,64.8,512
      S265,64.8,512,64.8S959.2,265,959.2,512S759,959.2,512,959.2z"/>
    <circle cx="512" cy="512" r="192"/>
  </g>
</svg>
</template>

<script>
export default {
  name: 'SnIconCircle',
  componentName: 'SnIconCircle',
  props: {
    width: {
      type: [Number, String],
      default: 16
    },
    height: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
