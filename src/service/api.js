import {md5} from 'js-md5';
import axios from 'axios';

const apiAdress = 'http://api.valantis.store:40000/';

const createHeaders = () => {
    let date = new Date();
    let year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    if (month.length < 2) month = '0' + month;
    let day = String(date.getDate());
    if (day.length < 2) day = '0' + day;

    return {
        'x-auth': md5(`Valantis_${year + month + day}`),
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
};

const defaultPayload = {
    action: 'get_ids',
    params: {'offset': 0},
};

export const getData = async (data = defaultPayload) => {
    try {
        let response = await axios({
            method: 'post',
            url: apiAdress,
            headers: createHeaders(),
            data,
        });
        return response.data.result;
    } catch (e) {
        console.log(e)
        return await getData(data)
    }
};

export const getUniqueIds = (ids) => {
    return [...new Set(ids)];
};

export const cashedApi = async (key, args) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    try {
        const response = await getData(args);
        localStorage.setItem(key, JSON.stringify(response));
        return response;
    } catch (e) {
        console.log(e);
    }
};
