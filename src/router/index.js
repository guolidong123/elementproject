import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layouts/Layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      menuShow: false
    },
    {
      path: 'charge',
      menuName: '收银',
      menuShow: true,
      hasChild: true,
      hideChild: false,
      children: [
        {
          path: 'chargeCard',
          menuName: '收银开单',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        },
        {
          path: 'setManage',
          menuName: '寄存管理',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        },
        {
          path: 'orderManage',
          menuName: '预约管理',
          menuShow: true,
          hasChild: false,
          hideChild: false
        }
      ]
    },
    {
      path: 'member',
      menuName: '会员',
      menuShow: true,
      hasChild: true,
      hideChild: false,
      children: [
        {
          path: 'memberManage',
          menuName: '会员管理',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        },
        {
          path: 'membercardManage',
          menuName: '会员卡管理',
          menuShow: true,
          hasChild: true,
          hideChild: false,
          children: [
            {
              path: 'membercardSet',
              menuName: '会员卡设置',
              menuShow: true,
              hasChild: false,
              hideChild: false,
            },
            {
              path: 'membercardInfo',
              menuName: '会员卡信息',
              menuShow: true,
              hasChild: false,
              hideChild: false,
            }
          ]
        },
        {
          path: 'numberManage',
          menuName: '积分管理',
          menuShow: true,
          hasChild: true,
          hideChild: true,
          children: [
            {
              path: 'numberGroup',
              menuName: '积分增长明细',
              menuShow: true,
              hasChild: false,
              hideChild: false,
            },
            {
              path: 'changeLog',
              menuName: '兑换记录',
              menuShow: true,
              hasChild: false,
              hideChild: false,
            },
            {
              path: 'numberGift',
              menuName: '积分礼品',
              menuShow: true,
              hasChild: false,
              hideChild: false,
            }
          ]
        }
      ]
    },
    {
      path: 'grade',
      menuName: '绩效',
      menuShow: true,
      hasChild: true,
      hideChild: true,
      children: [
        {
          path: 'memberManage',
          menuName: '员工管理',
          menuShow: true,
          hasChild: false,
          hideChild: false,
          children:[
            {
              path: 'memberSet',
              menuName: '员工设置',
              menuShow: true,
              hasChild: false,
              hideChild: false,
            },
            {
              path: 'memberTypeSet',
              menuName: '工种设置',
              menuShow: true,
              hasChild: false,
              hideChild: false,
            }
          ]
        },
        {
          path: 'benefitSet',
          menuName: '提成设置',
          menuShow: true,
          hasChild: true,
          hideChild: false,
          children:[
            {
              path: 'cardBenefit',
              menuName: '会员卡提成',
              menuShow: true,
              hasChild: false,
              hideChild: false
            },
            {
              path: 'workBenefit',
              menuName: '业绩提成',
              menuShow: true,
              hasChild: false,
              hideChild: false
            },
            {
              path: 'projectBenefit',
              menuName: '项目产品提成',
              menuShow: true,
              hasChild: false,
              hideChild: false
            }
          ]
        }
      ]
    },
    {
      path: 'factory',
      menuName: '库存',
      menuShow: true,
      hasChild: true,
      hideChild: true,
      children: [
        {
          path: 'houseManage',
          menuName: '仓库管理',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        },
        {
          path: 'productManage',
          menuName: '产品管理',
          menuShow: true,
          hasChild: true,
          hideChild: false,
          children:[
            {
              path: 'productSet',
              menuName: '产品设置',
              menuShow: true,
              hasChild: false,
              hideChild: false
            },
            {
              path: 'productGroup',
              menuName: '产品分类管理',
              menuShow: true,
              hasChild: false,
              hideChild: false
            },
            {
              path: 'productBranch',
              menuName: '产品品牌管理',
              menuShow: true,
              hasChild: false,
              hideChild: false
            },
            {
              path: 'factoryManage',
              menuName: '单位管理',
              menuShow: true,
              hasChild: false,
              hideChild: false
            }
          ]
        },
        {
          path: 'inMakecard',
          menuName: '入库开单',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        },
        {
          path: 'outMakecard',
          menuName: '出库开单',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        },
        {
          path: 'incard',
          menuName: '入库开单',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        },
        {
          path: 'outcard',
          menuName: '出库开单',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        },
        {
          path: 'leavedetails',
          menuName: '库存明细',
          menuShow: true,
          hasChild: false,
          hideChild: false,
        }
      ]
    },
    {
      path: 'money',
      menuName: '财务',
      menuShow: true,
      hasChild: false,
      hideChild: false,
    },
    {
      path: 'set',
      menuName: '设置',
      menuShow: true,
      hasChild: false,
      hideChild: false,
    }
  ]
})
