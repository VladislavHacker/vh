function drawSphere() {
  init();
  animate();
}
var scene, camera, geometry,mesh,renderer;
function init() {

   scene = new THREE.Scene()
   const loader = new THREE.TextureLoader();
   loader.load('./assets/tree_img/bg.jpg' , function(texture){
        scene.background = texture;
       });
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000); // camera
    camera.position.z = 300;
    scene.add(camera);

    var radius = 60, segments = 30, rings = 40;
    geometry = new THREE.SphereGeometry(radius, segments, rings); // sphere object

    const material = new THREE.MeshBasicMaterial({
      map: loader.load('./assets/tree_img/img.jpeg'), //material with texture
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
   // renderer
   renderer = new THREE.WebGLRenderer();
         renderer.setSize(window.innerWidth, window.innerHeight);
         document.body.appendChild(renderer.domElement);
 }

function animate() {
        requestAnimationFrame(animate);
        render();
}

function render() {
  if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      canvas.style.width = window.innerWidth+'px';
      canvas.style.height = window.innerHeight+'px';
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  }
      mesh.rotation.y += .02;
      renderer.render(scene, camera);

}

// draw
drawSphere();
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
