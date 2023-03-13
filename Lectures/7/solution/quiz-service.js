import { getData } from "./fetch.js";
// to implement by HTTP request GET method on "/BirdQuiz.json" resource
export async function getQuiz() {
  // call getData on the resurce /birdQuiz.json
  return getData("/birdQuiz.json");
//   return {
//     questions: [ {questionText:"NOT IMPLEMENTED!"}]
//   };
}