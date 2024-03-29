const app = Vue.createApp({
  data() {
    return {
      count: 0,
      username: '',
      password: '',
      PhUsername: '手机号/邮箱',
      PhPassword: '密码',
      banner: ["黏共体高票通过太空电梯修建方案",
      "一号定居点发展走上正轨道",
      "银币交易所第42届高新技术拍卖会即将启动"],
      unionNews: [{ title: "管理者南下考察" },
      { title: "1000架弹簧刀无人机交付婆罗国，助力婆罗国抵御南方军团入侵" },
      { title: "联盟研究所向混凝土添加黏菌技术，使其可以在一定程度内自行修复，研究所声称这项技术可以帮助幸存者更好的重建家园" },
      { title: "馒头港迎来一批新的威兰特人定居者" }],
      enterpriseNews: [
        {title: "企业对南方军团宣战"},
        {title: "企业大使：坚决反对南方军团的入侵战争行为"},
        {title: "借助黏共体电子通行证，大量端点城居民前往联盟境内旅游，联盟旅游业迎来新一轮旺季"}
      ],
      legionNews: [
        {title: "尤里乌斯元帅去世"},
        {title: "南方军团发动自杀式袭击，向废土传播“死剂”。"},
        {title: "军团各自为王！东、西、北、凯旋城分别独立，军团从此成为历史"}
      ],
      academyNews: [
        {title: "重力井技术回收工作接近尾声"},
        {title: "学院全力进行死剂相关研究工作，疫苗正在研发当中"},
      ]
    }
  },
  methods: {
    checkLogin() {
      if (!this.username) {
        this.$message({
          showClose: true,
          message: "用户名不能为空！",
          type: "error",
        })
      } if (!this.password) {
        this.$message({
          showClose: true,
          message: "密码不能为空！",
          type: "error",
        })
      } if (this.username && this.password) {
        this.$message({
          showClose: true,
          message: "检查通过",
          type: "success"
        })
      }
    },
  },
})