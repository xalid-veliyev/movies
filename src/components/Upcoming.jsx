import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function Upcoming() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
   "https://swank.azureedge.net/swank/prod-film/de99948a-aa75-426a-b622-1d6ee6a9e4df/1de749d9-e900-4684-a86e-9d73c2905b1f/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
   "https://swank.azureedge.net/swank/prod-film/670ee57c-2410-4b63-9bb8-91e568c84918/1f2c78bc-949e-4d95-be97-7047a458eaf4/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
   "https://swank.azureedge.net/swank/prod-film/614df0b2-b0a2-41ad-9147-1a9bc65814b9/c153b6f4-a657-42ef-b75b-40ff4883e247/one-sheet.jpg?width=335&height=508&mode=crop&format=webp",
   "https://swank.azureedge.net/swank/prod-film/5acfafb1-2322-4693-a554-a531bb9b928b/3a9e223d-69f3-4020-a5af-c24c050793f9/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
   "https://swank.azureedge.net/swank/prod-film/7924d991-88a6-4bed-a786-ee0e633e34fd/c2419627-7677-4eec-a71f-c3a81a82e18b/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
  "https://swank.azureedge.net/swank/prod-film/405a4fb7-9b9e-4b75-8769-3ddd54c3ebf4/6004e928-c691-4fee-9139-768f5941a036/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
  "https://swank.azureedge.net/swank/prod-film/0b09d06f-62d4-4d8f-837f-c7b92cb6a7a5/6e39bcfe-6321-4cbd-9b08-e04cd9e01afd/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
   "https://swank.azureedge.net/swank/prod-film/b80e46e9-304b-4818-94f1-db5e42d9aad7/7e073c5b-b28e-4a7b-a307-e8c86b0e4627/one-sheet.jpg?width=335&height=508&mode=crop&format=webp", 
  "https://swank.azureedge.net/swank/prod-film/3e1de275-13a0-4b6d-a8f7-fd9eb243663e/24686377-6503-4a49-88e3-414d6af1ae4a/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
    "https://swank.azureedge.net/swank/prod-film/9fd77ef4-ca63-434d-a091-953ee3ebdaf0/61216bfc-7a35-400f-bfe9-12accda8872b/one-sheet.jpg?width=335&height=508&mode=crop&format=webp", 
    "https://swank.azureedge.net/swank/prod-film/206bcd84-6d7c-40ae-9efa-0784b72c6e9f/40eb1002-7519-4022-a71c-b2d43a2af393/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
    "https://swank.azureedge.net/swank/prod-film/99fef7a1-c8b6-4d45-a280-b68ce215e4c7/ca9caaa7-7c15-49d4-add9-f6e86f1ec015/one-sheet.jpg?width=335&height=508&mode=crop&format=webp", 
    "https://swank.azureedge.net/swank/prod-film/dfa1b635-5774-4c7c-8554-7936207478a5/930ca7e6-a7b6-4251-9db5-803813217c08/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
    "https://swank.azureedge.net/swank/prod-film/7390404d-aa8d-4027-8cb8-9efdb456ab26/bc9154da-ac90-4363-827e-c5c33c02d8d5/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
  "https://swank.azureedge.net/swank/prod-film/d47150e6-47c6-4cec-9b16-60c6645e8ec1/cc860ec6-31ce-4f91-a5c9-3223e9f6dbcc/one-sheet.jpg?width=335&height=508&mode=crop&format=webp" ,
  ]     
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  

  return (
    <div className="upcoming">
      <h1>Yakında çıkacak olan filmler</h1>
      <div className="upcoming-picture">
        
        <IoIosArrowBack className="upcoming-icon" onClick={handlePrevious} />
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
   
        <IoIosArrowForward className="upcoming-icon" onClick={handleNext} />
        <span className="upcoming-span">
          Saytımızda yaxın zamanda primyerası olacaq olan filmlərə<br/> yüksək görüntü effektləri baxa bilərsiniz.<br/>
          Film əyləncənizi ve zamanınızı bizimlə bölüşün.<br/>
          Film dünyasını bizimlə yaşayın.<br/>
          Sizə xidmət etməkdən məmnunluq duyuruq.
        </span>
      </div>
    </div>
  );
}

export default Upcoming;