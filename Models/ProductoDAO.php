<?php

//////////////////////////////////////////////// Conexion 1

// $usuario ="root"
// $contraseña="Ruffito202104"
// try {
//     $mbd = new PDO('mysql:host=localhost;dbname=prueba', $usuario, $contraseña);
//     foreach($mbd->query('SELECT * from usuario') as $fila) {
//         print_r($fila);
//     }
//     $mbd = null;
// } catch (PDOException $e) {
//     print "¡Error!: " . $e->getMessage() . "<br/>";
//     die();
// }

//////////////////////////////////////////////// Conexion 2

// try{
// 	$conexion = new PDO ("mysql:host=localhost:3308;dbname=prueba","root","Ruffito202104");
// 	echo "Conexion realizada correctamente";
// }catch(Exception $e){
// 	echo "Err0r" .$e;
// }

//////////////////////////////////////////////// Conexion 3

include '../Connections/conexion.php';


class ProductoDAO{
    public $id;
    public $nombre;
    public $descripcion;

    function __construct($id=null,$nom=null,$cod=null){
        $this->id=$id;
        $this->nombre=$nom;
        $this->descripcion=$cod;
    }

    function TraerClases (){
        $conexion = new Conexion ('localhost', 'root', '', 'MiguelBd');
        try {
            $conn = $conexion->Conectar();
            $stmt = $conn->query('SELECT * FROM electrodomesticos');
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $rows;
            $conexion->cerrarConexion();
        } catch(PDOException $e) {
            echo "error al conectar a la base de datos ======>".$e->getMessage();
        }
    }
    function eliminarClases ($id){
        $conexion = new Conexion ('localhost', 'root', '', 'MiguelBd');
        try {
            $conn = $conexion->Conectar();

            // $query = "DELETE FROM electrodomesticos WHERE id =$id";
            $consulta = $conn->prepare("DELETE FROM electrodomesticos WHERE id = $id");
            $consulta->execute();
            return "Exito";
        } catch(PDOException $e) {
            echo "error al conectar a la base de datos ======>".$e->getMessage();
        }
    }


// $conexion = new Conexion('localhost', 'root', '', 'MiguelBd');


?>