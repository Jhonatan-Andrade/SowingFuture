
import api from "./config";


interface User{
  id: string;
  name: string;
  email: string;
}

export const login = async (email: string, password: string): Promise<{token: string}> => {
  try {
    const response = await api.post<{token: string}>('/user/login', { email, password });
    localStorage.setItem("token", response.data.token);
    await fetchDashboard()
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Login failed");
  }
};

export const signup = async (name: string, email: string, password: string): Promise<{token: string}> => {
  if (!name || !email || !password) throw new Error("Dados incompletos ");
  try {
    const response = await api.post<{token: string}>('/user/signup', { name, email, password });
    localStorage.setItem("token", response.data.token);
    await fetchDashboard()
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Signup failed");
  }
};
export const fetchDashboard = async (): Promise<User | null>=> {
  try {
    const response = await api.get<User>('/user/profile');
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data;
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    localStorage.removeItem("token");
    window.location.href = '/login'; // Redirect to login on failure
    return null;
  }
}
