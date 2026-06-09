<template>
  <div class="member-item">
    <div class="member-header" >
      <button class="add-btn" @click="handleToggle">
        {{ member.open ? '- 收起' : '+ 展开' }}
      </button>
      <div class="gender">
        <span class="generation">{{ member.generation }}</span>
      </div>
      <div class="content">
        <span class="name">{{ member.name }}</span>
        <span class="gender">({{ member.gender }})</span>
        <div class="remark" v-if="member.child">生：{{ member.child }}</div>
        <div class="remark" v-if="member.remark">{{ member.remark }}</div>
      </div>
      <!-- 新增：添加子节点按钮 -->
      <button class="add-btn" @click="handleEdit">+ 修改</button>
      <button class="add-btn" @click="handleToDetail">详情</button>
    </div>

    <div v-if="member.open && hasChildren" class="children-box">
      <TreeItem
        v-for="child in member.children"
        :key="child.id"
        :member="child"
        @add-child="handleAddChildFromChild"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasChildren () {
      return this.member.children && this.member.children.length > 0
    }
  },
  methods: {
    handleToggle () {
      if (this.hasChildren) {
        this.member.open = !this.member.open
      }
    },
    // 触发添加子节点事件
    handleEdit () {
      this.$emit('add-child', this.member.id)
    },
    // 传递子组件的添加事件
    handleAddChildFromChild (parentId) {
      this.$emit('add-child', parentId)
    },
    // 进入详情页
    handleToDetail () {

    }
  }
}
</script>

<style scoped>
/* 原有样式不变，新增按钮样式 */
.add-btn {
  margin:0 10px 0 10px;
  padding: 2px 8px;
  font-size: 12px;
  border: 1px solid #42b983;
  border-radius: 4px;
  background: #f0f9f4;
  color: #42b983;
  cursor: pointer;
  transition: all 0.2s;
}

.add-btn:hover {
  background: #42b983;
  color: #fff;
}
.member-header {
  display: flex;
  align-items: center;
  padding: 5px 15px;
  margin: 5px auto;
  border: #aaa 1px solid;
  border-radius: 10px;
}
.content {
  margin: 0 auto;
  cursor: pointer;
}
.toggle-btn {
  width: 20px;
  text-align: center;
}
/* 原有样式... */
</style>