export default class ListAPI {
    static async save(task) {
        localStorage.setItem("task-list", JSON.stringify(task));
    }
    static async load() {
        return JSON.parse(localStorage.getItem("task-list") || "[]");
    }
}