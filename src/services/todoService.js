import axios from 'axios'
import {utilService} from './utilService'
const BASE_URL = 'http://localhost:3000/board';

export const boardService = {
    getBoards,
    getBoardById,
    removeBoard,
    addBoard,
    updateBoard,
    getEmptyBoard
}

async function getBoards(filterBy = null) {
    const res = await axios.get(BASE_URL)
    return res.data;
}

async function getBoardById(boardId) {
    const res = await axios.get(`${BASE_URL}/${boardId}`)
    return res.data;
}

async function removeBoard(boardId) {
    return await axios.delete(`${BASE_URL}/${boardId}`)
}

async function addBoard(board) {
    const res = await axios.post(`${BASE_URL}/${board._id}`, board);
    return res.data;
}

async function updateBoard(board) {
    const res = await axios.put(`${BASE_URL}/${board._id}`, board)
    return res.data;
}

function getEmptyBoard() {
    return {
        _id: utilService.makeId(),
        title: '',
        createdAt: Date.now(),
        createdBy: {},
        style:{},
        groups:[]
    }
}