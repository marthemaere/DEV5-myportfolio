import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// make export for class house

export default class House {
    constructor() {
        this.group = new THREE.Group();
        this.createHouse();  
    }

    createHouse() {
        
            //wall1
            const geometry = new THREE.PlaneGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: 0x6c4675 });
            const plane = new THREE.Mesh(geometry, material);
            plane.position.set(0, 0, -0.5);
            plane.material.side = THREE.DoubleSide;
            this.group.add(plane);
        
            //floor
            const textureLoader = new THREE.TextureLoader();
            const floorTexture = textureLoader.load('/Images/roughnessMap.jpg');
            const roofTexture = textureLoader.load('/Images/roof.jpg');
        
            const geometry2 = new THREE.PlaneGeometry(1, 1, 1);
            const material2 = new THREE.MeshBasicMaterial({ color: 0xa86642 });
            material2.map = floorTexture;
            const plane2 = new THREE.Mesh(geometry2, material2);
            plane2.position.y = -0.5;
            plane2.rotation.x = -Math.PI / 2;
            plane2.material.side = THREE.DoubleSide;
            this.group.add(plane2);
        
            //wall2
            const geometry3 = new THREE.PlaneGeometry(1, 1, 1);
            const material3 = new THREE.MeshBasicMaterial({ color: 0x6c4675 });
            const plane3 = new THREE.Mesh(geometry3, material3);
            plane3.position.x = 0.5;
            plane3.rotation.y = -Math.PI / 2;
            plane3.material.side = THREE.DoubleSide;
            this.group.add(plane3);
        
            //window
            const geometry4 = new THREE.PlaneGeometry(0.5, 0.5, 1);
            const material4 = new THREE.MeshBasicMaterial({ color: 0x000000 });
            const plane4 = new THREE.Mesh(geometry4, material4);
            plane4.position.z = -0.5;
            plane4.material.side = THREE.DoubleSide;
            this.group.add(plane4);
        
            //floor2
            const geometry5 = new THREE.PlaneGeometry(1, 1, 1);
            const material5 = new THREE.MeshBasicMaterial({ color: 0xa86642 });
            material5.map = floorTexture;
            const plane5 = new THREE.Mesh(geometry5, material5);
            plane5.position.y = 0.5;
            plane5.rotation.x = -Math.PI / 2;
            plane5.material.side = THREE.DoubleSide;
            this.group.add(plane5);
        
            //wall3
            const geometry6 = new THREE.PlaneGeometry(1, 1, 1);
            const material6 = new THREE.MeshBasicMaterial({ color: 0x6c4675 });
            const plane6 = new THREE.Mesh(geometry6, material6);
            plane6.position.z = -0.5;
            plane6.position.y = 1;
            plane6.material.side = THREE.DoubleSide;
            this.group.add(plane6);
        
            //wall4
            const geometry7 = new THREE.PlaneGeometry(1, 1, 1);
            const material7 = new THREE.MeshBasicMaterial({ color: 0x6c4675 });
            const plane7 = new THREE.Mesh(geometry7, material7);
            plane7.position.x = 0.5;
            plane7.rotation.y = -Math.PI / 2;
            plane7.position.y = 1;
            plane7.material.side = THREE.DoubleSide;
            this.group.add(plane7);
        
            //window2
            const geometry8 = new THREE.PlaneGeometry(0.5, 0.5, 1);
            const material8 = new THREE.MeshBasicMaterial({ color: 0x000000 });
            const plane8 = new THREE.Mesh(geometry8, material8);
            plane8.rotation.y = -Math.PI / 2;
            plane8.position.y = 1;
            plane8.position.x = 0.5;
            plane8.material.side = THREE.DoubleSide;
            this.group.add(plane8);
        
            //roof
            const geometry9 = new THREE.ConeGeometry(1, 1, 4);
            const material9 = new THREE.MeshBasicMaterial({ color: 0xffffff });
            material9.map = roofTexture;
            const cone = new THREE.Mesh(geometry9, material9);
            cone.position.y = 2;
            cone.rotation.y = 0.75;
            this.group.add(cone);
        
    }
    animate() {
        requestAnimationFrame( this.animate );
        this.renderer.render( this.scene, this.camera );
    }
    }