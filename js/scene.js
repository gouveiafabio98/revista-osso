let scene, camera, renderer, hlight, car, controls;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfc4c68);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;

    /*controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', renderer); */

    hlight = new THREE.AmbientLight(0x0404040, 100)
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('osso.glb', function(gltf) {
        car = gltf.scene.children[0];
        car.scale.set(1, 1, 1);
        scene.add(gltf.scene);
        animate();
    });
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();