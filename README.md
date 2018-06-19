# school-gang

> a project for school cooperation

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

## “校园邦”功能点分析：

每个在校的大学生都希望在学校的时候能够有更多的实践机会，找到志同道合互补的团队成员，“校园邦”针对各个专业的学生，不管文科还是理工科，专注于校园项目的发布，用户可以发布自己的项目，寻找合适的项目人选，学生也可以发布寻人，寻找到合适的团队成员完成项目，实现个人和团队的成长。

1. 发布项目

    点击加号发布项目，须填写项目基本信息：名称、简介、类别、需要人员（职责和对应的人数）、完成时间、简介图等，填写完成后点击确认按钮发布项目，发布后项目自动根据类别添加到浏览界面

    可选类别：logo 设计、微信公众号开发、游戏开发、游戏设计、网页设计、android 软件开发、网页开发、ios 软件开发、短视频制作、文件资料翻译

    需要人员：UI 设计、游戏设计、java 工程师、C++、后台、前端、游戏开发

    注：项目简介要求 80 字以内，方便概览显示

1. 浏览项目

    主界面根据类别分类展示出项目主要内容（简介图、名称、项目简介），可了解到该类别的其他项目，同时点击该项目科了解到此项目的具体内容，包括项目简介、名称、类别、需要人员、完成时间、发布人员

1. 筛选项目

    在浏览项目的主界面添加筛选栏，根据项目类别、需求成员、完成时间来筛选项目

1. 按专业找人

    搜索 app 内注册特定技能的人员

    可选专业：UI 设计、游戏设计、java 工程师、C++、后台、前端、游戏开发

1. 项目管理、组内交流以及通知

    1. 显示我加入的项目、我发布的项目以及已完成的项目

    1. 显示基本通知，比如其他用户的申请加入通知，发布者可查看通知中申请人的基本信息来批准加入和拒绝加入

        1. 基本信息：能力、自述、以前完成的项目

1. 参加项目

    浏览一个项目具体内容后可选择申请加入该项目，此时需要选择自己的职能，以及自我描述，当申请加入后，会把此人之前完成过的项目同时发过去，项目发布人审核，成功加入以后则自动在对应的需求人员人数减一，当所有需求人员均为 0 时，则在项目浏览界面去除掉此项目。

1. 个人基本信息管理

    账户名、头像管理、联系方式（正常状态下其他人无法看到，当加入同一项目组后能互相查看）

1. 登陆、注册

    登陆：账号+密码
    注册：账号、密码、账户名
