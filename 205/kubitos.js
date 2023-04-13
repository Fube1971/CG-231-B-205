var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


var lado = 1; // lado gobal para los cubos

var colorsito =[{ color: 0x4404f6 },{color: 0x61ff90 },{color: 0xf9802f }]; // arreglo colores diferentes

var geometria=[];
var materiales=[];
var kubitos=[];

for(i=0;i<3;i++){
  geometria.push(new THREE.BoxGeometry(lado,lado,lado));  // creacion gemotria kubitod
  materiales.push(new THREE.MeshPhongMaterial(colorsito[i]));   // creacion material para kubitos
  kubitos.push(new THREE.Mesh(geometria[i], materiales[i]));  // creacion objetos Three.JS kubitos

}

    document.addEventListener('keydown', function(event) {

      switch(event.keyCode) {

            case 67: // c , de creacion

              for(i=0;i<3;i++){        
                scene.add(kubitos[i]); // pone los kubitos ne el escenario 
              }
          break;

          case 97: // 1 teclado numerico

          geometria[0].translate( lado/2,lado/2,lado/2); // traslacion primer cubo

          break;

          case 98: // 2 teclado numerico

          geometria[1].scale( 1/2,  1/2,  1/2); //escalar segundo cubo 
          

          break;

          case 99: // 3 teclado numerico
            geometria[1].translate( lado/2, lado+lado/4, lado/2); //traslacion segundo cubo
          break;

          case 100: // 4 teclado numerico
          geometria[2].scale( 1/4, 1/4, 1/4); //escalar tercer cubo 

          break;

          case 101: // 5 teclado numerico

          geometria[2].translate( lado/2, lado+lado/2+lado/8,lado/2); ///traslacion tercer cubo

          break;

          case 96: // 0 teclado numerico

              this.location.reload();//borrar scena
          break;
      }
    });

    
//animation
  var animate = function(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }



const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();