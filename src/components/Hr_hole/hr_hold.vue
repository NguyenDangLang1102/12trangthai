<template>
  <div class="input">
    <a-input class="text" v-model:value="name_User" placeholder="nhap name user" />
    <a-space>
      <a-select ref="select" v-model:value="id_Status" style="width: 120px" @focus="focus" @change="handleChange">
        <a-select-option v-for="(item, key) in listID.$state.listItem" :key="key" :value="item.id_Status">
          {{ item.nameStatus }}</a-select-option>
      </a-select>
    </a-space>
  </div>
  <div class="buton">
    <a-button class="editable-add-btn" style="margin-top:10px" @click="handleUpdate(name_User, id_Status, id_User)">Update
    </a-button>
  </div>
  <p>Danh sach User</p>
  <a-table bordered :data-source="dataSource" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">

        <span>
          <a-button @click="handlePut(record)" type="primary" shape="circle" >
            <template #icon>
              <edit-outlined />
            </template>
          </a-button>
        </span>
      </template>
    </template>
  </a-table>
  <router-view />
</template>
<script>
import { computed, defineComponent, reactive, ref, onMounted } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { useStoreUser } from '../../reducer/userReducer'
import { useStoreStatus } from '../../reducer/statusReducer'
import { getDataUserHr, updateDataUserOne } from '../../saga/userSaga'
import { getDataStatus } from '../../saga/itemSaga'
import{useMenu} from'../../stores/history';

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup() {
    useMenu().onSelectedKeys(['hr'])
    const listUser = useStoreUser()
    const listID = useStoreStatus()
    onMounted(() => { getDataUserHr(), getDataStatus() })
    const nameStatus = ref('')
    const level = ref('')
    const id_User = ref('')
    const name_User = ref('')
    const id_Status = ref('')
    const data = ref([])
    const columns = [{
      title: 'STT',
      dataIndex: 'key',
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
      title: 'operation',
      width: '35%',
      dataIndex: 'operation',
    }];
    const dataSource = computed(() => listUser.listUser.map((item,key)=>({ 
      key:key+1,
      id_User:item.id_User,
      name_User:item.name_User,
      level:item.level
    })))
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
      id_Status,
      data
    };
  },

  methods: {
    handlePut(record) {
      console.log(record, "dai va")
      this.name_User = record.name_User, this.id_Status = record.id_Status, this.id_User = record.id_User
    },
    handleUpdate(name_User, id_Status, id_User) {
      updateDataUserOne({ name_User: name_User, id_Status: id_Status, id_User: id_User })
    }
  },
});
</script>
<style lang="less">
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
.buton {
  display: flex;
  flex-direction: row-reverse;
}
.input {
  display: flex;
  justify-content: space-around;
}
.butonAdd {
  margin-left: 10px;
}
.editable-add-btn {
  margin-bottom: 8px;
}
p 
{
  text-align: center;

}
.text {
  width: 300px !important;
  border-radius: 15px !important;
}
</style>