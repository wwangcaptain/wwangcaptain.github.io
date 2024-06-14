//按钮：联系我们
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    var button = document.getElementById("contact_us");

    // 为按钮添加点击事件监听器
    button.addEventListener('click', function() {
        // 定义点击后的操作
        alert("有任何问题欢迎随时联系我们：E-mail: xxxxxxxxxxxxxx   电话：xxx xxxx xxxx");
    });
});
//按钮：返回顶部
document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('backToTop');

    // 当用户滚动页面时执行
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // 点击按钮时返回顶部
    backToTopButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // 添加这个属性以实现平滑滚动
        });
    };
});
//按钮：了解更多
document.addEventListener('DOMContentLoaded', function() {
    var learnMoreBtn = document.getElementById('learnMoreBtn');
    var closeBtn = document.getElementById('closeBtn');
    var content = document.getElementById('additionalContent');

    learnMoreBtn.addEventListener('click', function() {
        content.style.maxHeight = content.scrollHeight + 'px';
        learnMoreBtn.style.display = 'none'; // 隐藏“了解更多”按钮
    });

    closeBtn.addEventListener('click', function() {
        content.style.maxHeight = null;
        learnMoreBtn.style.display = 'block'; // 重新显示“了解更多”按钮
    });
});
//导航栏按钮：用于展开
document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab-button');
    var contents = document.querySelectorAll('.tab-content');
    var defaultOpen = document.getElementById('content1'); // 默认打开的内容区域

    // 默认展开主页内容
    defaultOpen.style.height = defaultOpen.scrollHeight + 'px';

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var targetContent = document.getElementById(targetId);

            // 检查当前内容区域是否已经展开
            if (targetContent.style.height && targetContent.style.height !== '0px') {
                return; // 如果已经展开，则不执行任何操作
            }

            // 遍历所有内容区域
            contents.forEach(function(content) {
                if (content === targetContent) {
                    // 展开选中的内容区域
                    content.style.height = content.scrollHeight + 'px';
                } else {
                    // 收起其他内容区域
                    content.style.height = null;
                }
            });
        });
    });
});

// 留言板功能
document.addEventListener('DOMContentLoaded', function() {
    var messageModal = document.getElementById('messageModal');
    var addMessageBtn = document.getElementById('addMessageBtn');
    var closeModal = document.getElementsByClassName('close')[0];
    var messageForm = document.getElementById('messageForm');
    var messagesDiv = document.querySelector('.messages');

    // 打开模态框
    addMessageBtn.onclick = function() {
        messageModal.style.display = 'block';
    };

    // 关闭模态框
    closeModal.onclick = function() {
        messageModal.style.display = 'none';
    };

    // 点击模态框外部关闭模态框
    window.onclick = function(event) {
        if (event.target == messageModal) {
            messageModal.style.display = 'none';
        }
    };

    // 提交留言表单
    messageForm.onsubmit = function(event) {
        event.preventDefault();

        var title = document.getElementById('messageTitle').value;
        var content = document.getElementById('messageContent').value;

        var messageDiv = document.createElement('div');
        messageDiv.classList.add('card', 'message-card'); // 使用card和message-card样式
        messageDiv.innerHTML = '<h3>' + title + '</h3><p>' + content + '</p>';

        messagesDiv.appendChild(messageDiv);

        // 清空表单并关闭模态框
        messageForm.reset();
        messageModal.style.display = 'none';
    };
});