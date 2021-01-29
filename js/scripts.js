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
const geometry = new THREE.SphereGeometry(2, 64, 64);
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const globe = new THREE.Mesh( geometry, material );
scene.add(globe);
camera.position.z = 5;

animate();
