var articles = [];
//所有接口的content-type都是form-data的,不是json的
var url = "http://107.150.124.179:8081/api/v1/articles/"
var token = "";

window.onload = function () {
    getToken();
    console.log('token' + this.token);
    loadData();
    selectArticle(this.articles[0].id);

};
//


// 未出现的元素事件绑定
// 写法一,思路：
// $(function () {
//     //登录功能begin
//     $("#login").click(function () {
//         $(".hide-center").fadeIn("slow");
//         $(".overCurtain").fadeIn("slow");
//     })
//     $("#close").click(function () {
//         $(".hide-center").fadeOut("slow");
//         $(".overCurtain").fadeOut("slow");
//     })
// });
// 写法二
$(document).on('click', '#login', function () {
    $(".hide-center").fadeIn("slow");
    $(".overCurtain").fadeIn("slow");
});
$(document).on('click', '#close', function () {
    $(".hide-center").fadeOut("slow");
    $(".overCurtain").fadeOut("slow");
});

// 根据文章数组重新渲染页面
function loadData() {
    $.ajax({
        type: "GET",
        url: url,
        beforeSend: function (request) {
            request.setRequestHeader("token", token);  //添加  token验证
        },
        async: false, //改成同步，这样onload时就会先获取token再进入loadData()方法
        success: function (str) {
            console.log('bingo', str);
            articles = str;
            var li = '';
            var selectedArticleId = '';
            var article_list = document.getElementById("article_list");
            if (getSelectArticleId() == undefined) {
                selectedArticleId = articles[0].id;
            } else {
                selectedArticleId = getSelectArticleId();
            }
            $(str).each(function (index, element) {
                if (selectedArticleId == element.id) {
                    articleCssName = "article_item_selected";
                } else {
                    articleCssName = "article_item";
                }
                if (!element.star_status) {
                    li += `<li class="${articleCssName}" id="${element.id}" onclick='selectArticle("${element.id}")'>${element.title}</li>`;
                } else {
                    li += `<li class="${articleCssName}" id="${element.id}" onclick='selectArticle("${element.id}")'>${element.title}<svg class="icon fl" aria-hidden="true"><use xlink:href="#icon-favorites-fill"></use></svg></li>`;
                }


                //var string = JSON.stringify(element);
                // "{"title":"111","content":"111","user_id":0,"star_status":0,"id":1}"
                // li += `<li class="article_item" id="${element.id}" onclick='selectArticle("${element.id}")'>${element.title}</li>`;
                //li += "<li class='article_item' id='"+element.id+"' onclick='selectArticle(\" "+string+" \")'>"+element.title+"</li>";

            });
            article_list.innerHTML = li;
        },
        error: function (data) {
            console.log('ajax error handling', data);
        }
    })

    // if(getSelectArticleId() == undefined){
    //     selectedArticleId = this.articles[0].id;
    // }else {
    //     selectedArticleId = getSelectArticleId();
    // }
    // for (let i = 0; i < this.articles.length; i++) {
    //     if(selectedArticleId == articles[i].id){
    //         articleCssName = "article_item_selected"
    //     }else{
    //         articleCssName = "article_item"
    //     }
    //     if(!articles[i].favorite){
    //         li += `<li class="${articleCssName}" id="${articles[i].id}" onclick="selectArticle(this.id)">${articles[i].title}</li>`;
    //     }else {
    //         li += `<li class="${articleCssName}" id="${articles[i].id}" onclick="selectArticle(this.id)">${articles[i].title}<svg class="icon fl" aria-hidden="true"><use xlink:href="#icon-favorites-fill"></use></svg></li>`;
    //     }
    //     article_list.innerHTML = li;
    // }
};

// 新建文章事件
function createArticle() {
    const newItemId = String(Date.now());
    const article = {
        // id: newItemId,
        title: "New note" + (this.articles.length + 1),  //文章名
        content: newItemId + "Hello",  //文章内容
        created: Date.now(),
        starStatus: 0
        // favorite: false,
    };
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: article,
        beforeSend: function (request) {
            request.setRequestHeader("token", token);  //添加  token验证
        },
        success: function (data) {
            articles = data;
            console.log('create_bingo', data);
            loadData();
            selectArticle(data.data.id);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(typeof (errorThrown));
        }
    })


};

// 选中某个文章
function selectArticle(id) {
    console.log("selectArticle: " + id);
    // 根据ID从文章数值中查找到文章
    // 左侧列表选中，更新右侧文本和是否收藏
    let article = getObjById(id, articles);
    document.getElementById("title").value = article.title;
    document.getElementById("content").value = article.content;
    setFavoriteArticleStyle(article);
    document.getElementById("preview").innerHTML = "";
    // 将所有LI的class恢复到未选中样式，将当前元素的class设置成选中
    for (let li of document.getElementsByTagName("li")) {
        li.className = 'article_item';
    }
    document.getElementById(id).className = 'article_item_selected';
};


// 根据ID从数组中获取元素
function getObjById(id, array) {
    var obj = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) {
            obj = array[i];
            break;
        }
    }
    return obj;
};

function getToken() {
    $.ajax({
        type: "POST",
        url: 'http://107.150.124.179:8081/api/v1/users/login',
        data: {userName: 'vvv', password: '123456'},
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        async: false,
        success: function (data) {
            token = data.data.token;
        }
    })
};


function transformArticleToOrigin(article) {
    // article.userId = 23;
    article.star_status = 0;
    return article;
};

// // 把接口返回的article转换为本地article
// function transformOriginToArticle(article) {
//     article.favorite = (article.star_status == 0 ? false : true);
//     return article;
// };


function getSelectedArticle() {
    return getObjById(getSelectArticleId(), this.articles)
};

// 获取到选中的文章id
// 遍历li,如果哪个li的class等于选中状态,就是哪个li
function getSelectArticleId() {
    let selectedItem = document.getElementsByClassName("article_item_selected");
    if (selectedItem[0] == undefined) {
        return undefined
    }
    let getSelectArticleId = selectedItem[0].getAttribute("id");
    return getSelectArticleId;
};

// 设置文章的收藏相关的元素样式
function setFavoriteArticleStyle(article) {
    let favorite_button = document.getElementById("favorite_button");
    if (article.star_status) {
        favorite_button_content = "<svg class=\"icon fl\" aria-hidden=\"true\"><use xlink:href=\"#icon-favorites-fill\"></use></svg>"
    } else {
        favorite_button_content = "<svg class=\"icon fl\" aria-hidden=\"true\"><use xlink:href=\"#icon-favorites\"></use></svg>"
    }
    return favorite_button.innerHTML = favorite_button_content;
};


// 保存事件
function saveArticle() {
    // 获取到选中的LI
    // 从数组中查找到，更改其content字段或者title字段
    if (document.getElementById("content").value.length === 0) {
        alert("不能为空");
        return;
    }
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    var update_data = {
        id: Number(getSelectArticleId()),
        title: title,
        content: content,
        // favorite: false,
    }
    $.ajax({
        type: "PATCH",
        url: url,
        beforeSend: function (request) {
            request.setRequestHeader("token", token);  //添加  token验证
        },
        data: transformArticleToOrigin(update_data),
        async: false, //改成同步，这样onload时就会先获取token再进入loadData()方法
        success: function (str) {
            console.log('save_bingo', str);
        },
        error: function (data) {
            console.log('ajax error handling', data);
        }
    })
    loadData();
    selectArticle(update_data.id);
};

//删除事件
function deleteArticle() {
    //确定删除吗？是再删除
    var delete_data = {
        id: parseInt(getSelectArticleId())
    }
    //(let i of articles) i是articles数组中的每一个对象
    //(let i in articles) i是articles数组中的每一个对象的下标
    for (let i in articles) {
        if (articles[i].id == getSelectArticleId()) {
            var del = confirm(`确定要删除名为${articles[i].title}的文章吗？`);
            if (del == true) {
                $.ajax({
                    type: "DELETE",
                    url: url + parseInt(getSelectArticleId()),
                    beforeSend: function (request) {
                        request.setRequestHeader("token", token);  //添加  token验证
                    },
                    data: transformArticleToOrigin(delete_data),
                    async: false, //改成同步，这样onload时就会先获取token再进入loadData()方法
                    success: function (str) {
                        console.log('delete_bingo', str);
                        loadData();
                        //删除之后自动选中被删的前一个article
                        if (i > 0) {
                            selectArticle((articles[i - 1]).id);
                        }
                    },
                    error: function (data) {
                        console.log('ajax error handling', data);
                    }
                })
            }
            break;
        }
    }
};


//收藏事件
function favoriteArticle() {
    var favorite_data = {
        id: Number(getSelectArticleId()),
        star_status: 1,
    }
    $.ajax({
        type: "PATCH",
        url: url,
        beforeSend: function (request) {
            request.setRequestHeader("token", token);  //添加  token验证
        },
        data: favorite_data,
        async: false, //改成同步，这样onload时就会先获取token再进入loadData()方法
        success: function (str) {
            console.log('favorite_bingo', str);
        },
        error: function (data) {
            console.log('ajax error handling', data);
        }
    })
    for (let i = 0; i < this.articles.length; i++) {
        if (articles[i].id == getSelectArticleId()) {
            articles[i].star_status = 1;
        }
    }
    setFavoriteArticleStyle(getSelectedArticle());
    loadData();
};


// 预览按钮点击事件
function previewArticle() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    document.getElementById("preview").innerHTML = title + "<br />" + content;
};


//登录功能end

//今日疑问：
// 1.为什么li里不能传object，到底应该怎么传object？（字符串怎么组装）
// 2.为什么我编辑后保存不更新而是新增呢？我的id传的不对吗？save为什么对应的是url，不用加{id}
//   已解决，更新的type写错了，应该是“PATCH”
// 3.删除到底哪里错了，还是id吗？
//   已解决，是url写错了，url写之前应该try一下，看看真正返回的是什么。本例中是url+id,id并没有大括号包围

//1129 Question:
//1.选择后删除时，遍历到选中的i时，i显示undefind,articles[i].id报错。可是（articles[i].id == getSelectArticleId()）后，id又正常，然后进入了if判断。可以正常删除，可是删除后不会选中前一个li
//2.新建后存到接口的id是默认的，不是我自己设置的时间字符串，可以新建成功，但是不能自动选中新建的li
//  解决方法：1.删除自己新建的id，不可行
//1129Question已解决：后台返回了新建Article的id。有时候自己搞不定的问题，问题不在自己。哈哈，有点绕

//收藏功能的添加：点击收藏按钮后，按钮变成实心，左侧选中的li右侧添加实心爱心
//目前问题：接口问题：star_status赋值不成功
