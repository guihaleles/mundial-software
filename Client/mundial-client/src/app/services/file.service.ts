import { Injectable } from '@angular/core';
import { HttpService } from './abstract/http.service';
import { HttpClient} from '@angular/common/http';
import { File } from '../models/file'


@Injectable({
  providedIn: 'root'
})
export class FileService extends HttpService<File>{

  constructor(http: HttpClient) {
    super(http,'File');
   }

   public objectToClass(item: any): File{
    return new File(
      item.id,
      item.creationDate,
      item.exclusionDate,
      item.number,
      item.creationFileDate,
      item.name,
      item.city ,
      item.street ,   
      item.neighborhood ,  
      item.houseNumber ,   
      item.complement ,
      item.cEP ,
      item.phoneNumber ,
      item.profession ,
      item.salary ,
      item.workCity ,
      item.workStreet ,   
      item.workNeighborhood ,  
      item.workNumber ,   
      item.workComplement ,
      item.workCEP ,
      item.cPF ,
      item.rG ,
      item.work ,
      item.dateOfBirth ,
      item.partnerName ,
      item.partnerWork ,
      item.partnerPhone ,
      item.partnerSalary ,
      item.parentsObservation ,
      item.othersStores ,
      item.friendName ,
      item.friendsPhone ,
      item.fileObservation 
    )
  }


}
