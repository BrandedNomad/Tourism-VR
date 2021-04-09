// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Module} from 'react-360-web';

let introPanel;
let introRoot;
let marketPanel;
let museumPanel;
let restaurantPanel;
let shoppingPanel;
let r360;

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules:[
        new surfaceModule(),
    ],
    ...options,
  });

  introPanel = new Surface(
    500,
    400,
    Surface.SurfaceShape.Cylinder
  );

  introRoot = r360.renderToSurface(
    r360.createRoot('Tourism_VR', {}),
    introPanel
  );

  marketPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  marketPanel.setAngle(
    0.2,
    0
  );

  museumPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  museumPanel.setAngle(
    Math.PI / 2,
    0
  );

  restaurantPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  )

  restaurantPanel.setAngle(
    -Math.PI / 2,
    0
  );

  shoppingPanel = new Surface(
    100,
    100,
    Surface.SurfaceShape.Flat
  );

  shoppingPanel.setAngle(
    3.6,
    0
  );



  r360.compositor.setBackground(r360.getAssetURL('gdansk.jpg'));
}

class surfaceModule extends Module {
  constructor(){
    super('surfaceModule')
  }

  start(){

    r360.renderToSurface(
        r360.createRoot('InfoPanel',{
          id: 'market',
          text: 'Browse our incredible fresh market'
        }),
        marketPanel
    )

    r360.renderToSurface(
        r360.createRoot('InfoPanel',{
          id:'shopping',
          text:'Shop until you drop!'
        }),
        shoppingPanel
    )

    r360.renderToSurface(
        r360.createRoot('InfoPanel',{
          id:'museum',
          text:'The life of Pablo Picasso: Blue.'
        }),
        museumPanel
    )

    r360.renderToSurface(
        r360.createRoot('InfoPanel',{
          id:'restaurant',
          text:'Enjoy refreshing Polish beer at our restaurants'
        }),
        restaurantPanel
    )

    r360.detachRoot(introRoot)
  }

  resizeSurface(width,height,id){
      if(id==='museum'){
          museumPanel.resize(width, height);
      } else if (id === 'restaurant') {
          restaurantPanel.resize(width,height);
      } else if (id === 'shopping'){
          shoppingPanel.resize(width,height);
      } else if (id === 'market'){
          marketPanel.resize(width,height);
      }
  }

}

window.React360 = {init};
