<template>
  <svg 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="width"
    :height="height"
	  viewBox="0 0 1024 1024">
  <g :fill="color">
    <path d="M874,150C674.1-50,349.9-50,150,150S-50,674.1,150,874S674.1,1074,874,874S1074,349.9,874,150z M738.2,647.8
	c24.9,24.9,24.9,65.6,0,90.5l0,0c-24.9,24.9-65.6,24.9-90.5,0L512,602.5L376.2,738.3c-24.9,24.9-65.6,24.9-90.5,0l0,0
	c-24.9-24.9-24.9-65.6,0-90.5L421.5,512L285.7,376.3c-24.9-24.9-24.9-65.6,0-90.5l0,0c24.9-24.9,65.6-24.9,90.5,0L512,421.5
	l135.7-135.7c24.9-24.9,65.6-24.9,90.5,0l0,0c24.9,24.9,24.9,65.6,0,90.5L602.5,512L738.2,647.8z"/>
  </g>
</svg>
</template>

<script>
export default {
  name: 'SnIconClose',
  componentName: 'SnIconClose',
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
