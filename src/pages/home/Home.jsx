import React, { Suspense } from "react";
import { Link } from 'react-router-dom';
import "./home.css";

const LazyHomeInfo = React.lazy(() => import("../../components/HomeInfo"));
const LazyImageTextComponent = React.lazy(() => import("../../components/ImageTextComponent"));
const LazyHimComponent = React.lazy(() => import("../../components/HimComponent"));
const LazyFooter = React.lazy(() => import("../../components/Footer"));

export default function Home() {
    return (
        <>
            <section className="hero-bg">
                <div className="companyName">MINTMADE</div>
                <div className="hero-text">
                    <h1>Quick and hassle-<br />free shopping</h1>
                    <Link className="hero-btn" to="/shop">SHOP NOW</Link>
                </div>
            </section>

            <Suspense fallback={<div>Loading...</div>}>
                <LazyHomeInfo />
                <LazyImageTextComponent />
                <LazyHimComponent />
                <LazyFooter />
            </Suspense>
        </>
    );
}
