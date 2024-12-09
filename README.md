# ⚙️ FHIOS Manager (Backend)

¡Bienvenido a **FHIOS Manager**! 🎉  

En un mundo cada vez más dinámico y conectado, la eficiencia en la gestión de proyectos es clave para el éxito de cualquier empresa. Fhios, una empresa comprometida con la excelencia en la gestión de proyectos tecnológicos, se encontraba buscando una herramienta que no solo optimizara la organización de sus equipos, sino que también facilitara la colaboración y la comunicación entre todos los miembros involucrados.
Fue en este contexto cuando Fhios confió en nosotros para desarrollar una solución a medida que pudiera abordar sus necesidades específicas. FHIOS Manager nació de esa confianza y de la visión compartida de un equipo que, con pasión y dedicación, trabajó incansablemente para ofrecer algo más que una simple herramienta de gestión de proyectos.
Nos propusimos crear una plataforma que no solo respondiera a los requisitos técnicos del cliente, sino que también mejorara la experiencia de todos los usuarios que interactuarían con ella. Desde los desarrolladores hasta los líderes de proyecto, cada rol y función fue diseñado para facilitar el trabajo en equipo, el seguimiento de tareas y la creación de reportes.
FHIOS Manager no es solo un gestor de proyectos, es el resultado de un esfuerzo conjunto de un equipo talentoso que, inspirado en metodologías ágiles como Scrum y Kanban, creó una herramienta poderosa y fácil de usar, construida sobre una arquitectura robusta y flexible.
Hoy, estamos orgullosos de presentar esta plataforma a Fhios, confiando en que será un catalizador para una mayor productividad, comunicación fluida y gestión efectiva de proyectos. Y, lo más importante, es que esta solución fue posible gracias al talento y esfuerzo de un equipo comprometido con cada detalle.
Este es solo el principio de un viaje, y con FHIOS Manager, estamos convencidos de que las posibilidades para Fhios son infinitas. 🚀


## 🌟 Descripción General  

El backend soporta las funcionalidades principales de la plataforma: 

- 🔒 **Autenticación y Roles**: Gestión de usuarios y permisos (Project Manager, Tech Leader, Desarrollador, HelpDesk).
  
- 🗂️ **Gestión de Proyectos y Tareas**: CRUD completo con seguimiento del progreso.
  
- 📈 **Reportes Automatizados**: Generación de informes descargables en PDF o Excel.
  
- 🔔 **Notificaciones**: Alertas automáticas para modificaciones en tiempo real.
  

## 🛠️ Tecnologías Principales  

### Backend:  

- 🟦 **Node.js**: Entorno de ejecución para JavaScript.
  
- 📦 **Express**: Framework para construir APIs robustas.
  
- 🛡️ **JWT (JSON Web Tokens)**: Para la autenticación segura de usuarios.
  
- 🔒 **bcrypt**: Hash seguro de contraseñas.
  
- 🗄️ **MySQL**: Base de datos relacional.
  
- 🧹 **Validator**: Validación de entradas del usuario.
  

### ORM y Tipado:  

- 🛠️ **Sequelize**: ORM para la gestión de bases de datos.
  
- 📝 **TypeScript**: Para un desarrollo tipado y seguro.
  

### Pruebas:  

- ✅ **Jest**: Framework para pruebas unitarias y de integración.
  

### Metodología de Trabajo:  

- 📋 **Trello**: Gestión del flujo de trabajo.
  
- 🔄 **Scrum/Kanban**: Métodos ágiles para la organización de tareas.
  

## 🚀 Roadmap

Fases del proyecto:

•	📝 Diseño: Diagramas y especificación de requerimientos.

•	👨‍💻 Desarrollo: Implementación iterativa basada en sprints.

•	✅ Pruebas: Validación funcional y de integración.

•	🚢 Despliegue: Publicación en la nube.


## 📋 Instalación y Uso  

1. **Clona el repositorio:**

    ```bash Copiar
      git clone https://github.com/juanvprada/fhios-manager-server.git
    ```

2. **Instala las dependencias:**

   ```bash
     npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo .env en la raíz del proyecto con las siguientes variables:

    ```bash
    DATABASE_URL=tu_url_de_base_de_datos
    PORT=3000
    JWT_SECRET=tu_secreto
    ```
    
4. **Inicia el servidor:**
   
    ```bash
    npm run dev
    ```


## 🛠️ Scripts Disponibles

•	npm run dev: Inicia el entorno de desarrollo.

•	npm run build: Construye el proyecto para producción.

•	npm run test: Ejecuta las pruebas unitarias y de integración.


## 🧾 Documentación de la API

La documentación completa de las rutas y funcionalidades del backend está disponible en Postman.

Puedes consultarla a través del siguiente enlace: https://documenter.getpostman.com/view/38671791/2sAYBbc8hL#99b90137-aca8-4500-9a8a-f99f1e3f88a8


## 🎯 Funcionalidades Clave

**Gestión de Proyectos y Usuarios:**

  o	CRUD completo para proyectos, tareas, usuarios y documentos.

  o	Asignación de roles y permisos personalizados.

**Notificaciones Dinámicas:**

  o	Envío de notificaciones automáticas ante cualquier cambio.

**Generación de Reportes:**

  o	Exportación en formatos descargables (PDF, Excel).


  ## 👥 Equipo de Desarrollo

Detrás de **FHIOS Manager** hay un equipo increíble de desarrolladores, comprometidos con crear herramientas que transforman la gestión de proyectos. ¡Conoce a nuestro talentoso equipo! 🚀  

- **Juan Vazquez**  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juanvprada/)  
  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/juanvprada)

- **Mariela Adimari**  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mariela-adimari/)  
  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marie-adi)

- **Arturo Mencia**  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arturomencia/)  
  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Arthurmm77)

- **Omar Lengua**  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/omarlengua/)  
  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Omarlsant)

- **Mónica Serna**  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/monicasernasantander/)  
  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/monicaSernaS)

- **Jhon Smith**  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/smith-develop/)  
  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Smith-Develop)


## 📜 Licencia

Este proyecto está bajo la Licencia MIT. ¡Aporta tus ideas y mejoras! 🌟 🚀


## 🔗 Enlaces Útiles

Repositorio Frontend:  [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/juanvprada/fhios-manager-client)





 







