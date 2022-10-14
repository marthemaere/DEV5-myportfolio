import './style.css'
import House from './house.js'
import Background from './background';
import Assets from './assets';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
      camera.position.set( -5, 3, 5 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
      //light
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
      directionalLight.position.set( 4, 3, 6 );
      scene.add( directionalLight );

      const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
      scene.add( ambientLight );

      //add ambientlight helper
      const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2);
      scene.add(directionalLightHelper);



      const controls = new OrbitControls(camera, renderer.domElement);

			camera.position.z = 5;

      const house = new House();
      scene.add(house.group);
      const background = new Background();
      scene.add(background.group);
      const assets = new Assets();
      scene.add(assets.group);

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
			};

			animate();