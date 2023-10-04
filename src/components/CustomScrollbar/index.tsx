import React from 'react';
import './style.css';

const randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit."

const CustomScrollbar = () => {
  return (
    <div>
      <h1>Custom Scrollbar</h1>
      <div className='scrollbar-container'>
      <div>
        <div className='with-scrollbar'>{randomText}</div>
        <p>scrolls showing scrollbar</p>
      </div>
      <div>
        <div className='without-scrollbar'>{randomText}</div>
        <p>scrolls without showing scrollbar</p>
      </div>
    </div>
    </div>
  )
}

export default CustomScrollbar;