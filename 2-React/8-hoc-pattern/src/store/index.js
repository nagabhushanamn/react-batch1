
// like redux-store
const store = {
    getTopics() {
        return ["java", "js", "scala", 'python']
    },
    getComments() {
        return [
            "java is best",
            "js is good",
            "js is dynamic"
        ]
    }
}
export default store;