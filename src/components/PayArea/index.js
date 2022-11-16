import { useState } from "react";
import { UseCheck } from "../../context/checkContext";

function PayArea({ name }) {
  const {
    Check1,
    Check2,
    Check3,
    Check4,
    Check5,
    Check6,

    setCheck1,
    setCheck2,
    setCheck3,
    setCheck4,
    setCheck5,
    setCheck6,
  } = UseCheck();
  const [isCheck, setisCheck] = useState(false);
  const [isCheck2, setisCheck2] = useState(true);

  return (
    <div className="container mb-3 mt-3 ">
      <div className="row ">
        <div className="col-12 info d-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fillRule="currentColor"
            className="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <p>
            <span>Şimdi Al Şubatta Öde</span> Yapı Kredi, İş Bankası ve Akbank
            kredi kartlarında geçerlidir. <a href="|">Detaylı bilgi</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="check-form border-bottom border-top">
            <div className="row">
              <label>
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  onChange={() => setisCheck(!isCheck)}
                  checked={isCheck}
                />
                <span>Kart ile peşin Öde</span>
                <br></br>
                <span className="ml-40">Hepsipay ile hızla ve güvenle öde</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mb-3 mt-3">
          <label>
            <input
              type="checkbox"
              className="custom-checkbox"
              onChange={() => setisCheck2(!isCheck2)}
              checked={isCheck2}
            />
            <span> Kart ile öde</span>
          </label>
        </div>
      </div>
      <div className="row border-bottom choice-area ">
        <div className="col-12">
          <div className="choice row">
            <div className="col-10">
              <label>
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  onChange={() => setCheck1(!Check1)}
                  checked={Check1}
                />
                <span>Peşin</span>
              </label>
            </div>
            <div className="col-2">
              <p>6.299,01 TL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-bottom choice-area">
        <div className="col-12">
          <div className="choice row">
            <div className="col-10">
              <label>
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  onChange={() => setCheck2(!Check2)}
                  checked={Check2}
                />
                <span>2 Taksit</span>
              </label>
            </div>
            <div className="col-2">
              <div className="row">
                <p>
                  3.149,50 TL<span>/Ay</span>
                </p>
              </div>
              <div className="row">
                <span className="mt-10">Toplam:6.299,01 TL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-bottom choice-area">
        <div className="col-12">
          <div className="choice row">
            <div className="col-10">
              <label>
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  onChange={() => setCheck3(!Check3)}
                  checked={Check3}
                />
                <span>3 Taksit</span>
              </label>
            </div>
            <div className="col-2">
              <div className="row">
                <p>
                  2.099,67 TL<span>/Ay</span>
                </p>
              </div>
              <div className="row">
                <span className="mt-10">Toplam:6.299,01 TL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-bottom choice-area">
        <div className="col-12">
          <div className="choice row">
            <div className="col-10">
              <label>
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  onChange={() => setCheck4(!Check4)}
                  checked={Check4}
                />
                <span>6 Taksit</span>
              </label>
            </div>
            <div className="col-2">
              <div className="row">
                <p>
                  1.049,84 TL<span>/Ay</span>
                </p>
              </div>
              <div className="row">
                <span className="mt-10">Toplam:6.299,01 TL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-bottom choice-area">
        <div className="col-12">
          <div className="choice row">
            <div className="col-10">
              <label>
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  onChange={() => setCheck5(!Check5)}
                  checked={Check5}
                />
                <span>9 Taksit</span>
              </label>
            </div>
            <div className="col-2">
              <div className="row">
                <p>
                  751,33 TL<span>/Ay</span>
                </p>
              </div>
              <div className="row">
                <span className="mt-10">Toplam:6.299,01 TL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <label>
            <input
              type="checkbox"
              className="custom-checkbox"
              onChange={() => setCheck6(!Check6)}
              checked={Check6}
            />
            <span>Hemen Al Şimdi Öde</span>
            <br />
            <span className="ml-40">
              12 aya varan taksitle 30 gün sonra öde
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PayArea;
