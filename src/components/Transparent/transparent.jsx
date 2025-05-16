import React from 'react'
import symbol1 from '../../assets/DetailProduct/symbol1.png';
import symbol2 from '../../assets/DetailProduct/symbol2.png'
import symbol3 from '../../assets/DetailProduct/symbol3.png'
import symbol4 from '../../assets/DetailProduct/symbol4.png'
import symbol5 from '../../assets/DetailProduct/symbol5.png'
import './transparent.css'
const TransparentPricing = () => {
  return (
    <>
     <div className="transparent">
              <h4 className="titleTransparent">Transparent Pricing</h4>
              <span className="descTransparent">
              We publish what it costs us to make every one of our products. There are a lot of costs we can't neatly account for - 
              like design, fittings, wear testing, rent on office and retail space - but we believe you deserve to know what goes into making the products you love.
              </span>
              <div className="symbolList">
                <div className="itemSymbol">
                  <img src={symbol1} alt="" />
                  {/* <div className="contentSymbol"> */}
                      <span className="contentName">Materials</span>
                      <span className="priceSymbol">$47.96</span>
                  {/* </div> */}
                </div>
                <div className="itemSymbol">
                  <img src={symbol2} alt="" />
                  {/* <div className="contentSymbol"> */}
                      <span className="contentName">Hardware</span>
                      <span className="priceSymbol">$5.74</span>
                  {/* </div> */}
                </div>
                <div className="itemSymbol">
                  <img src={symbol3} alt="" />
                  {/* <div className="contentSymbol"> */}
                      <span className="contentName">Labor</span>
                      <span className="priceSymbol">$13.75</span>
                  {/* </div> */}
                </div>
                <div className="itemSymbol">
                  <img src={symbol4} alt="" />
                  {/* <div className="contentSymbol"> */}
                      <span className="contentName">Duties</span>
                      <span className="priceSymbol">$8.09</span>
                  {/* </div> */}
                </div>
                <div className="itemSymbol">
                  <img src={symbol5} alt="" />
                  {/* <div className="contentSymbol"> */}
                      <span className="contentName">Transport</span>
                      <span className="priceSymbol">$1.53</span>
                  {/* </div> */}
                </div>
              </div>
          </div>  
    </>
  )
}

export default TransparentPricing