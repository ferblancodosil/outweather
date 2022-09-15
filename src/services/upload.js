import axios from 'axios'

export const uploadData = async ({file} = {}) => {
    if (!file) throw new Error('Not found file to upload')
    try {
        const FormData = require('form-data');
        const form = new FormData();
        form.append('file', file);

        await axios.post('http://localhost:8080/upload', form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })

    } catch(e) {
        throw new Error(e)
    }
}