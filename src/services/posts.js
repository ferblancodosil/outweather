import axios from 'axios';

export const getPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
}

export const addPost = async ({ title, body, userId } = {}) => {
    if (!title || !body || !userId) throw new Error('Not found all required params')
    
    await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId }, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
}