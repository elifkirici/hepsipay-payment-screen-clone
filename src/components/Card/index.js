import React from "react";

function Card({ cardValue }) {
 

  return (
    <div className="card border-0 ">
      <div className="row">
        <div className="col-12 border-0 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/tr/archive/1/11/20200407192312%21Qnb-finansbank.png"
            alt="img"
            className="qnb-logo"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IzPpOMz8m_O2ALbSb9ZyeS96MiFqm4j1dg&usqp=CAU"
            alt="img"
            className="cardFinans-logo"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card-no">
            {cardValue.cardNo === "" ? "Kart Numarası" : cardValue.cardNo}
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6 d-flex flex-column ">
          <span className="card-name">
            {cardValue.cardName === ""
              ? "Kartın üzerindeki isim"
              : cardValue.cardName}
          </span>
          <span className="son-kullanma">
            {cardValue.sonKullanma === "" ? "AA/YY" : cardValue.sonKullanma}
          </span>
        </div>
        <div className="col-6">
          <img
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072016/untitled-1_137.png?itok=_QrtgEVI"
            alt="img"
            className="master-logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
