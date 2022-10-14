import * as THREE from 'three'
export default class Background{
    constructor(){
        this.group = new THREE.Group();
        this.createBackground();
    }

    createBackground(){
        //sky
        const geometry = new THREE.SphereGeometry(100, 100, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x152238 });
        const sky = new THREE.Mesh(geometry, material);
        sky.position.set(0, 0, -50);
        sky.material.side = THREE.DoubleSide;
        this.group.add(sky);

        //ground
        const geometry2 = new THREE.PlaneGeometry(100, 100, 1);
        const material2 = new THREE.MeshBasicMaterial({ color: 0x013220 });
        const ground = new THREE.Mesh(geometry2, material2);
        ground.position.set(0, -0.55, 0);
        ground.rotation.x = -Math.PI / 2;
        ground.material.side = THREE.DoubleSide;
        this.group.add(ground);
}
}