using System.Threading.Tasks;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class FileService: BaseService<File>
    {
    
        private readonly FileRepository _fileRepository;
        private readonly ServiceOrderRepository _serviceOrderRepository;

        private readonly ServiceOrderService _serviceOrderService;
        
        public FileService(FileRepository fileRepository, 
        ServiceOrderRepository serviceOrderRepository, ServiceOrderService serviceOrderService)
        : base(fileRepository)
        {
            _fileRepository = fileRepository;
            _serviceOrderRepository = serviceOrderRepository;
            _serviceOrderService = serviceOrderService;
            name = "Ficha";
        }

        public override bool Update(File item)
        {
            var oldItemId = item.Id.GetValueOrDefault();
   
            if(base.Update(item))
            {
                var serviceOrders = _serviceOrderRepository.GetAllValidServiceOrdersByFileId(oldItemId);
                
                foreach (var serviceOrder in serviceOrders)
                {
                    serviceOrder.FileId = item.Id.GetValueOrDefault();
                    _serviceOrderService.Update(serviceOrder);
                }
            }
            return true;
        }        

    }
}
