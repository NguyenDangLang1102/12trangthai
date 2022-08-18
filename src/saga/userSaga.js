import { useStoreUser } from "../reducer/userReducer";
import { userApi } from "../api";

async function getDataUser() {
  const actions = useStoreUser();
  await actions.getUserRequest();
  try {
    let res = await userApi.getUser();
    var data = res;
  
    await actions.getUserSuccess(data);
  } catch (error) {
    await actions.getUserFailure(error);
  }
}
async function getDataUserHr() {
  const actions = useStoreUser();
  await actions.getUserRequest();
  try {
    let res = await userApi.getUserHr();
    var data = res;
    await actions.getUserSuccess(data);
  } catch (error) {
    await actions.getUserFailure(error);
  }
}
async function addDataUser(payload) {
  const actions = useStoreUser();
  await actions.addUserRequest();
  try {
    const res= await userApi.addUser(payload);
    if(res.message){
      alert(res.message);
    }
    await actions.addUserSuccess();
    await getDataUser();
  } catch (error) {
    await actions.addUserFailure(error);
  }
}
async function updateDataUser(payload) {
  const actions = useStoreUser();
  await actions.updateUserRequest();
  try {
     await userApi.updateUser(payload,{id_User:payload.id_User},null);
 
    await actions.updateUserSuccess();
    await getDataUser();
  } catch (error) {
    await actions.updateUserFailure(error);
  }
}
async function deleteDataUser(payload) {
  const actions = useStoreUser();
  await actions.deleteUserRequest();
  try {
     await userApi.deleteUser(null,{id_User:payload.id_User},null);
 
    await actions.deleteUserSuccess();
    await getDataUser();
  } catch (error) {
    await actions.deleteUserFailure(error);
  }
}
async function updateDataUserOne(payload) {
  const actions = useStoreUser();
  await actions.updateUserRequest();
  try {
     await userApi.updateUserHr(payload,{id_User:payload.id_User},null);
    await actions.updateUserSuccess();
    await getDataUserHr();
  } catch (error) {
    await actions.updateUserFailure(error);
  }
}


export { getDataUser ,addDataUser,updateDataUser,getDataUserHr,updateDataUserOne,deleteDataUser};