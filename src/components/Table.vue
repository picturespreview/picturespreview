<template>
    <div style="width:100%">
        <el-table :data="tableData" border style="width: 100%" class="dataTable">
            <col name="gutter" style="display:none!important">
            <el-table-column label="序号" type="index" align="center" width="60"></el-table-column>
            <el-table-column
                v-for="item in columnData"
                :key="item.key"
                :label="item.name"
                :prop="item.key"
                :width="item.width"
            ></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row,'详情')">详情</el-button>
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row,'编辑')">编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog :title="dialogFormTitle" :visible.sync="dialogFormVisible" width="650px">
            <el-form>
                <el-form-item
                    v-for="item in columnData"
                    :key="item.key"
                    :label="item.name"
                    label-width="80px"
                    style="width:300px;float:left"
                >
                    <el-date-picker
                        v-if="item.key=='date'"
                        v-model="dataByTable.row[item.key]"
                        value-format="yyyy-MM-dd"
                        style="width:220px;float:left"
                    ></el-date-picker>
                    <el-input
                        v-else
                        v-model="dataByTable.row[item.key]"
                        style="width:220px;float:left"
                        :disabled="(dialogFormTitle=='详情')?true:false"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" style="text-align:center">
                <el-button @click="closeDialogForm()">取 消</el-button>
                <el-button type="primary" @click="confirmDialogForm()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import tools from "../tools/tools";
export default {
    name: "Table",
    props: {
        tableData: {
            type: Array,
            default: function() {
                return [];
            }
        },
        columnData: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data() {
        return {
            dataByTable: {
                index: "",
                row: ""
            },
            //弹框显示切换
            dialogFormVisible: false,
            dialogFormTitle: ""
        };
    },
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {
        //编辑，详情
        handleEdit(index, row, title) {
            this.dialogFormVisible = true;
            this.dataByTable.row = row;
            this.dataByTable.index = index;
            this.dialogFormTitle = title;
        },
        //删除
        handleDelete(index, row) {
            tools.deleteConfirm(() => {
                this.tableData.splice(index, 1);
            });
        },
        // 关闭弹框
        closeDialogForm() {
            this.dialogFormVisible = false;
        },
        // 确认弹框
        confirmDialogForm() {
            this.dialogFormVisible = false;
            if (this.dialogFormTitle == "编辑") {
                this.dataFromTable(this.dataByTable);
            }
        },
        //父组件传值
        dataFromTable(val) {
            this.$emit("dataFromTable", val);
        }
    }
};
</script>
<style scoped>
.formStyle {
    width: 400px;
    height: 400px;
    background-color: white;
    padding: 20px 10px 20px 10px;
}
/* 表格错位问题 */
</style>