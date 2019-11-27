var articles = [
    {
        id: 1,
        title: "New note",
        content: "test",
        created: Date.now(),
        favorite: false,
    }
];

window.onload = function () {
    loadData();
    selectArticle(this.articles[0].id)
};

// 根据文章数组重新渲染页面
function loadData() {
    var li = '';
    var article_list = document.getElementById("article_list");
    if(getSelectArticleId() == undefined){
        selectedArticleId = this.articles[0].id;
    }else {
        selectedArticleId = getSelectArticleId();
    }
    for (let i = 0; i < this.articles.length; i++) {
        if(selectedArticleId == articles[i].id){
            articleCssName = "article_item_selected"
        }else{
            articleCssName = "article_item"
        }
        if(!articles[i].favorite){
            li += `<li class="${articleCssName}" id="${articles[i].id}" onclick="selectArticle(this.id)">${articles[i].title}</li>`;
        }else {
            li += `<li class="${articleCssName}" id="${articles[i].id}" onclick="selectArticle(this.id)">${articles[i].title}<svg class="icon fl" aria-hidden="true"><use xlink:href="#icon-favorites-fill"></use></svg></li>`;
        }
        article_list.innerHTML = li;
    }
}

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


function getSelectedArticle() {
    return getObjById(getSelectArticleId(), this.articles)
}

// 获取到选中的文章id
// 遍历li,如果哪个li的class等于选中状态,就是哪个li
function getSelectArticleId() {
    let selectedItem = document.getElementsByClassName("article_item_selected");
    if( selectedItem[0] == undefined){
        return undefined
    }
    let getSelectArticleId = selectedItem[0].getAttribute("id");
    return getSelectArticleId;
}

// 设置文章的收藏相关的元素样式
function setFavoriteArticleStyle(article) {
    let favorite_button = document.getElementById("favorite_button");
    if(article.favorite){
        favorite_button_content = "<svg class=\"icon fl\" aria-hidden=\"true\"><use xlink:href=\"#icon-favorites-fill\"></use></svg>"
    }else{
        favorite_button_content = "<svg class=\"icon fl\" aria-hidden=\"true\"><use xlink:href=\"#icon-favorites\"></use></svg>"
    }
    favorite_button.innerHTML = favorite_button_content;
}

// 选中某个文章
function selectArticle(id) {
    console.log("selectArticle: " + id);
    // 根据ID从文章数值中查找到文章
    // 左侧列表选中，更新右侧文本和是否收藏
    let article = getObjById(id, this.articles);
    document.getElementById("title").value = article.title;
    document.getElementById("content").value = article.content;
    setFavoriteArticleStyle(article);
    document.getElementById("preview").innerHTML = "";
    // 将所有LI的class恢复到未选中样式，将当前元素的class设置成选中
    for(let li of document.getElementsByTagName("li")){
        li.className = 'article_item';
    }
    document.getElementById(id).className = 'article_item_selected';
}

// 预览按钮点击事件
function previewArticle() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    document.getElementById("preview").innerHTML = title + "<br />" + content;
};

// 新建文章事件
function createArticle() {
    const newItemId = String(Date.now());
    const article = {
        id: newItemId,
        title: "New note" + (this.articles.length + 1),  //文章名
        content: newItemId + "Hello",  //文章内容
        created: Date.now(),
        favorite: false,
    };
    this.articles.push(article);
    loadData();
    selectArticle(newItemId)
}

// 保存事件
function saveArticle() {
    // 获取到选中的LI
    // 从数组中查找到，更改其content字段或者title字段
    document.getElementById("content").value = document.getElementById("content").value.trim();
    if (document.getElementById("content").value.length === 0) {
        alert("不能为空");
        return;
    }
    for (let i = 0; i < this.articles.length; i++){
        if (articles[i].id == getSelectArticleId()){
            articles[i].title = document.getElementById("title").value;
            articles[i].content = document.getElementById("content").value;
        }
    }
    loadData();
}

//删除事件
function deleteArticle() {
    //确定删除吗？是再删除
    for (let i = 0; i < this.articles.length; i++){
        if (articles[i].id == getSelectArticleId()){
            var del = confirm(`确定要删除名为${articles[i].title}的文章吗？`);
            if (del == true){
                articles.splice(i, 1);
            }
            loadData();
            //删除之后被删的文章名和信息还在，所以有如下代码
            if (i>0){
                selectArticle(articles[i-1].id)
            }
        }
    }
}




//收藏事件
function favoriteArticle() {
    for (let i = 0; i < this.articles.length; i++){
        if (articles[i].id == getSelectArticleId()){
            articles[i].favorite = true;
        }
    }
    setFavoriteArticleStyle(getSelectedArticle());
    loadData();
}


//如何捕获新建后编辑的标题、内容，用oninput吗？那如果不修改呢？
//不动产登记中心  8637193； 一楼二楼 身份证 可以
// 含银大厦 中心
