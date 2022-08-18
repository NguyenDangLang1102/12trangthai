import {defineStore} from 'pinia'
import {itemTypes} from '../constants/actionsType/index'
const DEFAULT_STATE = {
    listUser: [],
    isFetching: false,
    error: false,
    messageError: null,
    type: ''    
}
export const useStoreUser = defineStore ({
    id:'user',
    state: () => DEFAULT_STATE,
    getters: {
        items: (state) =>
        state.listItem.reduce((items, item) => {
            items.push({ name: item})
        return items
        }, []),
    },
    actions: {
        getUserRequest(){
            itemTypes.GET_USER_REQUEST
            this.isFetching = true
        },
        getUserSuccess(payload){
            this.listUser = payload.data,
            itemTypes.GET_USER_SUCCESS,
            this.isFetching = false
        },
        getUserFailure(){
            itemTypes.GET_STATUS_FAILURE
        },
        addUserRequest(){
            itemTypes.ADD_USER_REQUEST,
            this.isFetching = true
        },
        addUserSuccess(){
            itemTypes.ADD_USER_SUCCESS,
            this.isFetching = false
        },
        addUserFailure(){
            itemTypes.ADD_USER_FAILURE
        },
        updateUserRequest(){
            itemTypes.UPDATE_USER_REQUEST
            this.isFetching = true
        },
        updateUserSuccess(){
            itemTypes.UPDATE_USER_SUCCESS
            this.isFetching = false
        },
        updateUserFailure(){
            itemTypes.UPDATE_USER_FAILURE
        },
        deleteUserRequest(){
            itemTypes.DELETE_USER_REQUEST
            this.isFetching = true
        },
        deleteUserSuccess(){
            itemTypes.DELETE_STATUS_SUCCESS
            this.isFetching = false
        },
        deleteUserFailure(){
            itemTypes.DELETE_STATUS_FAILURE
        },
    },
})
