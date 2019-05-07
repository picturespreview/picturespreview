<template>
    <div id="allPage">
        <div class="headArea">
            <!--      <span>XX商城</span>-->
            <span>欢迎登陆</span>
        </div>
        <div class="middleArea">
            <div
                    style="width:300px;;float:right;background-color:#fefefe;border:1px solid lightgray;padding:10px 10px 20px 10px"
            >
                <div style="height:40px;text-align:center;font-size:20px;line-height:40px">登录</div>
                <el-input placeholder v-model="account" style="width:260px;margin-top:10px">
                    <template slot="prepend">账号</template>
                </el-input>
                <el-input v-model="password" show-password style="width:260px;margin-top:10px">
                    <template slot="prepend">密码</template>
                </el-input>
                <el-button type="success" style="margin-top:20px" @click="userLauch()">确认</el-button>
                <el-button type="info" style="margin-top:20px" @click="resAccountInfo()">取消</el-button>
            </div>

            <form v-on:submit.prevent="onSubmit">
                <input type="submit"/>
            </form>

            <template v-if="loginType">
                <label>Username</label>
                <input placeholder="Enter your username"  v-model="userName">
            </template>
            <template v-else>
                <label>Email</label>
                <input placeholder="Enter your email address" v-model="userEmail">
            </template>
            <button @click="loginType=!loginType">change</button>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header.vue";
    import axios from "axios";

    export default {
        name: "Asider",
        data() {
            return {
                account: "",
                password: "",
                // userData: ""
                loginType: true,
                userName: '',
                userEmail: "",

            };
        },
        created() {
        },
        mounted: function () {
            // 生命周期
            // this.$http.get("static/data/data.json").then(res => {
            //   if(res){
            //     this.userData=res;
            //   }
            // });
        },
        watch: {
            userName: function (newVal, oldVal) {
                console.log(newVal);
            },
            userEmail: function (newVal, oldVal) {
                console.log(newVal);
            },
        },
            methods: {
                onSubmit:function(){
                  console.log(1111111)
                },
                userLauch: function () {
                    // let _this = this;
                    // axios.get("static/data/data.json").then(res => {
                    //   if (
                    //     this.account == res.data.name &&
                    //     this.password == res.data.password
                    //   ) {
                    //     let data = res;
                    //     this.$router.push({ name: "homePage", params: { data: data } });
                    //   }
                    // });
                    this.$router.push({name: "tableShow", params: ''});
                }
            },
            components: {}
        };
</script>

<style>
    #allPage {
        margin: 0;
        padding: 0;
        width: 100%;
        width: 100vw;
        height: 100%;
    }

    .headArea {
        margin: 0;
        width: 100%;
        height: 80px;
        background-color: #e7d8d5;
    }

    .headArea span {
        font-size: 20px;
        letter-spacing: 10px;
        line-height: 60px;
    }

    .middleArea {
        background: url("../static/img/backgroundAll.jpg") no-repeat;
        background-size: cover;
        width: 100%;
        height: calc(100vh - 80px);
    }
</style>
