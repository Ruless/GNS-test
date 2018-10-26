import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Table from './components/Table.vue';
import TableMore from './components/TableMore.vue';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
  	path: '',
  	component: Table
  },
	{
		path: 'more',
		name: 'more',
		props: true,
		component: TableMore
	}
  ]

  })

export default router;