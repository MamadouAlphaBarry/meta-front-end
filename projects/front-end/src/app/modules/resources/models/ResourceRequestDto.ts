import { LocalDateTime } from "@js-joda/core";

export interface ResourceRequestDto {
     id: number;
     createdAt: LocalDateTime;
     userId: number;
}
