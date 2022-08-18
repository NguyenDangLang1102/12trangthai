<template>
<div class="input"> 
  <a-input class="text" v-model:value="name_User" placeholder="nhap name user" />
  <a-space>
    <a-select
      ref="select"
      v-model:value="id_Status"
      style="width: 120px"
    >
      <a-select-option v-for="(item,key) in listID.$state.listItem" :key="key" :value="item.id_Status">{{item.nameStatus}}</a-select-option>
    </a-select>
  </a-space>
  </div>
  <div class="buton">
  <a-button class="editable-add-btn butonAdd" style="margin-top:10px" @click="handleAdd(name_User,id_Status)">Add</a-button>
  <a-button class="editable-add-btn" style="margin-top:10px" @click="handleUpdate(name_User,id_Status,id_User)">Update</a-button></div>
  <p>Danh sach User</p>
  <a-table bordered :data-source="listUser.listUser" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template  class="put" v-if="column.dataIndex === 'operation'">

          <span class="btn">
                    <a-button type="primary" shape="circle" :size="size">
                        <template #icon>
                            <delete-outlined />
                        </template>
                    </a-button>

                    <a-button type="primary" shape="circle" :size="size">
                        <template #icon>
                            <edit-outlined />
                        </template>
                    </a-button>
                </span>





        <div class>
        <a  @click="handlePut(record)">
          <a>PUT</a>
        </a>
        </div>
         <div class>
        <a  @click="handleDelete(record.id_User)">
          <a>Delete</a>
        </a>
        </div>
      </template>
    </template>
  </a-table>
  <router-view/>
</template>
<script>
import { computed, defineComponent, reactive, ref,onMounted } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import {useStoreUser} from '../../reducer/userReducer'
import {useStoreStatus} from '../../reducer/statusReducer'
import{getDataUser,addDataUser,updateDataUser,deleteDataUser} from'../../saga/userSaga'
import{getDataStatus} from'../../saga/itemSaga'

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup() {
    const listUser = useStoreUser()
    const listID=useStoreStatus()
    onMounted(() => {getDataUser(),getDataStatus()})
    const nameStatus=ref('')
    const level=ref('')
    const id_User=ref('')
    const name_User=ref('')
    const id_Status=ref('')
    const data=ref([])
    const columns = [{
      title: 'STT',
      dataIndex: 'id_User',
      width: '20%',
    }, {
      title: 'name_User',
      width: '15%',

      dataIndex: 'name_User',
    }, 
    {
      title: 'level',
      width: '15%',
      dataIndex: 'level',
    },
     {
      title: 'Hr_Hole',
      width: '15%',

      dataIndex: 'hr_Hold:',
    },
     {
      title: 'date',
      width: '20%',
      dataIndex: 'updated_At',
    }, 
    {
      title: 'operation',
      width: '35%',
      dataIndex: 'operation',
    }];
    const dataSource = ref(listUser.listUser);
    const count = computed(() => dataSource.value.length + 1);
    const editableData = reactive({});
    return {
      columns,
      dataSource,
      editableData,
      count,
      listUser,
      nameStatus,
      level,
      listID,
      id_User,
      name_User,
      id_Status,data
    };
  },
  methods:{
    handleAdd(name_User,id_Status){
      if(this.name_User.length==0){
        alert("nhap name user")
      }
      else{  
      addDataUser({name_User:name_User,id_Status:id_Status})}
    },
    handlePut(record){
      console.log(record,"record")
      this.name_User=record.name_User,this.id_Status=record.id_Status,this.id_User=record.id_User
    },
    handleUpdate(name_User,id_Status,id_User){
      updateDataUser({name_User:name_User,id_Status:id_Status,id_User:id_User})
    },
    handleDelete(id){
      deleteDataUser({id_User:id})
    }
  },


});
</script>
<style lang="less">

.btn {
    display: flex;
    justify-content: space-around;
}


.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
.buton{
  display: flex;
  flex-direction:row-reverse;
}
.input{
  display: flex;
  justify-content: space-around;
}
.butonAdd{
  margin-left: 10px;
}
.editable-add-btn{
  margin-bottom: 8px;
}
p{
  text-align: center;
  
}
.text{
  width: 300px!important;
  border-radius: 15px !important;
}
.put{
display: flex;
justify-content: space-around;
}
</style>