import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '@/components/Index'
import City from '@/components/City'
import Product from '@/components/Product'
import ProductComments from '@/components/ProductComments'
import OrderConfirm from '@/components/OrderConfirm'
import Pay from '@/components/Pay'
import Payok from '@/components/Payok'
import OrderDetail from '@/components/OrderDetail'
import Phone from '@/components/Phone'
import PhoneSend from '@/components/PhoneSend'
import PhoneAgree from '@/components/PhoneAgree'
import Financial from '@/components/Financial'
import My from '@/components/My'
import Wallet from '@/components/Wallet'
import Invite from '@/components/Invite'
import AddressManage from '@/components/AddressManage'
import AddressAdd from '@/components/AddressAdd'
import Logistics from '@/components/Logistics'
import Cart from '@/components/Cart'
import TopUp from '@/components/TopUp'
import Withdraw from '@/components/Withdraw'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/Index'

        },
        {
          path: '/Index',
          name: 'Index',
          component: Index
        },
        {
          path: '/City',
          name: 'City',
          component: City
        },
        { // 选择城市
          path: '/City/:cityid',
          name: 'SelectCity',
          component: Index
        },
        {
          path: '/Product',
          name: 'Product',
          component: Product
        },
        {
          path: '/ProductComments',
          name: 'ProductComments',
          component: ProductComments
        },
        {
          path: '/OrderConfirm',
          name: 'OrderConfirm',
          component: OrderConfirm
        },
        {
          path: '/pay',
          name: 'Pay',
          component: Pay
        },
        {
          path: '/payok',
          name: 'Payok',
          component: Payok
        },
        {
          path: '/OrderDetail',
          name: 'OrderDetail',
          component: OrderDetail
        },
        {
          path: '/Phone',
          name: 'Phone',
          component: Phone
        },
        {
          path: '/PhoneSend',
          name: 'PhoneSend',
          component: PhoneSend
        },
        {
          path: '/PhoneAgree',
          name: 'PhoneAgree',
          component: PhoneAgree
        },
        {
          path: '/Financial',
          name: 'Financial',
          component: Financial
        },
        {
          path: '/My',
          name: 'My',
          component: My
        },
        {
          path: '/Wallet',
          name: 'Wallet',
          component: Wallet
        },
        {
          path: '/Invite',
          name: 'Invite',
          component: Invite
        },
        {
          path: '/AddressManage',
          name: 'AddressManage',
          component: AddressManage
        },
        {
          path: '/AddressAdd',
          name: 'AddressAdd',
          component: AddressAdd
        },
        {
          path: '/Logistics',
          name: 'Logistics',
          component: Logistics
        },
        {
          path: '/Cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/TopUp',
          name: 'TopUp',
          component: TopUp
        },
        {
          path: '/Withdraw',
          name: 'Withdraw',
          component: Withdraw
        }
      ]
  }]
})
