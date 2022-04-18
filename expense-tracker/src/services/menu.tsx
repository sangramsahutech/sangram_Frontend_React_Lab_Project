import axios from 'axios';
import IDataList from '../models/IDataList';

// function to get items from the backend
const getDataFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:3000/items`).then(respone => respone.data)
};

const pushDataFromUser = (newpurchase : Omit<IDataList, 'id'>) => {
    return axios.post<IDataList>(
        `http://localhost:3000/items`,
        newpurchase,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(respone => respone.data)
};

export {
    getDataFromServer,
    pushDataFromUser
};