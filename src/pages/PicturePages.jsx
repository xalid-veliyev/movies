import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function PicturePages() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
       <FontAwesomeIcon className="back-icon" icon={faLeftLong} onClick={goBack} />
    <div className="picture-back">
      <div className="browse">
      <h1>ƏYLƏNCƏ SEÇİMLƏRİNƏ GÖZ GƏZDİRİN</h1>
      <h2>
      Filmler, TV Seriallarımız ve daha çoxu, izləyicilərimizə özəl olaraq hazırlanmışdır. Başlamaq üçün aşağıdakilardan birini seçin.
      </h2>
      </div>
      <div className="browse-menu">
        <ul>
          <span className="first-li">Tələbələr</span>
          <li className="arrow-bottom">Universitet kampları </li>
          <li className="for-margin">Hotel və motellər</li>
          <li>Məktəblilər</li>
          <li>Daha az yaşlılar</li>
        </ul>
        <ul>
          <span  className="first-li">Topluluq</span>
           <li className="arrow-bottom">İctimai kitabxanalar</li>
           <li className="for-margin">Muzeylər</li>
           <li>Restoranlar</li>
           <li>Əyləncə məkanları</li>
        </ul>
        <ul>
          <span  className="first-li">Sərnişinlər</span>
          <li className="arrow-bottom">Motosikletlər</li>
          <li className="for-margin">Taksilər</li>
          <li>Avtobuslar</li>
          <li>Təyyarələr</li>
        </ul>
      </div>
    </div>
   
    </>
  )
}

export default PicturePages