<template>
  <div class="input">
    <a-input class="text" v-model:value="nameStatus" placeholder="nhap name status" />
    <a-input class="text" v-model:value="level" placeholder="nhap level" />
    <!-- <p>{{log}}</p> -->
  </div>
  <div class="buton">
    <a-button class="editable-add-btn butonAdd" style="margin-top:10px" @click="handleAdd(nameStatus, level)">Add
    </a-button>
    <a-button class="editable-add-btn" style="margin-top:10px" @click="handleUpdate(nameStatus, level, id_Status)">Update
    </a-button>
  </div>
  <p>Danh sach Stutus</p>
  <a-table bordered :data-source="dataSource" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <span>
          <a-button  @click="handlePut(record)" type="primary" shape="circle">
            <template #icon>
              <edit-outlined />
            </template>
          </a-button>
        </span>
      </template>
    </template>
  </a-table>
</template>
<script>
import { computed, defineComponent, reactive, ref, onMounted } from 'vue';
import { CheckOutlined, EditOutlined } from '@ant-design/icons-vue';
import { useStoreStatus } from '../../reducer/statusReducer'
import { getDataStatus, addDataStatus, updateDataStatus } from '../../saga/itemSaga'
import{useMenu} from'../../stores/history';

export default defineComponent({
  components: {
    CheckOutlined,
    EditOutlined,
  },
  setup() {
    useMenu().onSelectedKeys(['status'])
    const listStatus = useStoreStatus()
    onMounted(() => { getDataStatus() })
    const nameStatus = ref('')
    const level = ref('')
    const id_Status = ref('')
    const columns = [{
      title: 'STT',
      dataIndex: 'key',
      width: '30%',
    }, {
      title: 'nameStatus',
      dataIndex: 'nameStatus',
    }, {
      title: 'level',
      dataIndex: 'level',
    }, {
      title: 'operation',
      dataIndex: 'operation',
    }];
   const dataSource=computed(()=>listStatus.listItem.map((item,key)=>({
    key:key+1,
    id_Status:item.id_Status,
    nameStatus:item.nameStatus,
    level:item.level
   })))
    const count = computed(() => dataSource.value.length + 1);
    const editableData = reactive({});
    return {
      columns,
      dataSource,
      editableData,
      count,
      listStatus,
      nameStatus,
      level,
      id_Status, 
    };
  },
  methods: {
    handleAdd(nameStatus, level) {
      addDataStatus({ nameStatus: nameStatus, level: level })

    },
    handlePut(record) {
      this.nameStatus = record.nameStatus, this.level = record.level, this.id_Status = record.id_Status
    },
    handleUpdate(nameStatus, level, id_Status) {
      updateDataStatus({ nameStatus: nameStatus, level: level, id_Status: id_Status })
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

p {
  text-align: center;

}

.text {
  width: 300px !important;
  border-radius: 15px;
}
</style>