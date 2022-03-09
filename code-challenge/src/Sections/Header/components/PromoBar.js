function PromoBar(props) {
    return (
        <div className="promo-bar">
            <span>
                FREE SHIPPING ON ALL ORDERS { props.isMobile === false ? 'OVER $75' : null }
            </span> 
        </div>
    )
}

export default PromoBar 
