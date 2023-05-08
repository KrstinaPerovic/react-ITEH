import React from 'react';

function ONama() {
  return (
    <div className='about-page '>
      <h1>O nama</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nibh vel nisi pulvinar, non vestibulum erat lobortis. Sed condimentum, nisi at bibendum rutrum, velit mauris congue quam, eget pharetra mauris mauris nec tortor. Quisque mattis leo enim, at finibus urna hendrerit in. Nullam eleifend dapibus massa, quis ultrices metus molestie ut. In sed lectus vestibulum, euismod mauris nec, sollicitudin mi. Morbi ut leo non magna pharetra pretium. Sed aliquam semper odio, vel pharetra odio. Donec ullamcorper tincidunt convallis. Suspendisse rutrum sagittis massa id eleifend. Aliquam vestibulum orci elit, ut bibendum elit gravida eu.</p>
      <div style={{height: '400px', width: '100%'}}>
        <iframe 
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.8115200906356!2d-122.40891668414685!3d37.783381341236354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f78fb49f2e5%3A0x345aa0b893f78a2f!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1620568141253!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ONama;
