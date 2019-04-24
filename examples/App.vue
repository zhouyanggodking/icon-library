<template>
  <div>
    <h1>Icon library</h1>
    <sn-icon-circle width="100" height="100" :color="color"></sn-icon-circle>
    <sn-icon-close width="100" height="100" :color="color"></sn-icon-close>
  </div>
</template>

<script>

export default {
  data() {
    return {
      color: 'aqua'
    };
  }
}
</script>
