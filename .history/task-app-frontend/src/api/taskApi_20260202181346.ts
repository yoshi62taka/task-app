import axios from "axios";

const API_BASE = "http://localhost:8080";

export const getTasks = () => axios.get(`${API_BASE}/tasks`);
export const createTask = (task: { title: string }) => axios.post(`${API_BASE}/tasks`, task);
export const deleteTask = (id: number) => axios.delete(`${API_BASE}/tasks/${id}`);