import * as api from '../api';

// Actions creators
export const getPosts =() =>  async (dispatch) => {
    try {
        //try to fetch all data from api
        const { data } = await api.fetchPosts(); // data == post 
        dispatch({type: 'FETCH_ALL', payload:data}); 
    } catch (error) {
        console.log(error.message);
        
    }

    //const action = { type: 'FETCH_ALL', payload: []}

}
// to fetch posts it's gonna take time, so we use redux-thunk -> ( async (dispatch))