import MainLayout from '../pages/main-layout'
import Home from '../pages/home/home'
import Walkthrough from '../pages/walkthrough/walkthrough'



const routes = [
    {
        component: Home,
        route: "/",
        layout: MainLayout,
    },
    {
        component: Walkthrough,
        route: "/walkthrough",
        layout: MainLayout,
    }

]

export default routes;