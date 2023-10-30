import { Link } from 'react-router-dom';

function Picture() {
  return (
    <div className="intertainment">
      <div className="conteiner-project">
        <div className="intertainment-words">
          <h1>Əyləncə</h1>  
          <h2>Hər yerdə mövcud olan əyləncə. Hər yerdə fərqli və qeyri-adi olan.</h2>
          <p>Mövzu uşağlığı təmin edən filmlər. Heyranlıq hissi verən başlıklar. Hətta aydınlanma təmin edən əyləncə. Tədbirinizin məqsədini birləşdirən filmlər və TV şoularını araşdırın.<br/>
            Məşhur filmlərdən ən populyar TV klassiklərinə qədər hər şeyi gözdən keçirin.</p>
          <Link to="/picturepages" className="explore-btn">Əyləncəni kəşf et</Link>
        </div>
      </div>
    </div>
  )
}

export default Picture;
