import { useStoreStatus } from "../reducer/statusReducer";
import { itemApi } from "../api";

async function getDataStatus() {
  const actions = useStoreStatus();
  await actions.getStatusRequest();
  try {
    let res = await itemApi.getStatus();
    console.log(res,'res saga')
    var data = res;
    await actions.getStatusSuccess(data);
  } catch (error) {
    await actions.getStatusFailure(error);
  }
}
async function addDataStatus(payload) {
  const actions = useStoreStatus();
  await actions.addStatusRequest();
  try {
    const res= await itemApi.addStatus(payload);
    if(res.message){
      alert(res.message);
    }
    await actions.addStatusSuccess();
    await getDataStatus();
  } catch (error) {
    await actions.addStatusFailure(error);
  }
}
async function updateDataStatus(payload) {
  const actions = useStoreStatus();
  await actions.updateStatusRequest();
  try {
    const res=  await itemApi.updateStatus(payload,{id_Status:payload.id_Status},null);
    if(res.message){
      alert(res.message);
    }
    await actions.updateStatusSuccess();
    await getDataStatus();
  } catch (error) {
    await actions.updateDataStatus(error);
  }
}


export { getDataStatus ,addDataStatus,updateDataStatus};