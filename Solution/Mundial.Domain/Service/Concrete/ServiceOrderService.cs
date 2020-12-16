using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class ServiceOrderService: BaseService<ServiceOrder>
    {
        private readonly ServiceOrderRepository _serviceOrderRepository;
        public ServiceOrderService(ServiceOrderRepository serviceOrderRepository): base(serviceOrderRepository)
        {
            _serviceOrderRepository = serviceOrderRepository;
        }
        
    }
}
