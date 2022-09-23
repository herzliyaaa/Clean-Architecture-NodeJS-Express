const {
    addServiceUseCase,
    editServiceUseCase,
    viewServiceUseCase,
    viewAllServiceUseCase,
    softDeleteServiceUseCase
  } = require("../../use-cases/service/index");
  
  const addServiceController = require("./add-service.controller");
  const editServiceController = require("./edit-service.controller");
  const fetchAllServicesController = require("./get-all-services.controller");
  const fetchServiceDetailsController = require("./get-service-details.controller");
  const deleteServiceController = require("./soft-delete-service.controller")
  
  const postServiceController = addServiceController({
    addServiceUseCase,
  });
  const putServiceController = editServiceController({
    editServiceUseCase,
  });
  const getAllServiceController = fetchAllServicesController({
    viewAllServiceUseCase,
  });
  const getServiceByIdController = fetchServiceDetailsController({
    viewServiceUseCase,
  });
  
  const softDeleteServiceController = deleteServiceController({softDeleteServiceUseCase})
  
  const controller = Object.freeze({
    postServiceController,
    putServiceController,
    getAllServiceController,
    getServiceByIdController,
    softDeleteServiceController
  });
  
  module.exports = controller;
  
  module.exports = {
    postServiceController,
    putServiceController,
    getServiceByIdController,
    getAllServiceController,
    softDeleteServiceController
  };
  