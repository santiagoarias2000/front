const optionsAdmin = [
    
    { name: "Certificados", icon: "bi bi-person-gear", route: "", sons: [
        { name: "Nuevo", icon: "bi bi-circle", route: "/home/person/create" },
        { name: "Listado", icon: "bi bi-circle", route: "/home/person/view", },
        { name: "Listado Administración", icon: "bi bi-circle", route: "/home/person/admin"},
      ]
    },

    { name: "Vehículos", icon: "bi bi-truck-front", route: "", sons: [
        { name: "Nuevo", icon: "bi bi-circle", route: "/home/vehicles/createVehicle" },
        { name: "Listado", icon: "bi bi-circle", route: "/home/vehicles/vehicleList", },
    ]
    },

    { name: "Cursos", icon: "bi bi-layout-text-window-reverse", route: "", sons: [
      { name: "Nuevo", icon: "bi bi-circle", route: "/home/courses/createCourse" },
      { name: "Listado", icon: "bi bi-circle", route: "/home/courses/courseList", },
    ]
  },
    { name: "Administración", icon: "bi bi-person-lines-fill", route: "", sons: [
      { name: "Usuarios", icon: "bi bi-circle", route: "/home/adminuser", },
      { name: "Cursos", icon: "bi bi-circle", route: "/home/courses/adminCourse" },
      { name: "Vehiculos", icon: "bi bi-circle", route: "/home/vehicles/adminVehicle"},
      ]
    }
  ];
  
  // *********************************************************************************
  
  const optionsGuest = [
    { name: "Certificados", icon: "bi bi-person-gear", route: "", sons: [
      { name: "Nuevo", icon: "bi bi-circle", route: "/home/person/create" },
      { name: "Listado", icon: "bi bi-circle", route: "/home/person/view", },
      { name: "Listado Administración", icon: "bi bi-circle", route: "/home/person/admin"},
    ]
  },
  ];
  
  export { optionsAdmin, optionsGuest };
  