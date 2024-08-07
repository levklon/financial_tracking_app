import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/app/';

export const getTransactions = async () => {
    try {
        const response = await axios.get(`${API_URL}transactions/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching transactions:", error);
        alert("Failed to load transactions");
        throw error;
    }
};

export const createTransaction = async (transaction) => {
    try {
        const response = await axios.post(`${API_URL}transactions/`, transaction);
        return response.data;
    } catch (error) {
        console.error("Error creating transaction:", error);
        alert("Failed to create transaction");
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}categories/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        alert("Failed to load categories");
        throw error;
    }
};

export const createCategory = async (category) => {
    try {
        const response = await axios.post(`${API_URL}categories/`, category);
        return response.data;
    } catch (error) {
        console.error("Error creating category:", error);
        alert("Failed to create category");
        throw error;
    }
};
