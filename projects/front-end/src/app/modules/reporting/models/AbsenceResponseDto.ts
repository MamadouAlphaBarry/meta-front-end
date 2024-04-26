import { LocalDateTime } from '@js-joda/core';

export interface AbsenceResponseDto {
     id: number;
     createdAt: LocalDateTime;
     updatedAt: LocalDateTime;
     resourceId: number;
     managedBy: number | null;
     requestStart: LocalDateTime;
     requestEnd: LocalDateTime;
     status: string;
     jobId: number | null;
}

