import { useEffect, useRef } from "react";

export default function CustomProduct ({prd1, prd2, prd3, prd4}) {
    let product1_1 = useRef();
    let product1_2 = useRef();
    let product1_3 = useRef();
    let product1_4 = useRef();
    let product1_5 = useRef();
    let product1_6 = useRef();
    let product1_7 = useRef();
    let product1_8 = useRef();
    let divParentProduct = useRef();
  useEffect(() => {
    let divParent = divParentProduct.current;
    product1_1.current.addEventListener("mouseenter", () => {
      divParent.style.backgroundImage = `url("${prd1}")`;
      
      product1_5.current.classList.add("active");
      product1_6.current.classList.remove("active");
      product1_7.current.classList.remove("active");
      product1_8.current.classList.remove("active");
    });
    product1_2.current.addEventListener("mouseenter", () => {
      divParent.style.backgroundImage = `url(${prd2})`;
      product1_5.current.classList.remove("active");
      product1_6.current.classList.add("active");
      product1_7.current.classList.remove("active");
      product1_8.current.classList.remove("active");
    });
    product1_3.current.addEventListener("mouseenter", () => {
      divParent.style.backgroundImage = `url(${prd3})`;
      product1_5.current.classList.remove("active");
      product1_6.current.classList.remove("active");
      product1_7.current.classList.add("active");
      product1_8.current.classList.remove("active");
    });
    product1_4.current.addEventListener("mouseenter", () => {
      divParent.style.backgroundImage = `url(${prd4})`;
      product1_5.current.classList.remove("active");
      product1_6.current.classList.remove("active");
      product1_7.current.classList.remove("active");
      product1_8.current.classList.add("active");
    });
  });
  return (
    <>
    <div className="product-img-default1-1 " ref={divParentProduct}>
      <div className="product1-img-default1-1" ref={product1_1} ></div>
      <div className="product1-img-default1-2" ref={product1_2} ></div>
      <div className="product1-img-default1-3" ref={product1_3} ></div>
      <div className="product1-img-default1-4" ref={product1_4} ></div>
    </div>  
    <div className="product-img-default1-2">
      <div className="product1-img-default1-5" ref={product1_5}></div>
      <div className="product1-img-default1-6" ref={product1_6}></div>
      <div className="product1-img-default1-7" ref={product1_7}></div>
      <div className="product1-img-default1-8" ref={product1_8}></div>
    </div> 
    </>
  )
};
