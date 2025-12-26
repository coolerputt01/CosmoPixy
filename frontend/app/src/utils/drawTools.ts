import { ref, watch } from 'vue';

export var tools = ["pencil","eraser","fill"];

export const currentTool = ref(tools[0]);

export function setTool(newTool: string){
    currentTool.value = newTool;
}

watch(currentTool,(tool)=>{
    setTool(tool!);
});