const serviceDB = require("../../data-access/service/index");
const {serviceItemEntity, serviceEntity} = require("../../entities/services/index");

const addService = require("./add-service.usecase");
const editService = require("./edit-service.usecase");
const viewService = require("./view-service.usecase");
const viewAllService = require("./view-all-service.usecase");
const softDelService = require("./delete-service.usecase");


//Service Item
const addServiceItem = require("./add-service-item.usecase")



const addServiceUseCase = addService({
  serviceDB,
  serviceEntity
});
const editServiceUseCase = editService({
  serviceDB,
  serviceEntity
});
const viewServiceUseCase = viewService({ serviceDB });
const viewAllServiceUseCase = viewAllService({ serviceDB });
const softDeleteServiceUseCase = softDelService({ serviceDB });


//Service Item
const addServiceItemUseCase = addServiceItem({
  serviceDB,
  serviceItemEntity
});


const serviceService = Object.freeze({
  addServiceUseCase,
  editServiceUseCase,
  viewServiceUseCase,
  viewAllServiceUseCase,
  softDeleteServiceUseCase,
  addServiceItemUseCase
});

module.exports = serviceService;

module.exports = {
  addServiceUseCase,
  editServiceUseCase,
  viewServiceUseCase,
  viewAllServiceUseCase,
  softDeleteServiceUseCase,
  addServiceItemUseCase
};
