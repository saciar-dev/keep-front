import { defineStore } from 'pinia';
import { ref } from 'vue';
import {useI18n} from "vue-i18n";

export const useQuestionStore = defineStore('questions', () => {

  const allQuestions = ref([]);
  const randomQuestion = ref([]);
  const isLoading = ref(false);
  let jsonLanguaje = null;

  const i18n = useI18n();

  const readQuestion = async() => {
    if(i18n.locale.value == 'es'){
      jsonLanguaje =  await import('../mock/dataES.json');
    }
    else if(i18n.locale.value == 'pt'){
      jsonLanguaje =  await import('../mock/dataPT.json');
    }
    allQuestions.value = jsonLanguaje.default;
    // for (let index = 0; index < 5; index++) {
    //   randomQuestion.value[index] = allQuestions.value[Math.trunc(Math.random() * allQuestions.value.length)]
    // }
    randomQuestion.value = allQuestions.value.sort(function() {return Math.random() - 0.5}).slice(0,5);

  }

  const clearRandomQuestions = ()=>{
    randomQuestion.value = [];
  }

  return {
    //data
    isLoading,
    randomQuestion,
    //actions
    readQuestion,
    allQuestions,
    clearRandomQuestions
  }

});
