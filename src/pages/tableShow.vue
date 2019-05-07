<template>
    <div>
        <myHeader></myHeader>
        <div style="display:flex">
            <myAsider></myAsider>
            <div class="contentArea">
                <el-input
                    style="float:left;width:160px;margin:10px 0 10px 10px"
                    prefix-icon="el-icon-search"
                    v-model="productName"
                    placeholder="请输入内容"
                    clearable
                ></el-input>
                <el-button style="float:left;margin:10px 0 10px 10px">查询</el-button>
                <el-button style="float:left;margin:10px 0 10px 10px" @click="dialogAddForm()">新增</el-button>
                <myTable
                    :tableData="tableData"
                    :columnData="columnData"
                    v-on:dataFromTable="dataFromTable"
                ></myTable>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100,200,300]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalSize"
                    style="float:right"
                ></el-pagination>
            </div>
        </div>
        <el-dialog title="新增" :visible.sync="dialogFormVisible" width="650px">
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
                        v-model="date"
                        value-format="yyyy-MM-dd"
                        style="width:220px;float:left"
                    ></el-date-picker>
                    <el-input v-else style="width:220px;float:left"></el-input>
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
import Header from "../components/Header";
import Asider from "../components/Asider";
import Table from "../components/Table";
export default {
    name: "homePage",
    data() {
        return {
            isShow: false,
            productName: "",
            currentPage: 1, //当前页
            pageSize: 10, //每页数据条数
            totalSize: 4000, //数据总数
            editData: {},
            date: "",
            dialogFormVisible: false,
            columnData: [
                {
                    name: "日期",
                    key: "date",
                    width: "250"
                },
                {
                    name: "名字",
                    key: "name",
                    width: "150"
                },
                {
                    name: "地址",
                    key: "address",
                    width: ""
                },
                {
                    name: "备注",
                    key: "detail",
                    width: ""
                }
            ],
            tableData: [
                {
                    date: "2016-05-03",
                    name: "蒋困",
                    address: "上海市",
                    detail: "1"
                },
                {
                    date: "2016-05-03",
                    name: "马小虎",
                    address: "上海市",
                    detail: "1"
                },
                {
                    date: "2016-05-03",
                    name: "马小虎",
                    address: "上海市",
                    detail: "1"
                }
            ]
        };
    },
    created() {},
    methods: {
        //监视子组件传递的数值
        dataFromTable: function(val) {
            this.editData = val.row ? val.row : {};
            // this.editIndex = val.index ? val.index : "";
        },
        // 添加
        dialogAddForm() {
            this.dialogFormVisible = true;
        },
        //确定，取消
        closeDialogForm() {
            this.dialogFormVisible = false;
        },
        confirmDialogForm() {
            this.dialogFormVisible = false;
        },
        //分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            console.log(val);
        }
    },
    components: {
        myHeader: Header,
        myAsider: Asider,
        myTable: Table
    }
};
</script>
<style scoped>
.contentArea {
    margin: 5px 0 0 0;
    display: block;
    width: 100%;
    background-color: lightgray;
    height: calc(100vh - 105px);
    overflow-x: hidden;
    overflow-y: scroll;
}
.screenShadow {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: lightblue;
    opacity: 0.7;
    z-index: 500;
}
.outBox {
    position: absolute;
    left: 180px;
    top: 100px;
    width: 400px;
    padding: 20px 10px 10px 10px;
    margin-top: 70px;
    margin-left: calc(50vw - 290px);
    background-color: aliceblue;
    z-index: 600;
}
.dateTitle {
    display: inline-block;
    width: 69px;
    height: 39px;
    line-height: 39px;
    background-color: #f5f7fa;
    color: #909399;
    border: 0.5px solid #dcdfe6;
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    letter-spacing: 0px;
}
.timePicker {
    display: inline-block;
    width: 230px !important;
    border-radius: 0 5px 5px 0 !important;
}
.timePicker .el-input__inner {
    border-radius: 0 5px 5px 0 !important;
}
</style>
