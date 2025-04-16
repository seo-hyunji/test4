import React from 'react';
import { useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';


const Gallery = () => {
  const [dataImage, setDataImage] = useState([]);

  useEffect(()=>{
    const fetchImg = async () =>{
      try {
        const res = await fetch(process.env.PUBLIC_URL + '/data/data.json');
        const data = await res.json();
        setDataImage(data);

      } catch (error) {
        console.error("JSON 가져오기 실패", error);
      }
    }
    
    fetchImg();

    


  },[]);

  return (
    <div className='gallery-outbox'>
      {/* 흐르는 이미지 시작 */}
      <div className='scroll-img'>
        <div className='scroll-track'>
          {
            dataImage.concat(dataImage).map((item, index) => (
              <div className='scroll-inbox' key={index}>
                <div>{ item.title }</div>
                <img src={ process.env.PUBLIC_URL + item.src } alt={ item.title } />
                <div>{ item.desc }</div>
              </div>
            ))
          }
        </div>
      </div>
      
      {/* 페이드 이미지 1*/}
      <motion.div
        className='fade-section'
        initial={{ opacity:0, y:60 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1.5, ease:'easeOut' }}
        viewport={{ once:true, amount:0.4 }}
      >
        <div className='img-box'>
          <img src={ process.env.PUBLIC_URL + '/images/image1.jpg'} alt="이미지" />
        </div>
        <div className='text-box'>
          <h2>hello</h2>
          <h4>hello, hello, hello</h4>
        </div>
      </motion.div>

      {/* 페이드 이미지 2 */}
      <motion.div
        className='fade-section'
        initial={{ opacity:0, y:60 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:1.5, ease:'easeOut', delay: 0.5 }}
        viewport={{ once:true, amount:0.4}}
      >
        <div className='img-box'>
          <img src={ process.env.PUBLIC_URL + '/images/image2.jpg'} alt="이미지" />
        </div>
        <div className='text-box'>
          <h2>hello</h2>
          <h4>hello, hello, hello</h4>
        </div>
      </motion.div>
      
      {/* 모아지는 이미지 2 */}
      <div className='group-img'>
        {
          
          [0,1,2].map((i)=> {
            const randomX = Array.from({ length: 3 }, () => 
              Math.floor(Math.random() * (600 - (-400) + 1)) - 400
            );
            const randomY = Array.from({ length: 3 }, () => 
              Math.floor(Math.random() * (400 - (-200) + 1)) - 200
            );
            return (
            <motion.img
              key={i}
              src={ process.env.PUBLIC_URL + `/images/image${i+1}.jpg` }
              initial={{opacity:0, y:randomY[i], x:randomX[i]}}
              whileInView={{ opacity:1, y:0, x:0}}
              transition={{ duration:1, delay:i*0.5 }}
              viewport={{ once:true, amount:0.3}}
              className='group-img-img'
            />
          );
          })
        }
      </div>

    </div>
  )
}

export default Gallery