using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Model;
using Mundial.Infra.Repository;

namespace Mundial.Domain.Service.Concrete
{
    public class InstallmentService: BaseService<Installment>
    {
        private readonly InstallmentRepository _installmentRepository;
        public InstallmentService(InstallmentRepository installmentRepository): base(installmentRepository)
        {
            _installmentRepository = installmentRepository;
        }
        
    }
}
