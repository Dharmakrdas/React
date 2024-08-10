const ShimerProductCard =()=>{
    return(
        <div className="shimer-product-card">
            <div className="shimer-product-img"></div>
            <div className="shimer-product-text"></div>
            <div className="shimer-product-text"></div>
            <div className="shimer-product-text"></div>
        </div>
    )
}

const ShimemerProductDetails =()=>{
    return(
        <div className="shimer-product-container">
            <div className="shimmer-header"></div>
            <div className="shimmer-items shimer-container">
                <ShimerProductCard />
                <ShimerProductCard />
            </div>
        </div>
    )
}

export default ShimemerProductDetails;