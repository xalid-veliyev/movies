
import React, { useRef, useEffect } from 'react';
const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const images = [];
    const imageSources = [
      'https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/12/teen-wolf-movie-1.png?ssl=1',
      'https://cdn.cinematerial.com/p/297x/rtlylhma/scream-vi-movie-poster-md.jpg?v=1678274172',
      'https://www.joblo.com/wp-content/uploads/2022/12/meg-2-poster.jpg',
      'https://i.ebayimg.com/images/g/PFEAAOSwf-1jgDmL/s-l500.jpg',
      'https://pbs.twimg.com/media/FIsm9GwXEAMI-sT.jpg:large',
      'https://dx35vtwkllhj9.cloudfront.net/lionsgateus/plane/images/regions/us/onesheet.jpg',
      'https://i.ebayimg.com/images/g/oqIAAOSw6jNjmdFn/s-l1600.jpg',
      'https://www.themoviedb.org/t/p/original/1E5baAaEse26fej7uHcjOgEE2t2.jpg',
      'https://filmcombatsyndicate.com/wp-content/uploads/2022/07/wp-1658355419863.jpg',
      'https://juksun.com/wp-content/uploads/2023/03/Hypnotic-Movie-Poster.jpg',
    ];

    imageSources.forEach((src) => {
      const image = new Image();
      image.src = src;
      images.push(image);
    });

    let currentIndex = 0;
    let opacity = 1;
    let transition = 0;
    let isReverse = false;

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      if (transition < 1) {
        context.globalAlpha = 1 - transition;
        context.drawImage(images[currentIndex], 0, 0, canvas.width, canvas.height);
      } else {
        context.globalAlpha = opacity;
        context.drawImage(images[currentIndex], 0, 0, canvas.width, canvas.height);
      }

      transition += 0.01;

      if (transition >= 2) {
        transition = 0;
        opacity = 1;

        if (!isReverse) {
          currentIndex = (currentIndex + 1) % images.length;
        } else {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
      }

      if (transition > 1) {
        opacity -= 0.01;
      }

      if (currentIndex === images.length - 1 && !isReverse) {
        isReverse = true;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      <h1 className='canvas-h'>
        Filmlərin fraqmanları üçün, yuxarıdakı film postərlərinə tıklayın
        </h1>
      <div className="canvas-container">
        <canvas ref={canvasRef} className="canvas" width={1000} height={1000} />
      </div>
    </>
  );
};

export default CanvasAnimation; 