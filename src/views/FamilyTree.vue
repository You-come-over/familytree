<template>
  <div class="family-tree">
    <h2 class="tree-title">家族族谱</h2>
    <div class="tree-container">
      <TreeItem :member="rootMember" />
    </div>
  </div>
</template>

<script>
// 递归组件必须单独写，并给 name
import TreeItem from '../components/TreeItem.vue'
import familyData from '../data/familyData.json'
export default {
  name: 'FamilyTree',
  components: {
    TreeItem
  },
  data () {
    return {
      rootMember: familyData
    }
  }
}
</script>

<style scoped>
.family-tree {
  max-width: 700px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fff;
}
.tree-title {
  text-align: center;
  font-size: 22px;
  color: #333;
  margin-bottom: 20px;
}
</style>
