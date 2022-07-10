//import './style.css'
//import dependancies from three
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
//import { SphereGeometry } from 'three';
//create a scene
const scene = new THREE.Scene();
//create a camera, first argument(field of view, aspect-ratio[w / h],view frustrum[x,y])
const camera = new THREE.PerspectiveCamera(  75, window.innerWidth / window.innerHeight,0.1,1000 );
//renderer
const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector('#bg'),
});
//setting the pixel ratio
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
//calling the renderer's render method
renderer.render( scene, camera);
//shape geometry

const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial( {color: 0xFF6347, } );
const torus = new THREE.Mesh(geometry, material);
//scence for shape
scene.add(torus)
//lighting
const pointLight= new THREE.PointLight(0xffffff)
pointLight.position.set(20,20,20)
//ambiient lighting
const ambientLight= new THREE.AmbientLight(0xffffff)

//scene add for lighting
scene.add(pointLight, ambientLight)
//DEBUGGING LIGHTING
//lighthelper
//substantiate the light helpeer
const lightHelper = new THREE.PointLightHelper(pointLight)
//grid helper
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper, gridHelper)

//controls
const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff})
  const star = new THREE.Mesh(geometry, material);

  const [ x, y ,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread( 100 ))

  star.position.set(x,y,z);
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background =spaceTexture;

// const avatar

const avatarTexture =new THREE.TextureLoader().load('avatar.jpg');

const avatar = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({ map: avatarTexture})
);

scene.add(avatar);

// Moon

const moonTexture =new THREE.TextureLoader().load('moon.jpg');
const normalTexture =new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshBasicMaterial({ map: moonTexture,
  normalMap: normalTexture
})
);

moon.position.z= 30;
moon.position.setX(-10);


function moveCamera(){
//current position
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatar.rotation.y += 0.01;
  avatar.rotation.z +=0.01;

  camera.position.z = t *-0.01;
  camera.position.x = t *-0.0002;
  camera.rotation.y = t* -0.0002;
  

}
document.body.onscroll = moveCamera

scene.add(moon);



function animate(){
  requestAnimationFrame( animate );

torus.rotation.x +=0.01;
torus.rotation.y +=0.005;
torus.rotation.z +=0.01;

controls.update();

  renderer.render(scene,camera);
}

animate()