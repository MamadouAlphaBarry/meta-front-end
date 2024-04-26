import { LocalDateTime } from '@js-joda/core';

export interface AbsenceRequestDto {
    
     id: number;
    
     createdAt: LocalDateTime;
    
     updatedAt: LocalDateTime;
    
     resourceId: number;
    
     managedBy: number | null;
    
     requestStart: LocalDateTime;
    
     requestEnd: LocalDateTime;
    
     status: string;
    
     jobI : number | null;
}

