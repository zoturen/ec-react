import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout