import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./main2.css";

function App() {
  return (
    <body
      className="page-overview ac-gn-current-mac"
      data-anim-scroll-group="body"
    >
      <main
        id="main"
        className="main"
        role="main"
        data-page-type="overview"
        data-anim-scroll-group="bubble-gum-group"
      >
        <section
          className="section section-hero-product bigsur"
        >         
         <div className="section-content1 ">
          <div className="section-content ">
              <h2 className="typography-hero-product-headline">
                <span className="violator-frameless ">
                Международный
                </span>
                <span className="violator-frameless2">
                Полицейский журнал 
                </span>
              <div className="violator-frameless3">
              ИнтерПолиция
                </div>
                </h2>
              <div className=" has-dynamic-content">
              Онлайн курс на журналиста с последующем получением удостоверения журналиста и пресс-карты «Международного Полицейского журнала»
              </div>
              <div className="flex-block">
                <span className="hero-product-link">
                    Цены
                </span>
                <span className="hero-product-link left ">
                Работа журналистом
                </span>
                <span className="hero-product-link left ">
                По оканчании обучения
                </span>
                <span className="hero-product-link1 right">
                Преобрести курсы
                </span>

              </div>
              </div>
          </div>
        </section>
        <section
          className="section section-hero-product1">         
         <div className=" picture"> </div>
          <div className="section-content2 ">
              <div className=" has-dynamic-content1">
              - Cрок обучения от – 2-x недели.
              <br></br>
              <br></br>
              - Стоимость обучения от - 15 000 рублей</div>
          </div>
        </section>
      </main>
    </body>
  );
}


export default App;
