/*{
    "_id": ObjectId,
    "servicio_id": ObjectId,  // Referencia al servicio
    "fecha": Date,
    "horarios": [ 
      {
        "hora_inicio": String,  // Ej: "09:00"
        "hora_fin": String,     // Ej: "10:00"
        "disponible": { "type": Boolean, "default": true }
      }
    ]
  }*/
  