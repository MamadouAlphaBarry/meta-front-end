import { LocalDateTime } from '@js-joda/core';

export interface TimeReportRequestDto {
    id: number;
    createdAt: LocalDateTime;
    date: Date;
    minutes: number;
    overtime: number;
    overtimeType: number;
    resourceId: number;
    jobId: number;
    traveltime: number;
    offsite: boolean;

    
}


