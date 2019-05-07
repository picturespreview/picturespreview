import {MessageBox,Message} from 'element-ui';
var tools = {
    //消息提示
    deleteConfirm(callback){
        MessageBox.confirm("此操作将永久删除, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnClickModal: true,
            type: "warning",
            center: true
        })
        .then(() => {
            callback();
            Message({
                type: "success",
                message: "删除成功!"
            });
        })
        .catch(() => {
            Message({
                type: "info",
                message: "已取消删除"
            });
        });
    }
}

export default tools