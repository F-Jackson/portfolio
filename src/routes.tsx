import Template from 'pages/Template';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Footer from "components/Footer";
import HeaderContainer from "components/Header";
import Loading from 'pages/Loading';
import Page404 from 'pages/Page404';

const About = lazy(() => import('pages/About'));
const Contact = lazy(() => import('pages/Contact'));
const Home = lazy(() => import('pages/Home'));
const Projects = lazy(() => import('pages/Projects'));

export default function Router() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <HeaderContainer />
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path='/' element={<Template />}>
                            <Route index element={<Home />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='about' element={<About />} />
                            <Route path='projects' element={<Projects />} />
                            <Route path='*' element={<Page404 />}/>
                        </Route>
                    </Routes>
                </Suspense>
                {/* <Routes>
                    <Route path='/' element={<Loading />}/>
                </Routes> */}
                <Footer />
            </RecoilRoot>
        </BrowserRouter>
    );
}