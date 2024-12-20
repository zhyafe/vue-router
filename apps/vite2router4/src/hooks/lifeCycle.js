import { onMounted, onUnmounted } from "vue";

function lifeCycleLog(str) {
  onMounted(() => {
    console.log(str + " onMounted");
  });
  onUnmounted(() => {
    console.log(str + " onUnmounted");
  });
}

export default lifeCycleLog;
