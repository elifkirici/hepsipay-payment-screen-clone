import { Formik } from "formik";
import Card from "../Card";
import { useState } from "react";

function FormGroup() {
  const [cardValue, setCardValue] = useState({});
  const [check, setcheck] = useState(false);
  const [selectedTab, setSelectedTab] = useState("newCard");

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-lg-6">
          < className="tab-container">
            <button
              className={
                selectedTab === "alreadyCard" ? "selectedTab" : "unSelectedTab"
              }
              onClick={() => setSelectedTab("alreadyCard")}
            >
              Kayıtlı Kartlarım
            </button>
            <button
              className={
                selectedTab === "newCard" ? "selectedTab" : "unSelectedTab"
              }
              onClick={() => setSelectedTab("newCard")}
            >
              Yeni Kart
            </button>
          </>

          <div className="row">
            <div className="col-12">
              <Formik
                initialValues={{
                  cardNo: "",
                  cardName: "",
                  sonKullanma: "",
                  guvenlikKod: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    setCardValue(values);
                  }, 400);
                }}
              >
                {({
                  values,

                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => {
                  setCardValue(values);
                  return (
                    <form
                      className="form-area"
                      onSubmit={handleSubmit}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSubmit();
                        }
                      }}
                    >
                      <label>Kart numarası</label>
                      <input
                        minLength={16}
                        maxLength={16}
                        name="cardNo"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cardNo}
                        type="text"
                      />

                      <label>Kartın üzerindeki isim</label>
                      <input
                        name="cardName"
                        onChange={handleChange}
                        maxLength={25}
                        onBlur={handleBlur}
                        value={values.cardName}
                        type="text"
                      />

                      <div className="row">
                        <div className="col-4">
                          <label>Son kullanma tarihi</label>
                          <input
                            name="sonKullanma"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.sonKullanma}
                            type="text"
                            className="w-75"
                            placeholder="Ay/Yıl"
                          />
                        </div>
                        <div className="col-6 ">
                          <label>
                            Güvenlik kodu
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fillRule="currentColor"
                              className="bi bi-info-circle ms-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                          </label>
                          <input
                            type="text"
                            name="guvenlikKod"
                            onChange={handleChange}
                            maxLength={3}
                            onBlur={handleBlur}
                            value={values.guvenlikKod}
                            placeholder="CVC/CVV"
                          />
                        </div>
                      </div>
                    </form>
                  );
                }}
              </Formik>
              <div className="row ">
                <div className="form-bottom">
                  <div className="col-12">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        className="bi bi-shield-fill-check"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                        />
                      </svg>
                      Ödemen 3D Secure onayına gerek kalmadan güvenle
                      <br />
                      gerçekleşecek.
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={() => setcheck(!check)}
                      checked={check}
                    />
                    <span>
                      Kartımın, sonraki alışverişlerim için Hepsiburada ve
                      <br /> Hepsipay'de kaydedilmesini onaylıyorum
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6 card-area">
          <Card cardValue={cardValue} />
        </div>
      </div>
    </div>
  );
}

export default FormGroup;
