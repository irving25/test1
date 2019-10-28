const Menu = [
  {
    title: 'Unidades',
    group: 'apps',
    icon: 'time_to_leave',
    name: 'Unidades',
    href: '/dashboard'
  },
  {
    title: 'Clientes',
    group: 'apps',
    icon: 'search',
    name: 'Chat',
    href: '/clientes'
  },
  {
    title: 'Conductores',
    group: 'apps',
    name: 'Mail',
    icon: 'group',
    items:[
      {name: 'registroconductores', title: 'Registro de conductores', href: '/conductoresR'},
      {name: 'conductores', title: 'Conductores', href: '/conductores'},
    ]
  },
  {
    title: 'Administradores',
    group: 'apps',
    name: 'Administradores',
    icon: 'assignment_ind',
    items:[
      {name: 'administradores', title: 'Administradores', href: '/administrador'},
      {name: 'registroadministradores', title: 'Registro de administradores', href: '/administradorR'},


    ]
  },
  {
    title: 'Viajes',
    group: 'apps',
    name: 'Viajes',
    icon: 'my_location',
    href: '/viajes'
  },

  {
    title: 'Reportes',
    group: 'reportes',
    component: 'reportes',
    icon: 'assignment',
    href: '/reportes',
  },
  {
    title: 'Cupones',
    group: 'cupones',
    component: 'cupones',
    icon: 'redeem',
    href: '/cupones',
  },

  {divider: true},
    {
    title: 'Salir',
    group: 'extra',
    icon: 'arrow_back_ios',
    href: '/login'
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
