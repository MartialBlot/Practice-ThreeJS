//Config de base

//Mise en place de la scene
let scene = new THREE.Scene();
scene.background = new THREE.Color('yellow');
//Mise en place de la camera (Champ de vision, rapport aspect ecran, rendu au plus près, rendu au plus loin)
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//Moteur de rendu
let renderer = new THREE.WebGLRenderer({ antialias: true });
//Taille écran de la sortie du moteur 
renderer.setSize(window.innerWidth, window.innerHeight);
//Utilisation du body pour afficher la scène(init d'un Canvas)
document.body.appendChild(renderer.domElement);

//CUBE
//Mise en place d'un cube (points du cube)
let geometry = new THREE.BoxGeometry(1, 1, 1);
//Appliquer un matériau coloré
let material = new THREE.MeshBasicMaterial( { color : 0x088da5 } );
//Création du cube et application du matériau
let cube = new THREE.Mesh( geometry, material );
//Ajout du cube dans la scène
scene.add(cube);
//Contours
const wireframeGeometry = new THREE.WireframeGeometry( geometry );
const wireframeMaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
const wireframe = new THREE.LineSegments( wireframeGeometry, wireframeMaterial );
cube.add( wireframe );

//Sphère
var geometryS = new THREE.SphereGeometry( .8, 32, 32 );
var materialS = new THREE.MeshBasicMaterial( {color: 0x088da5} );
var sphere = new THREE.Mesh( geometryS, materialS );
scene.add( sphere );
const wireframeGeometryS = new THREE.WireframeGeometry( geometryS );
const wireframeMaterialS = new THREE.LineBasicMaterial( { color: 0xff0000 } );
const wireframeS = new THREE.LineSegments( wireframeGeometryS, wireframeMaterialS );
sphere.add( wireframeS );

//Vitesses éléments
let speedCube = 0.07;
let speedSphere = 0.09;

//réglage caméra (par default 0,0,0 même position que le cube)
camera. position.z = 5;
cube.position.x = -6

//Animer la scène
function animate(){
    
    if(Math.round(cube.position.x+1) === Math.round(sphere.position.x)){
        speedCube = -speedCube
    }

    if(Math.round(cube.position.x) === -9){
        speedCube = -speedCube
    }


    //Rafraichissement de la scène
    requestAnimationFrame(animate);
    //déplacement du cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.position.x += speedCube;
    // if(cube.position.x > 7.9 ){
    //     cube.position.x = -7.8;
    // }
    
    //déplacement de la sphere
    sphere.rotation.x += 0.14;
    sphere.rotation.y += 0.18;
    // sphere.position.y += speedSphere;
    // if(sphere.position.y > 5 ){
    //     sphere.position.y = -4;
    // }

    //Lancement des élément à animer
    renderer.render( scene, camera );
}
//Lancement de la fonction animate
animate();