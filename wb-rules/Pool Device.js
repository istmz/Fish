// Функция создает знычения в глобальном хранилище, принимая имя хранилища и id значения
function AddPool(name_storage, id) {
    name_storage[name_storage + "_pool_" + id] = {status_: false, lavel: false, id: id, volume: 0, weight: 0, type: ""}; // 
	log("The value was created: {} in the global storage", id);
}

// Функция создает глобальное хранилище, принимая на вход "имя хранилища"
function AddPersistentStorage(name_storage) {
	var name_storage = new PersistentStorage(name_storage + "_storage", {global: true});
	log("A global repository has been created: {}", name_storage);
}






