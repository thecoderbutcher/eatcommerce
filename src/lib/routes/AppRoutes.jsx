import {useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../hooks/useLang";
import { ROUTES } from "../constants/routes";
import { pageVariants } from "../animations/page";

const AppRoutes = () => {
    const { lang } = useLang();
    const location = useLocation();
    const routes = useRoutes([  ...ROUTES[lang] ])

    return(
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {routes}
            </motion.div>
        </AnimatePresence>
    ) 
}

export default AppRoutes;