import  Helpers from '../util/helpers/index';
import ApiScheme from './@scheme'


export const itemApi = {
    getStatus: Helpers.createApi(ApiScheme.STATUS.GET),
    addStatus:Helpers.createApi(ApiScheme.STATUS.ADD),
    updateStatus: Helpers.createApi(ApiScheme.STATUS.UPDATE),
    deleteStatus: Helpers.createApi(ApiScheme.STATUS.DELETE),
    searchStatus: Helpers.createApi(ApiScheme.STATUS.SEARCH),
    
}
export const userApi={
    getUser: Helpers.createApi(ApiScheme.USER.GET),
    addUser: Helpers.createApi(ApiScheme.USER.ADD),
    updateUser: Helpers.createApi(ApiScheme.USER.UPDATE),
    deleteUser: Helpers.createApi(ApiScheme.USER.DELETE),
    getUserHr:Helpers.createApi(ApiScheme.USER.GET_HR),
    updateUserHr: Helpers.createApi(ApiScheme.USER.UPDATE_HR)
}
