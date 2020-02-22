export interface Administrador {
    Id_Admin:number;
    Nombre:String;
    Apellido:String;
    Cedula:String;
    Direccion:String;
    Email:String;
    Telefono:String;
    Cumpleanos:Date;
    Usuario:String;
    Contrasena:String;

    // Se crean estas variables con el mismo nombre solo que en minuscula ya que al probar el envio de los datos
    // a guardar en el Json se envian con la inicial mayuscula y así no permiten su almacenamiento.
    // id_Admin:number;
    // nombre:String;
    // apellido:String;
    // cedula:String;
    // direccion:String;
    // email:String;
    // telefono:String;
    // cumpleanos:Date;
    // usuario:String;
    // contrasena:String;
    

}
