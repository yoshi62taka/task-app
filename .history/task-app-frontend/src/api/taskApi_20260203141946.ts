import axios from "axios";
import { Task } from '../types/Task';

const API_BASE = "http://localhost:8080";

export const getTasks = () => axios.get<Task[]>(`${API_BASE}/tasks`);
export const createTask = (task: { title: string }) => axios.post(`${API_BASE}/tasks`, task);
export const deleteTask = (id: number) => axios.delete(`${API_BASE}/tasks/${id}`);