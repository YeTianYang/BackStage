import { Button, Form, FormItem, Input, Container, Aside, Main, Header, Message ,MessageBox,Menu,MenuItem,Submenu,MenuItemGroup} from 'element-ui'

export default {
  install (Vue) {
    Vue.use(Button),
      Vue.use(Form),
      Vue.use(FormItem),
      Vue.use(Input),
      Vue.use(Container),
      Vue.use(Aside),
      Vue.use(Main),
      Vue.use(Header),
      Vue.use(Menu),
      Vue.use(MenuItem),
      Vue.use(Submenu),
      Vue.use(MenuItemGroup),
      Vue.prototype.$message = Message,
      Vue.prototype.$messageBox = MessageBox
  }
}