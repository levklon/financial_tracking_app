import React, { useState, useEffect } from 'react';
import { getTransactions, createTransaction } from '../api/api';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
        user: 1,
        category: 1,
        amount: '',
        description: '',
        date: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTransactions();
            setTransactions(result);
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        setNewTransaction({
            ...newTransaction,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTransaction(newTransaction);
        const result = await getTransactions();
        setTransactions(result);
    };

    return (
        <div>
            <h1>Transactions</h1>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.id}>
                        {transaction.description} - {transaction.amount} - {transaction.date}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input name="amount" type="number" placeholder="Amount" value={newTransaction.amount} onChange={handleChange} />
                <input name="description" type="text" placeholder="Description" value={newTransaction.description} onChange={handleChange} />
                <input name="date" type="date" value={newTransaction.date} onChange={handleChange} />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default Transactions;
