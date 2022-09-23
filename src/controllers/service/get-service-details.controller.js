
const fetchServiceDetailsController = ({ viewServiceUseCase }) => {

    return async function getDetails(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const toView = {
          ...info,
          source,
          id: httpRequest.params.id,
        };
        const service = await viewServiceUseCase(toView);
  
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body:  service ,
        };
      } catch (e) {
        console.log(e);
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message,
          },
        };
      }
    };
  
  }
  
  module.exports = fetchServiceDetailsController;