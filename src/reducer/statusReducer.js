import {defineStore} from 'pinia'
import {itemTypes} from '../constants/actionsType/index'
const DEFAULT_STATE = {
    listItem: [],
    isFetching: false,
    error: false,
    messageError: null,
    type: ''    
}
export const useStoreStatus = defineStore ({
    id:'item',
    state: () => DEFAULT_STATE,
    getters: {
        items: (state) =>
        state.listItem.reduce((items, item) => {
            items.push({ name: item})
        return items
        }, []),
    },
    actions: {
        getStatusRequest(){
            itemTypes.GET_STATUS_REQUEST
            this.isFetching = true
        },
        getStatusSuccess(payload){
            this.listItem = payload.data,
            itemTypes.GET_STATUS_SUCCESS,
            this.isFetching = false
        },
        getStatusFailure(){
            itemTypes.GET_STATUS_FAILURE
        },
        addStatusRequest(){
            itemTypes.ADD_STATUS_REQUEST
            this.isFetching = true
        },
        addStatusSuccess(){
            itemTypes.ADD_STATUS_SUCCESS,
            this.isFetching = false
        },
        addStatusFailure(){
            itemTypes.ADD_STATUS_FAILURE
        },
        updateStatusRequest(){
            itemTypes.UPDATE_STATUS_REQUEST
            this.isFetching = true
        },
        updateStatusSuccess(){
            itemTypes.UPDATE_STATUS_SUCCESS
            this.isFetching = false
        },
        upadteStatusFailure(){
            itemTypes.UPDATE_STATUS_FAILURE
        },
    },
})
