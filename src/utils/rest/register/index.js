// --- Register related actions
import axios from 'axios';


// register user 
export const registerUser = (data) => axios.post('someurl', data)
