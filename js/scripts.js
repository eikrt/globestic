const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


function animate() {
    requestAnimationFrame( animate );
     globe.rotation.x += 0.01;
    globe.rotation.y += 0.01;
    renderer.render( scene, camera );
};
function init() {
    
};
const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('../res/globe.jpg') } );
const globe = new THREE.Mesh( geometry, material );

scene.add(new THREE.AmbientLight(0x333333));
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,3,5);
scene.add(light);

scene.add(globe);
camera.position.z = 5;

animate();
