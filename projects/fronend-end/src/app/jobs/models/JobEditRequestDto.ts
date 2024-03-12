import { LocalDateTime } from 'js-joda';

export interface JobEditRequestDto {
     id: string;
     createdAt: LocalDateTime;
     updatedAt: LocalDateTime;
     name: string;
     code: string;
     description: string;
     startDate: Date;
     endDate: Date;
     status: string;
     jobId: number;
     customerId: number;
     activityId: number;
     businessUnitId: number;
     pmId: number;
     alias: string;
     deletedAt: LocalDateTime;
     isInternal: boolean;
     attr1: string;
     attr2: string;
     costCenterId: number;
     isClosed: boolean;
     closedAt: Date;
     isOverturn: boolean;
     old: boolean;
     hasAvailability: boolean;
     availabilityCost: number;
     addTmRevenues: boolean;
     note: string;
     isEnabled: boolean;
     enabledAt: Date;
     enabledBy: number;
     isDaily: boolean;
     isDirect: boolean;
     isSupport: boolean;
     sal: number;
     isWeeklyClosed: boolean;
}

